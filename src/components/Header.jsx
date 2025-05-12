import React from 'react'
import 'remixicon/fonts/remixicon.css';


const Header = () => {
  return (
    <div>
        <header>
            <nav>
                <div>
                    <ul>
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

                    <div>
                        <img src='/images/leaf-1.png' className='w-32' alt='leaf_image'/>
                    </div>

                    <div>
                        <img src='/images/leaf-2.png' className='w-32' alt='leaf_image'/>
                    </div>

                    <div>
                    <i className="ri-menu-4-line"></i>
                    </div>
                   

                </div>
            </nav>
        </header>
    </div>
  )
}

export default Header