import React, { useEffect, useState } from 'react'
import { useDispatch, useSelector } from 'react-redux';
import { useParams } from 'react-router-dom'
import { setSelectedProduct } from '../redux/slices/ProductSlice';
import '../css/ProductDetail.css'
import { addToBasket } from '../redux/slices/BasketSlice';

import { CiCircleMinus } from "react-icons/ci";
import { CiCirclePlus } from "react-icons/ci";



function ProductDetail() {
    const {id}=useParams();
    const {products,selectedProduct}=useSelector((store)=>store.product)
    const {price,image,title,description}=selectedProduct;
    const [count,setCount]=useState(0);
    const dispatch=useDispatch();


    const increment=()=>{
        setCount(count+1)    

    }
    const decrement=()=>{
        if(count>0){
            setCount(count-1)    
        }
    }
    const addBasket=()=>{
        const payload={
            id,
            price,
            image,
            title,
            description,
            count,
        }
        dispatch(addToBasket(payload))

    }

    useEffect(()=>{
        getProductById();
    },[])

    const getProductById=()=>{
        products && products.map((product)=>{
            if(product.id==id){
                dispatch(setSelectedProduct(product)); // Redux selectedproductstate'ini güncelle
            }
        })
    }
  return (
  <div>
    <div className='cardDetails'> 
        <div> 
            <img src={image} className='imageProduct'/>
        </div>
        <div>
            <h1 className='textProductTitle'>{title}</h1>
            <h3 className='textProduct'>{description}</h3>
            <h3 className='textProductPrice'>{price}</h3>
            <div style={{display:'flex', alignItems:'center', marginLeft:'100px', flexDirection:'row'}}>
    <CiCirclePlus onClick={increment}  className='icons' style={{marginRight:'5px'}} />
    <span style={{fontSize:'30px', textAlign:'center', display: 'flex', justifyContent: 'center', alignItems: 'center', width: '40px'}}>
        {count}
    </span>
    <CiCircleMinus onClick={decrement} className='icons' style={{ marginLeft:'5px'}} />
        </div>
            <button onClick={addBasket} className='sepet'>
                sepete ekle
            </button>
        </div>
    </div>
 </div>
  )
}

export default ProductDetail