import React from "react";
import "./footer.css"
const Footer = () => {
  return (
    <footer className="footer">
      <div className="footer__container container">
        <h1 className="footer__title">
          Wei</h1>
          <ul className="footer__list">
            <li>
              <a href="#skills" className="footer__link">
                Skills
              </a>
            </li>
            <li>
              <a href="#projects" className="footer__link">
                Projects
              </a>
            </li>
            <li>
              <a href="#quote" className="footer__link">
                Today's Quote
              </a>
            </li>
            <li>
              <a href="#contact" className="footer__link">
                Contact
              </a>
            </li>
          </ul>
          <div className="footer__social">
            <a
              href="https://github.com/lelew66"
              className="home__soical-icon "
              target="_blank" rel="noreferrer"
            >
              <img
                className="social-icons"
                src="/icons/github.png"
                alt="icon"
              />
            </a>
            <a
              href="https://github.com/lelew66"
              className="home__social-icon"
              target="_blank" rel="noreferrer"
            >
              <img
                className="social-icons"
                src="/icons/linkedin.png"
                alt="icon"
              />
            </a>

            <a
              href="https://github.com/lelew66"
              className="home__social-icon"
              target="_blank" rel="noreferrer"
            >
              <img className="social-icons" src="/icons/code.png" alt="icon" />
            </a>
          </div>
        <span className="footer__copy">@all right reserved </span>
      </div>
    </footer>
  );
};

export default Footer;
