import React, { useState } from 'react'
import './Navbar.css'
import Logo from '../../Context/Assets/cloth-fix-logo.png'
import Cart from '../../Context/Assets/shopping-cart.png'

const Navbar = () => {

  const [menu, setMenu]=useState("Shop");

  return (
    <div className='navbar'>
        <div className="nav-logo">
            <img src={Logo} alt="" />
            <p>CLOTH FIX</p>
        </div>
        <ul className="nav-menu">
            <li onClick={()=>{setMenu("Shop")}}>Shop {menu==="Shop"?<hr/>:<></>} </li>
            <li onClick={()=>{setMenu("Men")}}>Men {menu==="Men"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Women")}}>Women {menu==="Women"?<hr/>:<></>}</li>
            <li onClick={()=>{setMenu("Kids")}}>Kids {menu==="Kids"?<hr/>:<></>}</li>
        </ul>
        <div className="nav-cart">
            <button>Login</button>
            <img src={Cart} alt="" />
            <div className="nav-cart-count">0</div>
        </div>
    </div>
  )
}

export default Navbar
