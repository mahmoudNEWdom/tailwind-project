import React from 'react';

const FeatureBox = ({...props}) => {
    const {icon, title, desc} = props;
    return (
        <div className='text-white'>
            <div className='elementCenter flex-col'>
                <img src={`./assets/${icon}`} alt="icon-img" className='w-[120px] h-[120px] object-contain' />
            <h1 className='text-xl  font-semibold my-6'>
                {title}
            </h1>
            <p className='text-1sm font-normal '>
                {desc}
            </p>
            </div>
        </div>
    );
}

export default FeatureBox;
