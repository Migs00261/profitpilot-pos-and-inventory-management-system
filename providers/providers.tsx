'use client'
import store from "@/redux/store"
import React from "react"
import { persistStore } from "redux-persist"
import { PersistGate } from "redux-persist/integration/react"
import { Provider } from "react-redux"
export const Providers = ({children}:{children:React.ReactNode}) => {
    let persistor = persistStore(store)
  return (
    <Provider store={store}>
        <PersistGate persistor={persistor}>
            {children}
        </PersistGate>
    </Provider>
  )
}
