import React from "react";
import "./contact.css";
import { useRef } from 'react';
import {motion} from "framer-motion";
import emailjs from 'emailjs-com';

const Contact = () => {
    const form = useRef();

    const sendEmail = (e) => {
      e.preventDefault();
  
      emailjs.sendForm('service_1upte85', 'template_65cfa6b', form.current, 'PDiIzA6SVMcbUCV1j')
        .then((result) => {
            console.log(result.text);
        }, (error) => {
            console.log(error.text);
        });
    };
  return (
    <section className="contact_section" id="contact">
      <h2 className="section__titile">Get in touch</h2>
      <span className="section_subtitle">Contact me</span>

      <div className=" contact_container container grid">
        <div className="contact__content">
          <motion.h3 className='contact_title'
          initial={{ opacity: 0, scale: 0.5,translateX:-100 }}
          animate={{ opacity: 1, scale: 1 ,translateX:0 }}
          transition={{ duration: 0.5 ,delay:0.1}}>Talk to me</motion.h3>
          <div className='"contact__info'>

            <motion.div className="contact_card"
             initial={{ opacity: 0, scale: 0.5 ,translateX:-100}}
            animate={{ opacity: 1, scale: 1 ,translateX:0}}
            transition={{ duration: 0.5 ,delay:0.2}}>
              <i className="bx bx-mail-send contact__card-icon" />
              <h3 className='contact__card-title'>Email</h3>
              <span className="contact__card-data">lelew667@gmail.com</span>
              <a href="mailto:lelew667@gmail.com" className="contact__button">
                Write to me{""}
                <i className="bx bx-right-arrow-alt contact_button-icon" />
              </a>
            </motion.div>
            <motion.div className="contact_card"
             initial={{ opacity: 0, scale: 0.5 ,translateX:-100}}
            animate={{ opacity: 1, scale: 1 ,translateX:0}}
            transition={{ duration: 0.5 ,delay:0.3}}>
              <i className="bx bxl-whatsapp contact__card-icon" />
              <h3 className='contact__card-title'>Whatsapp</h3>
              <span className="contact__card-data">514-691-2599</span>
              <a href="" className="contact__button">
                Write to me{""}
                <i className="bx bx-right-arrow-alt contact_button-icon" />
              </a>
              </motion.div>
              <motion.div className="contact_card"
             initial={{ opacity: 0, scale: 0.5 ,translateX:-100}}
            animate={{ opacity: 1, scale: 1 ,translateX:0}}
            transition={{ duration: 0.5, delay:0.4}}>
              <i className="bx bxl-messenger contact__card-icon" />
              <h3 className='contact__card-title'>Messenger</h3>
              <span className="contact__card-data">my.fb123</span>
              <a href="" className="contact__button">
                Write to me{""}
                <i className="bx bx-right-arrow-alt contact_button-icon" />
              </a>
              </motion.div>
          </div>
          </div>
           <motion.div className="contact_card"
            initial={{ opacity: 0, scale: 0.5 , translateX:100 }}
            animate={{ opacity: 1, scale: 1 , translateX:0 }}
            transition={{ duration: 0.8 ,delay:0.5}}
            viewport={{once:true}}>
          <h3 className='contact_title'>Write me your message</h3>
          
          <form className="contact-form"  ref={form} onSubmit={sendEmail}>
            <div className="contact_from-div">
              <label className="contct__form-tag">Name</label>
              <input
                type="text"
                name="name"
                className="contact__from-input"
                placeholder="Insert your name"
              />
            </div>
            <div className="contact_from-div">
              <label className="contct__form-tag">Email</label>
              <input
                type="email"
                name="email"
                className="contact__from-input"
                placeholder="Insert your email"
              />
            </div>
            <div className="contact_from-div">
              <label className="contct__form-tag">Message</label>
              <textarea
                name="message"
                cols="30"
                rows="10"
                placeholder="write your message"
                className="contact__form-area"
              ></textarea>
               <motion.button className="CV-link  contact__form-btn "
               whileHover={{ scale: 1.1 }}>
              SEND
            </motion.button>
            </div>
           
          </form>
          </motion.div>
         
        </div>
    </section>
  );
};

export default Contact;
