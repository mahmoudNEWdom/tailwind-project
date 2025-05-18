import React, { useState } from 'react';
import ClientBox from './ClientBox';

const Testimonials = () => {

    const [Clients, setClients] = useState([
        {
            name: 'John Doe',
            testimonial: 'Lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam amet veniam dolor doloremque velit voluptatum culpa eligendi odio officiis suscipit impedit sunt iure consequatur eveniet quod aliquam, ea saepe.',
            image : "profile-1.jpg",
            position : 'CEO, Company A',
        },
        {
            name: 'Jane Smith',
            testimonial: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam amet veniam dolor doloremque velit voluptatum culpa eligendi odio officiis suscipit impedit sunt iure consequatur eveniet quod aliquam, ea saepe.',
            image : "profile-2.jpg",
            position : 'CTO, Company B',
        },
        {
            name: 'Alice Johnson',
            testimonial: 'lorem ipsum dolor sit amet consectetur adipisicing elit. Recusandae quam amet veniam dolor doloremque velit voluptatum culpa eligendi odio officiis suscipit impedit sunt iure consequatur eveniet quod aliquam, ea saepe.',
            image : "profile-3.jpg",
            position : 'COO, Company C',
        }
    ]);
    return (
        <>
            <section className='pb[350px]'>
                <div className='container mx-auto '>
                    <div className='relative left-[-10px] top-[15px]'>
                        <img src="public/assets/bg-quotes.png" alt="quote" />
                    </div>
                <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-[50px]'>
                    {Clients.map((client, index) => (
                <ClientBox key={index} client={client.name} testimonial={client.testimonial} image={client.image} position={client.position} />
            ))}
                </div>
                </div>
            </section>
        </>
    );
}

export default Testimonials;
