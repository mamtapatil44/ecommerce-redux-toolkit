import { createSlice } from "@reduxjs/toolkit";


const productSlice =  createSlice({
    name:"product",
    initialState:{
        allProducts:[]
},
    reducers:{
        addProduct: (state,action)=>{
            state.push(action.payload);
        },
        allProduct:(state,action)=>{
      state.allProducts =action.payload
        }
    }
})

export const  {addProduct,allProduct} = productSlice.actions;
export default productSlice.reducer;
