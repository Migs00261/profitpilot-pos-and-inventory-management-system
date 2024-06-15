'use client'
import React from 'react'
import { PersistGate } from "redux-persist/integration/react"
import { persistStore } from "redux-persist"
import store from "@/redux/store"

function ReduxPersist({children}:{children:React.ReactNode}) {
    let persistor = persistStore(store)
  
  return (
    <PersistGate  persistor={persistor}>{children}</PersistGate>
  )
}

export default ReduxPersist