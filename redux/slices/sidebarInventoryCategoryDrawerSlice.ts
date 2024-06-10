import { createSlice } from "@reduxjs/toolkit";


interface InitialTypeState {
    sidebardrawer:boolean
}

const initialState:InitialTypeState = {
    sidebardrawer:false
}
const sidebarInventoryCategoryDrawerSlice = createSlice({
    name:"sidebarinventorycategorydrawer",
    initialState,
    reducers:{
        sidebarinventorycategorydrawertrigger:(state)=>{
            state.sidebardrawer ? state.sidebardrawer = false : state.sidebardrawer = true
        },

    },
})

export const {sidebarinventorycategorydrawertrigger} = sidebarInventoryCategoryDrawerSlice.actions;
export default sidebarInventoryCategoryDrawerSlice.reducer;
