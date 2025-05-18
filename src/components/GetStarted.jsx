import React, { useState } from 'react';

const GetStarted = () => {
    const [email, setEmail] = useState('');
    const [isValid, setIsValid] = useState(true);

    const validateEmail = (email) => {
        const regex = /^[^\s@]+@[^\s@]+\.[^\s@]+$/;
        return regex.test(email);
    };

    const handleSubmit = (e) => {
        e.preventDefault();
        const valid = validateEmail(email);
        setIsValid(valid);
        
        if (valid) {
            // Process form submission
            console.log('Valid email submitted:', email);
        }
    };

    const handleEmailChange = (e) => {
        setEmail(e.target.value);
        setIsValid(true); // Reset validation when typing
    };

    return (
        <div className='container mx-auto relative flex justify-center items-center min-h-[500px] pt-[100px] z-50'>
            <div className='flex absolute flex-col text-white bg-[#1c2230] text-center px-6 py-8 rounded-lg shadow-lg w-full max-w-[865px]'>
                <h3 className='text-white text-[25px] md:text-[36px] font-bold mb-4'>
                    Get Started with Our Service
                </h3>
                <p className='mb-6 max-w-[600px] mx-auto'>
                    Sign up today and start your journey with us. 
                    Experience the best features and services we have to offer.
                </p>
                <form onSubmit={handleSubmit} className='flex flex-col sm:flex-row gap-4 max-w-[600px] mx-auto w-full'>
                    <div className="flex-1 flex flex-col">
                        <input 
                            type='email'
                            placeholder='Enter your email'  
                            className='w-full px-4 py-3 outline-none text-black font-medium rounded-3xl'
                            value={email}
                            onChange={handleEmailChange}
                        />
                    </div>
                    <button 
                        type='submit'
                        className='bg-gradient-to-r from-cyan-500 to-blue-500 px-6 py-3 rounded-3xl font-bold hover:opacity-90 transition-opacity'
                    >
                        Get Started
                    </button>
                </form>
                {!isValid && (
                    <p className='text-red-500 mt-2'>
                        Please enter a valid email address.
                    </p>
                )}
            </div>
        </div>
    );
}

export default GetStarted;
