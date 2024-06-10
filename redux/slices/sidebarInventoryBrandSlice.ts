import { createSlice } from "@reduxjs/toolkit";


interface InitialTypeState {
    sidebarnav:boolean
}

const initialState:InitialTypeState = {
    sidebarnav:false
}
const sidebarInventoryBrandSlice = createSlice({
    name:"sidebarnavbrand",
    initialState,
    reducers:{
        sidebarnavbrandtrigger:(state)=>{
            state.sidebarnav ? state.sidebarnav = false : state.sidebarnav = true
        },

    },
})

export const {sidebarnavbrandtrigger} = sidebarInventoryBrandSlice.actions;
export default sidebarInventoryBrandSlice.reducer;
