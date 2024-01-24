import React, { useState, useEffect } from "react";
import "./projects.css";
import Work2 from "../../assets/work2.jpg";
import Work3 from "../../assets/work3.jpg";
import Home from "../../assets/Home.png";
import { motion } from "framer-motion";
import axios from "axios";

const Projects = () => {
  const [projectData, setProjectData] = useState([]);
  useEffect(() => {
    const fetchData = async () => {
      try {
        const result = await axios.get("/API/Projects");
        if (Array.isArray(result.data) && result.data.length > 0) {
          setProjectData(result.data);
          // console.log(result.data);
          // console.log(projectData);
          // setState((prevState) => !prevState);
        } else {
          console.error("Invalid data format from the API");
        }
      } catch (err) {
        console.error("Error fetching data from the API:", err.message);
      }
    };

    fetchData();
  }, []);

  useEffect(() => {
    console.log("Updated projectData:", projectData);
  }, [projectData]);
  const handleClick = (url) => {
    console.log("handleClick triggered. Navigating to:", url);
    window.location.href = url;
  };
  return (
    <>
      {projectData && projectData.length > 0 && (
        <section className="projects section" id="projects">
          <h2 className="section__titile">Projects</h2>
          <span className="section_subtitle">My currently projects</span>
          <div className="projects_container container grid">
            <motion.div className="projects_content">
              <div className="projects_images">
                <img
                   src={Home}
                  alt="project images"
                  className="project-image"
                />
              </div>
              <div className="projects_body">
                <div className="title-box">
                  <i className="bx bx-book-alt"></i>
                  {projectData[0].name && (
                    <h3 className="projects_title">{projectData[0].name}</h3>
                  )}
                </div>
                <p className="projects_text">{projectData[0].description}</p>
                <div className="projects_skills">
                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-yellow"></i>
                    {projectData[0].technologies[0]}
                  </span>

                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-red"></i>
                    {projectData[0].technologies[1]}
                  </span>

                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-green"></i>{" "}
                    {projectData[0].technologies[2]}
                  </span>
                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-yellow"></i>
                    {projectData[0].technologies[3]}
                  </span>

                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-red"></i>
                    {projectData[0].technologies[4]}
                  </span>

                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-green"></i>{" "}
                    {projectData[0].technologies[5]}
                  </span>
                </div>
                <div className="btn-box">
                  <motion.input
                    type="button"
                    className="projects_view btn"
                    value="VIEW PROJECT"
                    whileHover={{ scale: 1.1 }}
                    onClick={() =>
                      handleClick(
                        "http://ec2-18-227-26-190.us-east-2.compute.amazonaws.com"
                      )
                    }
                  />
                  <motion.input
                    type="button"
                    className="projects_code  btn"
                    value="VIEW CODE"
                    whileHover={{ scale: 1.1 }}
                    onClick={() =>
                      handleClick("https://github.com/lelew66/ShopCeramix")
                    }
                  />
                </div>
              </div>
            </motion.div>
            <div className="projects_content">
              <div className="projects_images">
                <img
                  src={Work2}
                  alt="project images"
                  className="project-image"
                />
              </div>
              <div className="projects_body">
                <div className="title-box">
                  <i className="bx bx-book-alt"></i>
                  <h3 className="projects_title">{projectData[1].name}</h3>
                </div>
                <p className="projects_text">{projectData[1].description}</p>
                <div className="projects_skills">
                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-yellow"></i>
                    {projectData[1].technologies[0]}
                  </span>

                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-red"></i>
                    {projectData[1].technologies[1]}
                  </span>

                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-green"></i>{" "}
                    {projectData[1].technologies[2]}
                  </span>
                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-yellow"></i>
                    {projectData[1].technologies[3]}
                  </span>

                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-red"></i>
                    {projectData[1].technologies[4]}
                  </span>
                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-green"></i>
                    {projectData[1].technologies[5]}
                  </span>
                </div>
                <div className="btn-box">
                  <motion.input
                    type="button"
                    className="projects_view  btn"
                    value="VIEW PROJECT"
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.input
                    type="button"
                    className="projects_code  btn"
                    value="VIEW CODE"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleClick('https://github.com/lelew66/PuppyPal')}
                  />
                </div>
              </div>
            </div>
            <div className="projects_content">
              <div className="projects_images">
                <img
                  src={Work3}
                  alt="project images"
                  className="project-image"
                />
              </div>
              <div className="projects_body">
                <div className="title-box">
                  <i className="bx bx-book-alt"></i>
                  <h3 className="projects_title">{projectData[2].name}</h3>
                </div>
                <p className="projects_text">{projectData[2].description}</p>
                <div className="projects_skills">
                  <span className="projects_skill_name">
                    <i className="bx bxs-circle bxs-yellow"></i>
                    {projectData[2].technologies[0]}
                  </span>
                </div>
                <div className="btn-box">
                  <motion.input
                    type="button"
                    className="projects_view  btn"
                    value="VIEW PROJECT"
                    whileHover={{ scale: 1.1 }}
                  />
                  <motion.input
                    type="button"
                    className="projects_code  btn"
                    value="VIEW CODE"
                    whileHover={{ scale: 1.1 }}
                    onClick={() => handleClick('https://github.com/lelew66/Bubble-Tea-Project')}
                  />
                </div>
              </div>
            </div>
          </div>
        </section>
      )}
    </>
  );
};

export default Projects;
