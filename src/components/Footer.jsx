import React, { useState } from 'react';
import { FaFacebookF, FaTwitter, FaInstagram } from 'react-icons/fa';

const Footer = () => {
    const [links, setLinks] = useState(["Home", "About US", "Services", "Contact US", "Jobs", "Terms", "Privacy"]);
    const [socials, setSocials] = useState(["Facebook", "Twitter", "Instagram"]);
    
    return (
        <section className='bg-[#0c1524] text-white mt-[-200px] relative z-10'>
            <div className='container mx-auto px-6 flex flex-col pt-[230px] pb-12'>
                <a href="/" className="mb-8">
                    <img src="assets/logo.svg" alt="logo" className='w-[150px] md:w-[175px] h-auto object-contain' />
                </a>
                
                <div className='w-full'>
                    {/* Main footer grid - responsive columns */}
                    <div className='grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-10 lg:gap-[100px] mt-8'>
                        
                        {/* Location section */}
                        <div className='flex gap-4 md:gap-8 items-start'>
                            <img className='w-[19px] h-[18px] mt-1 flex-shrink-0 object-contain' 
                                 src="assets/icon-location.svg" alt="location" />
                            <p className='font-normal tracking-[0.8px] text-sm'>
                                Lorem ipsum dolor sit amet consectetur, adipisicing elit. Commodi sunt sint velit 
                                voluptatem aut nisi amet corrupti.
                            </p>
                        </div>
                        
                        {/* Contact info section */}
                        <div className='space-y-4'>
                            <div className='flex gap-4 items-center'>
                                <img className='w-[19px] h-[18px] flex-shrink-0 object-contain' 
                                     src="assets/icon-phone.svg" alt="phone" />
                                <p className='font-normal tracking-[0.8px] text-sm'>+1-543-123-4567</p>
                            </div>
                            <div className='flex gap-4 items-center'>
                                <img className='w-[19px] h-[18px] flex-shrink-0 object-contain' 
                                     src="assets/icon-email.svg" alt="email" />
                                <p className='font-normal tracking-[0.8px] text-sm'>example@example.com</p>
                            </div>
                        </div>
                        
                        {/* Links section */}
                        <div>
                            <ul className='grid grid-cols-1 sm:grid-cols-2 gap-4'>
                                {links.map((link, index) => (
                                    <li key={index}>
                                        <a href={`#${link.toLowerCase()}`} 
                                           className='font-normal tracking-[0.8px] hover:text-primary transition duration-200 text-base'>
                                            {link}
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                        
                        {/* Social media section */}
                        <div className='flex justify-center sm:justify-start lg:justify-center'>
                            <ul className='flex gap-4'>
                                {socials.map((social, index) => (
                                    <li key={index} className='group'>
                                        <a href="#" aria-label={social}>
                                            <div className='w-[40px] h-[40px] flex items-center justify-center rounded-full 
                                                border border-white '>
                                                {social === "Facebook" ? 
                                                    <FaFacebookF className='hover:text-primary transition-all duration-200'/> : 
                                                 social === "Twitter" ? 
                                                    <FaTwitter className='hover:text-primary transition-all duration-200'/> : 
                                                    <FaInstagram className='hover:text-primary transition-all duration-200'/>}
                                            </div>
                                        </a>
                                    </li>
                                ))}
                            </ul>
                        </div>
                    </div>
                </div>
            </div>
        </section>
    );
}

export default Footer;
