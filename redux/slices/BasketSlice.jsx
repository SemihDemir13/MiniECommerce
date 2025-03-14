import { createSlice } from "@reduxjs/toolkit";
import { toast } from "react-toastify";


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
                toast.warning("Bu ürün zaten sepetinizde!");
                const extractedProducts=state.products.filter((product)=>product.id !=action.payload.id);
                findProduct.count +=action.payload.count;
                state.products=[...extractedProducts,findProduct];
                writeFromBasketToStorage(state.products);

            }
            else{
                state.products=[...state.products,action.payload];
                toast.success("Ürün sepete eklendi!"); // ✅ Başarı mesajı göster

                writeFromBasketToStorage(state.products);
            }
        },
        removeBasket:(state,action)=>{//seçilen ürünü kaldır
            state.products=state.products.filter(product=>product.id !==action.payload);
            toast.info("Ürün sepetten kaldırıldı!"); // 🔥 Kaldırma mesajı

            writeFromBasketToStorage(state.products);
            
        }
       
    }
})
export const { addToBasket,removeBasket } = BasketSlice.actions;
export default BasketSlice.reducer