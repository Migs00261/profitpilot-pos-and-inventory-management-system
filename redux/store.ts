import {configureStore,combineReducers} from "@reduxjs/toolkit"
import storage from "redux-persist/lib/storage"
import {persistReducer} from "redux-persist"
import sidebarnavSlice from "./slices/sidebarnav"
import sidebarInventoryBrandSlice from "./slices/sidebarInventoryBrandSlice"
const persistConfig = {
    key:"root",
    version:1,
    storage
}

const reducer = combineReducers({
    sidebarnav:sidebarnavSlice,
    sidebarnavbrand:sidebarInventoryBrandSlice

})

const persistedReducer = persistReducer(persistConfig,reducer)
const store = configureStore({
    reducer:{
        reducer:persistedReducer

    }
})

export type RootState = ReturnType<typeof store.getState>;
export type AppDispatch = typeof store.dispatch;

export default store;

//import { RxHamburgerMenu } from "react-icons/rx";
//