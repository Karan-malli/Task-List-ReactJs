import React, { useState,useEffect } from 'react'
import logo from '../assets/logo.svg'

export const Header = () => {
    const[theme, settheme]=useState("dark");
useEffect(() => {
  document.documentElement.removeAttribute("class");
  document.documentElement.classList.add(theme);
}, [theme]);


  return (
    <header>
        <span className='logo'>
            <img src={logo} alt=""/>
            <span>Your Tasks</span>
        </span>
       
    </header>
  )
}
