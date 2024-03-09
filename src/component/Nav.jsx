import React, { useState, useEffect,useRef } from 'react'
import { Link } from 'react-router-dom'
import "../CSSF/SideNav.css"
import hamburger from "../assets/assets/shared/icon-hamburger.svg"
import logo from "../assets/assets/shared/logo.svg"
import close from "../assets/assets/shared/icon-close.svg"

const SideNav = () => {
    const [menu, setMenu] =useState(false)

    let menuRef = useRef();

    useEffect(() => {
        document.addEventListener("mousedown", (event) =>{
            if(!menuRef.current.contains(event.target)){
                setMenu(false)
            }
        })})

     
     
  return (
    <div className="sidebar" ref={menuRef}>
        <div className="left-logo">
            <img src={logo} alt="" />

        </div>
        <div className='menu'>
            <div className='image-menu' onClick= {()=>{
                setMenu(!menu)
            }}>
            {menu ? <img src={close} title= "menu" alt="" className='menu'/> :
            <img src={hamburger} title='close' alt="" className='close'  />}
            </div>

            
           { menu ? 
           <div className='side'>
                <ul>
                    <Link to='/' style={{textDecoration: "none"}}>
                        <div className='side-btn'>
                            <li>HOME</li>
                        </div>

                    </Link>
                    
                    <Link to='/destination'style={{textDecoration: "none"}}>
                        <div className='side-btn'>
                            <li><span>01</span>DESTIONATION</li>
                        </div>

                    </Link>
                    
                    <Link to='/crew'style={{textDecoration: "none"}}>
                        <div className='side-btn'>
                            <li><span>02</span>CREW</li>
                        </div>

                    </Link>
                    <Link to='/technology'style={{textDecoration: "none"}}>
                        <div className='side-btn'>
                            <li><span>03</span>TECHNOLOGY</li>
                        </div>

                    </Link>
                    
                    

                </ul>

            </div>
            : null}
        </div>
    </div>
    
    
  )
}

export default SideNav
