"use client";
// ^ this file needs the "use client" pragma

import { ApolloLink, HttpLink,Context } from "@apollo/client";
import {
  ApolloNextAppProvider,
  ApolloClient,
  InMemoryCache,
  SSRMultipartLink,

} from "@apollo/experimental-nextjs-app-support";

// have a function to create a client for you
function makeClient() {
  const httpLink = new HttpLink({
    // this needs to be an absolute url, as relative urls cannot be used in SSR
    uri: "http://localhost:5001/graphql",
    // you can disable result caching here if you want to
    // (this does not work if you are rendering your page with `export const dynamic = "force-static"`)
    fetchOptions: { cache: "no-store" },
    headers:{"authorization":"bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJ1c2VySWQiOiI2NjZlZjA5ODVlODc3MzY3YzE5YTNkYTIiLCJpYXQiOjE3MTg1NDY1ODR9.6bY0J37b155NNVxmUstdt9-P7jlWPfkyBAXZ6uzB54Y"}
    // you can override the default `fetchOptions` on a per query basis
    // via the `context` property on the options passed as a second argument
    // to an Apollo Client data fetching hook, e.g.:
    // const { data } = useSuspenseQuery(MY_QUERY, { context: { fetchOptions: { cache: "force-cache" }}});
  });
  
  //custom merge function for the query clients so the INmemoryCache can safely merge these objects
  //we have to documents clients and projects
  const cache = new InMemoryCache({
    typePolicies:{
      Query:{
        fields:{
          warehouses:{
            merge(existing,incoming){
              return incoming;
            }
          },
          projects:{
            merge(existing,incoming){
              return incoming;
            }
          },
        }
      }
    }
  })

  
  // use the `ApolloClient` from "@apollo/experimental-nextjs-app-support"
  return new ApolloClient({
    // use the `InMemoryCache` from "@apollo/experimental-nextjs-app-support"
    cache,
    link:httpLink,
   
  });
}

// you need to create a component to wrap your app in
export  function ApolloWrapper({ children }: React.PropsWithChildren) {
  return (
    <ApolloNextAppProvider makeClient={makeClient}>
      {children}
    </ApolloNextAppProvider>
  );
}
