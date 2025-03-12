import { createSlice ,createAsyncThunk} from "@reduxjs/toolkit";
import axios from "axios";


const initialState={
    products:[],
    selectedProduct:{},
    loading:false

}
const  BASE_URL="https://fakestoreapi.com";

export const getAllProducts=createAsyncThunk("getAllUsers",async()=>{ //burada adresten tüm ürünleri çekip döndük
    try {
        const response = await axios.get(`${BASE_URL}/products`);
        console.log("API'den gelen veri:", response.data); // Konsolda veriyi görmeliyiz

        return response.data;
    } catch (error) {
        console.error("Ürünleri çekerken hata oluştu:", error.response?.status, error.response?.data);
        throw error; // Hata Redux tarafından yakalanır
    }
})
export const ProductSlice=createSlice({
    name: "product",
    initialState,
    reducers:{

    },
    extraReducers:(builder)=>{
        builder.addCase(getAllProducts.pending,(state,action)=>{ //istek bekleme süresindeyken ekran loadingi true yaptık
            state.loading=true;

        })
        builder.addCase(getAllProducts.fulfilled,(state,action)=>{ 
            state.loading=false;//ürün başarılı şekilde dönünce loadingi kapat
            state.products=action.payload //istekten gelen değerleri product dizimize ata

    })

    }
})
export const {}=ProductSlice.actions
export default ProductSlice.reducer