import React, { useEffect } from 'react';

const ScrollUp = () => {
  useEffect(() => {
    const scrollUpBtn = document.getElementById('scroll-up');

    const handleScroll = () => {
      if (window.scrollY >= 250) {
        scrollUpBtn.classList.remove('-bottom-1/2');
        scrollUpBtn.classList.add('bottom-4');
      } else {
        scrollUpBtn.classList.add('-bottom-1/2');
        scrollUpBtn.classList.remove('bottom-4');
      }
    };

    window.addEventListener('scroll', handleScroll);

    // Cleanup on unmount
    return () => {
      window.removeEventListener('scroll', handleScroll);
    };
  }, []);

  return (
    <div>
      <a
        href="#"
        className="fixed right-4 -bottom-1/2 bg-yellow-500 shadow-sm inline-block px-3 py-1 md:px-4 md:py-2 rounded-md text-lg z-50 hover:-translate-y-1 duration-300"
        id="scroll-up"
      >
        <i className="ri-arrow-up-line"></i>
      </a>
    </div>
  );
};

export default ScrollUp;
