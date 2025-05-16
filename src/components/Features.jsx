import React, { useState } from 'react';
import FeatureBox from './FeatureBox';

const Features = () => {

    const [Features , setFeatures] = useState([
        {
        icon : "icon-access-anywhere.svg",
        title : "Access your files, anywhere",
        desc : "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
        {
        icon : "icon-collaboration.svg",
        title : "Collaborate in real-time",
        desc : "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
        {
        icon : "icon-any-file.svg",
        title : "Store any type of file",
        desc : "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    },
        {
        icon : "icon-security.svg",
        title : "Security you can trust",
        desc : "lorem ipsum dolor sit amet, consectetur adipiscing elit. Sed do eiusmod tempor incididunt ut labore et dolore magna aliqua. ",
    }
])

    return (
       <>
       <div className='py-[100px]'>
        <div className='grid grid-cols-1 md:grid-cols-2 gap-[120px] w-[1100px] mx-auto max-w-full text-center'>
            {Features.map((item)=>{
                return (
                    <FeatureBox key={item.title} icon={item.icon} title={item.title} desc={item.desc} />
                )
            })}
        </div>
       </div>
       </>
    );
}

export default Features;
