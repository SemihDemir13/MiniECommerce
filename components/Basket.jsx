import React from 'react';
import { useSelector, useDispatch } from 'react-redux';
import { removeBasket } from '../redux/slices/BasketSlice';  //

import '../css/Basket.css'


function Basket() {
    const {products}=useSelector((store)=>store.basket);
    const dispatch=useDispatch();


  return (
    <div>
         <div>
      <h2>Sepetim</h2>
      {products.length === 0 ? (
        <p>Sepetiniz boş.</p>
      ) : (
        <div className='basket'>
          {products.map((product) => (
            <div   key={product.id} style={{ border: "1px solid #ddd", padding: "10px", margin: "10px 0"}}>
              <img className='basketImage' src={product.image} alt={product.title} width="50" />
              
              <p > {product.title} ({product.count} adet)</p>
              <p>Fiyat: ${product.price}</p>
              <button className='removeButton' onClick={() => dispatch(removeBasket(product.id))}>
              Kaldır
              </button>
            </div>
          ))}
        </div>
      )}
    </div>
  
    </div>
  )
}

export default Basket