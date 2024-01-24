import React from 'react';
import './scrollup.css';

const Scrollup = () => {

    window.addEventListener("scroll", function () {
        const scrollUp = this.document.querySelector(".scrollup");
        // console.log("Scroll position:", this.scrollY);
        if (this.scrollY >= 560) {
            // console.log("Adding show-scroll class");
            scrollUp.classList.add("show-scroll");
        } else {
            // console.log("Removing show-scroll class");
            scrollUp.classList.remove("show-scroll");
        }
    });
    
  return (
    <a href="#" className='scrollup'> 
    <i className="uil uil-arrow-up scrollup__icon">
    </i></a>
  )
}

export default Scrollup