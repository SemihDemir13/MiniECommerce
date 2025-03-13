import React from 'react'
import '../css/Product.css'
import { useNavigate } from 'react-router-dom';

function Product({product}) {
    const {id,price,image,title,description}=product;
    const navigate=useNavigate(); 
    return (
    <div >
       <div className='card' >
          <img style={{borderRadius:'5px'}} className='image' src={image}/>
          <div>
            <p style={{textAlign:'center',height:'50px'}}>{title}</p>
            <p style={{textAlign:'center'}}>{price}</p>
          </div>
          <div className='flex-row' style={{textAlign:'center'}}>
            <button onClick={()=> navigate("/product-details/" + id)} className='button-detail'> Detaylara Git</button>
          </div>
       </div>
    </div>
  )
}

export default Product