
const Landing1 = () => {
    return (
        <>
        <section className="bg-[#1c2230] ">
            <div className='container mx-auto'>
                <div className='elementCenter flex-col pt-[150px]'>
                    <div className='w-full max-w-[750px]'>
                        <img className='mx-auto w-full h-fit ' src="assets/illustration-stay-productive.png" alt="illustration" />
                    </div>
                    <div className='text-white mx-auto text-center w-full max-w-[750px]'>
                        <br />
                    <h1 className='font-semibold text-[30px] md:text-[40px] mb-2 mt-2'>All your files in one secure location, accessible anywhere</h1>
                    <p className='text-[20px] w-full max-w-[600px] mx-auto'>Fylo stores your most important files in a secure location. Access them wherever you need, share and collaborate with friends, family, and co-workers.</p>
                    <div className='mt-10'>
                    </div>
                </div>
                        <a href="#" className='btnn w-[250px] h-[60px] rounded-[30px] text-white elementCenter font-medium'>Get Started</a>
                </div>
            </div>
            <div className='w-full '>
                <img className='w-full h-[200px] ' src="assets/bg-curvy-desktop.svg" alt="curvy background" />
            </div>
        </section>
        </>
    );
}

export default Landing1;
