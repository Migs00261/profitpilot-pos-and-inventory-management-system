'use client'
import store from "@/redux/store"
import React from "react"
import { QueryClientProvider, QueryClient } from "react-query";
import { Provider } from "react-redux"
import {ReactQueryDevtools} from 'react-query/devtools'
import ReduxPersist from "./reduxpersist";
const queryClient = new QueryClient();

export const Providers = ({children}:{children:React.ReactNode}) => {
    
  return (
  
    <Provider store={store}>
       
        <QueryClientProvider client={queryClient}>
         <ReduxPersist>
           {children}

         </ReduxPersist>
          
         
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
        </QueryClientProvider>

      
    </Provider>
   
  )
}
