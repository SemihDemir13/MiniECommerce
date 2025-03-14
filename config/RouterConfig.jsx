import React from 'react'
import { Routes ,Route} from 'react-router-dom'
import Home from '../pages/Home'
import ProductDetail from '../components/ProductDetail'
import Basket from '../components/Basket'


function RouterConfig() {
  return (
     <Routes>
        <Route path='/' element={<Home/>} />
        <Route path='/product-details/:id' element={<ProductDetail/>} />
        <Route path='Basket' element={<Basket/>}/>

     </Routes>
  )
}

export default RouterConfig