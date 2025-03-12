import React from 'react'
import '../css/Product.css'

function Product({product}) {
    const {id,price,image,title,description}=product;
    console.log(image)
  return (
    <div >
       <div className='card' >
          <img className='image' src={image}/>
          <div>
            <p style={{textAlign:'center',height:'50px'}}>{title}</p>
            <p style={{textAlign:'center'}}>{price}</p>
          </div>
          <div style={{textAlign:'center'}}>
            <button className='button-detail'> Detaylara Git</button>
          </div>
       </div>
    </div>
  )
}

export default Product