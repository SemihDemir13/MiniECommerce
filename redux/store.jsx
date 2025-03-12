import { configureStore } from "@reduxjs/toolkit";
import  AppSlice  from "./slices/AppSlice";
import  ProductSlice  from "./slices/ProductSlice";


export const store=configureStore({
    reducer:{
        app:AppSlice,
        product:ProductSlice
    },
})