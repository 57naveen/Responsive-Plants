import React from 'react'

const Home = () => {
  return (
    <section id='home'>
        <div className='container'>
            <div className='flex flex-col items-center gap-5 lg:flex-row'>

                {/*----------------- content----------------------- */}
                <div className='w-full space-y-5 lg:w-1/2'>
                    <h1>
                        <span className='text-yellow-500'>plants</span> make a <br />
                         positive
                        <span className='text-yellow-500'> on <br/>  your environment</span>
                    </h1>

                    <p className='text-slate-300 font-Lobster'>
                    A dummy paragraph is a block of text used to fill a space on a webpage or document during the design phase, allowing designers and content creators to visualize the layout and format of the final content without being distracted by actual text.
                    The most famous example of dummy text is "Lorem Ipsum," which has been in use since the 1500s.
                    </p>

                    <div className='flex flex-col gap-2 sm:flex-row md:gap-4 lg:pt-5 xl:pt-10'>
                        <button className='btn'>
                            <span>Shop Now</span>
                            <i className='ri-leaf-line'></i>
                        </button>

                        <button className='btn  btn_outline'>
                            <span>Know More</span>
                            <i className='ri-leaf-line'></i>
                        </button>
                    </div>

                    <p className='text-xs font-Lobster text-slate-300'>
                        You will get 30-days free trail.
                    </p>

                    <div className='flex items-center gap-5 text-lg lg:pt-10'>
                        <i className='ri-facebook-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer'></i>
                        <i className='ri-twitter-x-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer text-base'></i>
                        <i className='ri-instagram-line text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer'></i>
                        <i className='ri-linkedin-fill text-slate-300 hover:text-yellow-500 duration-300 cursor-pointer'></i>
                    </div>

                </div>

                {/*/-------------------------- images ---------------*/}
                    <div className='w-full relative lg:w-1/2'>
                        <img src='/images/home.png' className='' alt='home_image'/>

                        {/* ---leaf---*/}
                            <div className='absolute top-10 right-10 opacity-30'>
                                <i className='ri-leaf-line text-6xl text-yellow-500 '></i>
                            </div>

                            
                        {/* ----flower---- */}
                        <div className='absolute bottom-0 left-0 opacity-30'>
                                <i className='ri-flower-line text-6xl text-yellow-500'></i>
                            </div>

                            
                        {/* ----plant---- */}
                        <div className='hidden absolute top-10 -left-5 opacity-30 lg:block'>
                                <i className='ri-plant-line text-6xl text-yellow-500'></i>
                            </div>


                    </div>

                    

            </div>
        </div>
    </section>
  )
}

export default Home