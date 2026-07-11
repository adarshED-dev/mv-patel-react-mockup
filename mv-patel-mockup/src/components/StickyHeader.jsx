import logo from '../assets/logo.png'
import React, { useEffect } from 'react'
import { useState } from 'react'

function StickyHeader(){
    const [isScrolled, setIsScrolled] = useState(false);
    // useEffect(()=>{

    // }, [])
    return (
        <header className="header-wrapper fixed top-[0] z-[9] w-full p-[1rem]">
            <div className="inner-wrapper flex w-full justify-between items-center">
                <div className="menu-items flex w-[32%]">
                    <ul className="menu--lists flex justify-left gap-[20px]">
                        <li className="li-menu uppercase px-[10px] text-[#fff]">
                            <a href="/">Home</a>
                        </li>
                            <li className="li-menu uppercase px-[10px] text-[#fff]">
                                <a href="/brands">Brands</a>
                            </li>
                                <li className="li-menu uppercase px-[10px] text-[#fff]">
                                    <a href="/outlets">Outlets</a>
                                </li>
                            <li className="li-menu uppercase px-[10px] text-[#fff]">
                                <a href="/about">About</a>
                            </li>
                        <li className="li-menu uppercase px-[10px] text-[#fff]">
                            <a href="/contact">Contact</a>
                        </li>
                    </ul>
                </div>
                <div className="header-logo w-[32%] flex justify-center">
                    <div className="image-wrapper">
                        <img src={logo} alt="mv-patel-logo" width="200px" height="auto" />
                    </div>
                </div>
                <div className="header-search w-[32%]">
                    <div className="search-input">
                        <input type="text" className="search" placeholder="Search" />
                    </div>
                </div>
            </div>
        </header>
    )
}
export default StickyHeader