import { createSlice } from "@reduxjs/toolkit";

const cartslice =createSlice({
    name:'cart',
    initialState:{
        items:[],
    },
    reducers:{
        addItem:(state,action)=>{
            // mutuating the state
              state.items.push(action.payload)
        },
        removeitem:(state,action)=>{
                state.items.pop();
        },
        clearcart:(state,action)=>{
            state.items.length=0;
        },
    }
})

export const {addItem,removeitem,clearcart} =cartslice.actions;
export default cartslice.reducer;
