import React from 'react';
import './home.css';
import Social from './Social';
import Data from './Data';
import ScrollDown from './ScrollDown';
import {motion} from "framer-motion";

const Home = () => {
  return (
    <section className="home section" id="home">
        <motion.div className="home__container container grid"
           initial={{ opacity: 0, scale: 0.5 }}
           animate={{ opacity: 1, scale: 1 }}
           transition={{ duration: 0.5 }}>
          <div className="home__content grid">

                 <Social />

                <div className="home__img">
                </div>

                <Data />
            </div>
            <ScrollDown  />
        </motion.div>
    </section>
  )
}

export default Home