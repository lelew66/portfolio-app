import React from 'react'
import "./skills.css"
import Frontend from "./Frontend.jsx"
import Backend from "./Backend.jsx"
import {motion} from "framer-motion";
const Skill = () => {
  return (
    <section className="siklls section" id="skills">
      <motion.h2 animate={{ scale:1}} initial={{scale:2}} className="section__titile">Skills</motion.h2>
      <span className="section_subtitle">My technical level </span>

      <div className="skills_container container grid">
        <Frontend />

        <Backend />
      </div>

    </section>
  )
}

export default Skill
