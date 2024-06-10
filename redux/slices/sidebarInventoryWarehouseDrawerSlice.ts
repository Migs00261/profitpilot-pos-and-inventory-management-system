import { createSlice } from "@reduxjs/toolkit";


interface InitialTypeState {
    sidebardrawer:boolean
}

const initialState:InitialTypeState = {
    sidebardrawer:false
}
const sidebarInventoryWarehouseDrawerSlice = createSlice({
    name:"sidebarinventorywarehousedrawer",
    initialState,
    reducers:{
        sidebarinventorywarehousedrawertrigger:(state)=>{
            state.sidebardrawer ? state.sidebardrawer = false : state.sidebardrawer = true
        },

    },
})

export const {sidebarinventorywarehousedrawertrigger} = sidebarInventoryWarehouseDrawerSlice.actions;
export default sidebarInventoryWarehouseDrawerSlice.reducer;
