import React, { useEffect, useState, useRef } from 'react';
import logo from '/assets/logo.svg';

const Header = () => {

    const headerRef = useRef()
    const [Links,setLinks] = useState(["Features" ,"Team" ,"Signin"])
    useEffect(() => {
        window.addEventListener('scroll', () => {
            if (window.scrollY > 100) {
                headerRef.current.style.background = "#0c1524";
                headerRef.current.style.padding = "20px 0";
            } else {
                headerRef.current.style.background = "transparent";
                headerRef.current.style.padding = "60px 0";
            }
        });

    }, [])

    return (
    <header className='pt-[60px] fixed top-0 left-0 w-full z-50 transition-all duration-200' ref={headerRef}>
        <div className='container mx-auto flex items-center justify-between flex-col gap-4 sm:flex-col md:flex-row'>
        <img src={logo} alt="Logo" />
        <nav>
            <ul className='flex items-center justify-center gap-9 '>
            {Links.map((l) => {
                return (
                    <li key={l} >
                        <a href={`/${l.toLowerCase()}`} className='text-white opacity-90 hover:opacity-100 hover:underline transition-opacity duration-500'>{l}</a>
                    </li>
                );
            })}
            </ul>
        </nav>
        </div>
    </header>
    );
}

export default Header;
