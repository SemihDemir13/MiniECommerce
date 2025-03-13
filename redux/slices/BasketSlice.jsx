import { createSlice } from "@reduxjs/toolkit";

const getBasketFromStorage = () => {
    const basket = localStorage.getItem("basket");
    if (!basket) return [];  // Eğer basket null veya undefined ise boş dizi döndür

    try {
        return JSON.parse(basket);
    } catch (error) {
        console.error("Sepet verisi bozuk veya hatalı!", error);
        return []; // Hatalı veri durumunda boş dizi döndür
    }
};

const initialState={
    products:getBasketFromStorage()
}
const writeFromBasketToStorage = (basket) => {
    localStorage.setItem("basket", JSON.stringify(basket));
};


export const BasketSlice=createSlice({
    name:"basket",
    initialState,
    reducers:{
        addToBasket:(state,action)=>{
            const findProduct= state.products && state.products.find((product)=>product.id==action.payload.id);
            if(findProduct){//daha önceden eklenmişse eğer
                const extractedProducts=state.products.filter((product)=>product.id !=action.payload.id);
                findProduct.count +=action.payload.count;
                state.products=[...extractedProducts,findProduct];
                writeFromBasketToStorage(state.products);

            }
            else{
                state.products=[...state.products,action.payload];
                writeFromBasketToStorage(state.products);
            }
        }
       
    }
})
export const { addToBasket } = BasketSlice.actions;
export default BasketSlice.reducer