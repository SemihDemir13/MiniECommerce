import React, { useState } from 'react'
import '../css/Header.css'
import { FaBasketShopping, FaMoon } from "react-icons/fa6";
import { CiLight } from 'react-icons/ci';
import { useNavigate } from 'react-router-dom';
import Badge from '@mui/material/Badge';
import { useSelector } from 'react-redux';



function Header() {
    const [theme,setTheme]=useState(false);
    const navigate=useNavigate()
    const {products:sepettekirürünler}=useSelector((store)=>store.basket);

    const changeTheme=()=>{
      const root=document.getElementById("root");
      if(theme){
        root.style.backgroundColor = "black";
        root.style.color="#fff";

      }else{
        root.style.backgroundColor="#fff";
        root.style.color="black";
      }
      setTheme(!theme);

    }

   const goToBasket=()=>{
    navigate('/Basket')
   }
    

  return (
  <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <div >
        <img  className='logo' onClick={()=>navigate("/")} src="./images/logo.png"/>
        <p className='logo-text'>Semih A.Ş</p>
      </div>

      <div className='flex-row'>
        <input className='search-input' type="text"  placeholder='bir şeyler ara...'/>
         <div>
          {theme ? <FaMoon className='icons' onClick={changeTheme}/>:<CiLight className='icons' onClick={changeTheme}/>}
          <Badge badgeContent={sepettekirürünler.length} color="primary">
             <FaBasketShopping onClick={goToBasket} className='icons' />
          </Badge>
         </div>
      </div>
  </div>
  )
}

export default Header