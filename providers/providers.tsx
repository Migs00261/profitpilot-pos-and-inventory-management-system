'use client'
import store from "@/redux/store"
import React from "react"
import { persistStore } from "redux-persist"
import { QueryClientProvider, QueryClient } from "react-query";
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
import {ReactQueryDevtools} from 'react-query/devtools'

const queryClient = new QueryClient();

export const Providers = ({children}:{children:React.ReactNode}) => {
    let persistor = persistStore(store)
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
        <QueryClientProvider client={queryClient}>
          {children}
        <ReactQueryDevtools initialIsOpen={false} position="bottom-right"/>
        </QueryClientProvider>

        </PersistGate>
    </Provider>
  )
}
