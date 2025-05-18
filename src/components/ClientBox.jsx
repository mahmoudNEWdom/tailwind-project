import React from 'react';

const ClientBox = ({...props}) => {
    const {client, testimonial, image, position} = props;
    // Destructure props to get client and testimonial  
    return (
        <section className='text-white  bg-[#21293c] rounded-[5px] p-[30px] shadow-[8px_8px_2px_9px_#1c202c]' >
            <p className='text-sm font-normal tracking-[0.8px] text-justify pb-5'>
                {testimonial}
            </p>
            <div className='flex items-center gap-[20px]'>
                <img src={`./public/assets/${image}`} alt="client" className='w-[100px] h-[100px] rounded-full' />
            <div>
                <strong className='block mb-3'>{client}</strong>
                <p className='text-sm font-normal'>{position}</p>
            </div>
            </div>
        </section>
    );
}

export default ClientBox;
