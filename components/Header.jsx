import React, { useState } from 'react'
import '../css/Header.css'
import { FaBasketShopping, FaMoon } from "react-icons/fa6";
import { CiLight } from 'react-icons/ci';


function Header() {
    const [theme,setTheme]=useState(false);

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

  return (
    <div style={{display:'flex',flexDirection:'row',alignItems:'center',justifyContent:'space-between'}}>
      <div >
        <img className='logo' src="./images/logo.png"/>
        <p className='logo-text'>Enes A.Ş</p>
      </div>

      <div className='flex-row'>
        <input className='search-input' type="text"  placeholder='bir şeyler ara...'/>
         <div>
          {theme ? <FaMoon className='icons' onClick={changeTheme}/>:<CiLight className='icons' onClick={changeTheme}/>}

         <FaBasketShopping className='icons' />

         </div>

      </div>
    </div>
  )
}

export default Header