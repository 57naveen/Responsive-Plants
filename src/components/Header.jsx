import React, { useEffect } from 'react'
import 'remixicon/fonts/remixicon.css';


const Header = () => {

    useEffect(() => {
        const navMenu = document.getElementById("nav-menu");
        const hamburger = document.getElementById("hamburger");
        const navLink = document.querySelectorAll(".nav-link")
    
        const handleClick = () => {
          navMenu.classList.toggle("left-[0]");
          hamburger.classList.toggle('ri-close-large-line');
        };
    
        if (hamburger) {
          hamburger.addEventListener("click", handleClick);
        }

        navLink.forEach(link =>{
            link.addEventListener("click",()=>{
                navMenu.classList.toggle("left-[0]");
                hamburger.classList.toggle('ri-close-large-line');
            })
        })

    
        // Cleanup on component unmount
        return () => {
          if (hamburger) {
            hamburger.removeEventListener("click", handleClick);
          }
        };
      }, []);


  return (
    <>
        <header id='navbar' className='bg-green-950 fixed w-full top-0 left-0 z-50 '>
            <nav className='container flex items-center justify-between h-16 sm:h-20 '>
                <div className='sm:text-2xl ml-10 font-Lobster'>IndorePlants</div>


                <div id='nav-menu' className='absolute top-0 left-[-100%] min-h-[80vh] w-full bg-green-950/80 backdrop-blur-sm flex items-center
                overflow-hidden justify-center duration-300 lg:static lg:min-h-fit lg:bg-transparent lg:w-auto mr-10'>
                    <ul className='flex flex-col items-center gap-8 lg:flex-row'>
                        <li>
                            <a href='/' className='nav-link'>Home</a>
                        </li>
                        <li>
                            <a href='/about' className='nav-link'>About</a>
                        </li>
                        <li>
                            <a href='/popular' className='nav-link'>Popular</a>
                        </li>
                        <li>
                            <a href='/Review' className='nav-link'>Review</a>
                        </li>
                    </ul>

                    <div className='absolute -bottom-0 -right-10 opacity-90 lg:hidden'>
                        <img src='/images/leaf-1.png' className='w-32' alt='leaf_image'/>
                    </div>

                    <div className='absolute -top-0 -left-10 rotate-90 opacity-90 lg:hidden'>
                        <img src='/images/leaf-2.png' className='w-32' alt='leaf_image'/>
                    </div>     

                </div>
                <div className='text-xl sm:text-3xl cursor-pointer z-50 lg:hidden mr-10'>
                    <i id='hamburger' className="ri-menu-4-line"></i>
                    </div>
            </nav>
        </header>
        </>
  )
}

export default Header