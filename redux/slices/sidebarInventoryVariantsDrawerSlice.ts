import { createSlice } from "@reduxjs/toolkit";


interface InitialTypeState {
    sidebardrawer:boolean
}

const initialState:InitialTypeState = {
    sidebardrawer:false
}
const sidebarInventoryVariantsDrawerSlice = createSlice({
    name:"sidebarinventoryvariantsdrawer",
    initialState,
    reducers:{
        sidebarinventoryvariantsdrawertrigger:(state)=>{
            state.sidebardrawer ? state.sidebardrawer = false : state.sidebardrawer = true
        },

    },
})

export const {sidebarinventoryvariantsdrawertrigger} = sidebarInventoryVariantsDrawerSlice.actions;
export default sidebarInventoryVariantsDrawerSlice.reducer;
