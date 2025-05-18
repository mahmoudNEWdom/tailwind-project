import React from 'react';

const StayProductive = () => {
    return (
        <section className='pb-[150px]'>
            <div className='container elementCenter mx-auto'>
                <div className='grid grid-cols-1 md:grid-cols-2 gap-[120px]  place-items-center'>
                    <div>
                    <img src="src/assets/illustration-stay-productive.png" alt="Stay Productive" />
                </div>
                <div className='text-white flex flex-col items-center md:items-start'>
                    <div className=' text-center md:text-start'>
                        <h3 className='text-[40px] font-semibold'>Stay productive,</h3>
                        <h3 className='text-[40px] font-semibold '>wherever you are</h3>
                    </div>
                <div className='tracking-[0.8px] leading-[30px] text-center md:text-start'>
                        <p className=' text-[20px] w-full  mx-auto mb-5 '>Never let location be an issue when accessing your files. Fylo has you covered for all of your file storage needs.</p>
                        <p className=' text-[20px] w-full  mx-auto'>Securely share files and folders with friends, family and colleagues for live collaboration. No email attachments required.</p>
                </div>
                    <a className='flex items-center w-fit  gap-[15px] text-primary hover:text-[#42b0d1] transition-colors duration-200 border-b-2 border-primary mt-5 pb-2 ' href="/"> see how Fylo works <img className=' animate-moveRight w-[20px] object-contain' src="src/assets/icon-arrow.svg" alt="arrow" /></a>

                </div>
                </div>

            </div>
        </section>
    );
}

export default StayProductive;
