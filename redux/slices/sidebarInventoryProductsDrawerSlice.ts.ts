import { createSlice } from "@reduxjs/toolkit";


interface InitialTypeState {
    sidebardrawer:boolean
}

const initialState:InitialTypeState = {
    sidebardrawer:false
}
const sidebarInventoryProductsDrawerSlice = createSlice({
    name:"sidebarinventoryproductsdrawer",
    initialState,
    reducers:{
        sidebarinventoryproductsdrawertrigger:(state)=>{
            state.sidebardrawer ? state.sidebardrawer = false : state.sidebardrawer = true
        },

    },
})

export const {sidebarinventoryproductsdrawertrigger} = sidebarInventoryProductsDrawerSlice.actions;
export default sidebarInventoryProductsDrawerSlice.reducer;
