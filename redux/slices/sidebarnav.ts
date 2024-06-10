import { createSlice } from "@reduxjs/toolkit";


interface InitialTypeState {
    sidebarnav:boolean
}

const initialState:InitialTypeState = {
    sidebarnav:false
}
const sidebarnavSlice = createSlice({
    name:"sidebarnav",
    initialState,
    reducers:{
        sidebarnavtrigger:(state)=>{
            state.sidebarnav ? state.sidebarnav = false : state.sidebarnav = true
        },

    },
})

export const {sidebarnavtrigger} = sidebarnavSlice.actions;
export default sidebarnavSlice.reducer;
