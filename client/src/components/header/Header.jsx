import React, {useState} from 'react'
import './header.css'

const Header = () => {
    
    window.addEventListener("scroll", function () {
        const header = this.document.querySelector(".header");
        // console.log("Scroll position:", this.scrollY);
        if (this.scrollY >= 80) {
            // console.log("Adding show-scroll class");
            header.classList.add("scroll-header");
        } else {
            // console.log("Removing show-scroll class");
            header.classList.remove("scroll-header");
        }
    });

    const[Toggle, showMenu]= useState (false);
    const[activeNav,setActiveNav]=useState ("#home");
  return (
   <header className="header">
    <nav className="nav container">
        <div>
            <img src="/nav_logo.png" alt="logo" className="nav__logo"/>
        </div>
        <div className={Toggle ? "nav__menu show-menu": "nav__menu"}>
            <ul className="nav__list grid">
                <li className="nav__item">
                    <a href="#home" onClick={()=>setActiveNav("#home")} className={activeNav==="#home"?"nav_link active-link":"nav_link"}>
                    <img src="/icons/home.png" alt="nav icons" className="nav__icon" />
                    Profile</a>
                </li>
                <li className="nav__item">
                    <a href="#skills" onClick={()=>setActiveNav("#skills")} className={activeNav==="#skills"?"nav_link active-link":"nav_link"}>
                    <img src="/icons/thinking.png" alt="nav icons" className="nav__icon" />
                    Skills</a>
                </li>
                <li className="nav__item">
                    <a href="#projects" onClick={()=>setActiveNav("#projects")} className={activeNav==="#projects"?"nav_link active-link":"nav_link"}>
                    <img src="/icons/briefcase.png" alt="nav icons" className="nav__icon" />
                    Projects</a>
                </li> 
                <li className="nav__item">
                    <a href="#contact"  onClick={()=>setActiveNav("#contact")} className={activeNav==="#contact"?"nav_link active-link":"nav_link"}>
                    <img src="/icons/envelope.png" alt="nav icons" className="nav__icon" />
                    Contact</a>
                </li>
                <li className="nav__item">
                    <a href="/api"   >
                    <img src="/icons/envelope.png" alt="nav icons" className="nav__icon" />
                    API</a>
                </li>
            </ul>
            <img src="/icons/cross.png" alt="nav icons" className="nav__close" onClick={()=>showMenu
        (!Toggle)}/>
            {/* <link rel="icon" type="image/svg_xml" href="/icons/cross.svg"  className="nav__close nav__icon" />           */}

        </div>
        
        <div className="nav__toggle" onClick={()=>showMenu
        (!Toggle)}>
            <img src="/icons/apps.png" alt="nav icons"/>
        </div>
    </nav>
   </header>
  )
}

export default Header