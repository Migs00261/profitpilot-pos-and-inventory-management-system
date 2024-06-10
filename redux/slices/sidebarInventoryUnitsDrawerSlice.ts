import { createSlice } from "@reduxjs/toolkit";


interface InitialTypeState {
    sidebardrawer:boolean
}

const initialState:InitialTypeState = {
    sidebardrawer:false
}
const sidebarInventoryUnitsDrawerSlice = createSlice({
    name:"sidebarinventoryunitsdrawer",
    initialState,
    reducers:{
        sidebarinventoryunitsdrawertrigger:(state)=>{
            state.sidebardrawer ? state.sidebardrawer = false : state.sidebardrawer = true
        },

    },
})

export const {sidebarinventoryunitsdrawertrigger} = sidebarInventoryUnitsDrawerSlice.actions;
export default sidebarInventoryUnitsDrawerSlice.reducer;
