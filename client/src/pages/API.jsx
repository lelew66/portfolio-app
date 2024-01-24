import React, { useState } from "react";
import "./API.css";
import Green from "../assets/Green.png";
import Check from "../assets/check.png";
import Arrow from "../assets/arrow.png";

import Footer  from '../components/footer/Footer';
const APIData = [
  {
    id: "1",
    methode: "GET",
    title: "Listing All Projects",
    descritpion: "This endpoint fetches all projects",
    URL: "http://99.79.50.137/API/Projects",
    auth: "No",
    url_params: null,
    body_params: null,
    response_200: [
      {
        id: 1,
        name: "ShopCeramix",
        description:
          "Ceramix is an online platform dedicated to displaying and selling exquisite ceramic masterpieces. The user interface (UI) design encompasses various pages to ensure a seamless and engaging experience for visitors.",
        technologies: [
          "React.js",
          "Node.js",
          "mongoDB",
          "REST API",
          "AWS EC2",
          "Git Action",
        ],
        Gitlink: "https://github.com/lelew66/ShopCeramix",
      },
      {
        id: 2,
        name: "PuppyPal",
        description:
          "PuppyPal, a social platform designed for local dogs and their owners to connect, fostering friendships and joy. Key features include an interactive map for discovering nearby dogs, detailed dog profiles, in-app messaging for seamless communication, and sophisticated algorithms for interest-based matching.",
        technologies: [
          "vite",
          "React.js",
          "Node.js",
          "REST API",
          "AWS EC2",
          "Git Action",
        ],
        Gitlink: "https://github.com/lelew66/PuppyPal",
      },
      {
        id: 3,
        name: "Bubble Tea Project",
        description:
          "The teahouse management system targets teahouse owners, employees, and customers. Teahouse owners use the system to manage employee information, products, inventory, and monitor sales. Employees utilize it for order processing, while customers can browse the menu and place orders.",
        technologies: "C#",
        Gitlink: "https://github.com/lelew66/Bubble-Tea-Project",
      },
    ],
    response_404: '{ message: "Data not found" }',
    response_500: "{ message: err.message }",
  },
  {
    id: "2",
    methode: "GET",
    title: "Listing Specific Project",
    descritpion: "This endpoint fetches specific post",
    URL: "http://99.79.50.137/API/Projects{ProjectId}",
    auth: "No",
    url_params: ["project id", "number", "true", "project id"],
    body_params: null,
    response_200:
    [
        {
            id: 3,
            name: "Bubble Tea Project",
            description:
              "The teahouse management system targets teahouse owners, employees, and customers. Teahouse owners use the system to manage employee information, products, inventory, and monitor sales. Employees utilize it for order processing, while customers can browse the menu and place orders.",
            technologies: "C#",
            Gitlink: "https://github.com/lelew66/Bubble-Tea-Project",
          }],
        response_404: '{ message: "Data not found" }',
    response_500: "{ message: err.message }",
  },
];

const API = () => {
  const [showResponse200, setShowResponse200] = useState(false);
  const [showResponse400, setShowResponse400] = useState(false);
  const [showResponse500, setShowResponse500] = useState(false);
  const [showResponse2, setShowResponse2] = useState(false);
  const [showResponse4, setShowResponse4] = useState(false);
  const [showResponse5, setShowResponse5] = useState(false);

  const handleArrowClick = () => {
    setShowResponse200(!showResponse200);
  };
  const handleArrowClick1 = () => {
    setShowResponse400(!showResponse400);
  };
  const handleArrowClick2 = () => {
    setShowResponse500(!showResponse500);
  };
  const handleArrowClick3 = () => {
    setShowResponse2(!showResponse2);
  };
  const handleArrowClick4 = () => {
    setShowResponse4(!showResponse4);
  };
  const handleArrowClick5 = () => {
    setShowResponse5(!showResponse5);
  };

  return (
    <>
  
      <div className="wrapper">
        <div className="api-hero">
          <img src={Green} alt="project images" className="api-image" />
        </div>
        <div className="api-container">
          <h1 className="api-header">API Docs</h1>

          <div className="api-request-container">
            <h3 className="api-endpoint-title">
              <span className="api-method">[{APIData[0].methode}]</span>
              <span className="api-request">{APIData[0].title}</span>
            </h3>
            <form>
              <table>
                <thead>
                  <tr>
                    <th className="api-table-head">Description</th>
                    <th className="api-table-head">URL</th>
                    <th className="api-table-head">Auth Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="api-table-data">{APIData[0].descritpion}</td>
                    <td className="api-table-data">{APIData[0].URL}</td>
                    <td className="api-table-data">{APIData[0].auth}</td>
                  </tr>
                </tbody>
              </table>
            </form>
            {APIData[0].url_params !== null && (
              <form>
                <table>
                  <thead>
                    <tr>
                      <th className="api-table-head">Paramater</th>
                      <th className="api-table-head">Type</th>
                      <th className="api-table-head">Required</th>
                      <th className="api-table-head">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="api-table-data">
                        {APIData[0].url_params[0]}
                      </td>
                      <td className="api-table-data">
                        {APIData[0].url_params[1]}
                      </td>
                      <td className="api-table-data">
                        {APIData[0].url_params[2]}
                      </td>
                      <td className="api-table-data">
                        {APIData[0].url_params[3]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            )}
            <div className="api-response">
              <div className="api-response-status">
                <span className="">
                  <img
                    src={Arrow}
                    alt="project images"
                    className="api-icon-arraw"
                    onClick={handleArrowClick}
                  />
                </span>
                <span className="icon-check">
                  <img src={Check} alt="project images" className="api-icon" />
                </span>
                <span className="api-response-title">Response 200</span>
              </div>
              {showResponse200 && (
                <div className="api-response-content">
                  <p className="json">
                    {JSON.stringify(APIData[0].response_200, null, 2)}
                  </p>
                </div>
              )}
            </div>

            <div className="api-response">
              <div className="api-response-status">
                <span className="">
                  <img
                    src={Arrow}
                    alt="project images"
                    className="api-icon-arraw"
                    onClick={handleArrowClick1}
                  />
                </span>
                <span className="icon-check ">
                  <img src={Check} alt="project images" className="api-icon" />
                </span>
                <span className="api-response-title">Response 404</span>
              </div>
              {showResponse400 && (
                <div className="api-response-content">
                  <p>{APIData[0].response_404}</p>
                </div>
              )}
            </div>
            <div className="api-response">
              <div className="api-response-status">
                <span className="">
                  <img
                    src={Arrow}
                    alt="project images"
                    className="api-icon-arraw"
                    onClick={handleArrowClick2}
                  />
                </span>
                <span className="icon-check ">
                  <img src={Check} alt="project images" className="api-icon" />
                </span>
                <span className="api-response-title">Response 500</span>
              </div>
              {showResponse500 && (
                <div className="api-response-content">
                  <p>{APIData[0].response_500}</p>
                </div>
              )}
            </div>
          </div>

          <div className="api-request-container">
            <h3 className="api-endpoint-title">
              <span className="api-method">[{APIData[1].methode}]</span>
              <span className="api-request">{APIData[1].title}</span>
            </h3>
            <form>
              <table>
                <thead>
                  <tr>
                    <th className="api-table-head">Description</th>
                    <th className="api-table-head">URL</th>
                    <th className="api-table-head">Auth Required</th>
                  </tr>
                </thead>
                <tbody>
                  <tr>
                    <td className="api-table-data">{APIData[1].descritpion}</td>
                    <td className="api-table-data">{APIData[1].URL}</td>
                    <td className="api-table-data">{APIData[1].auth}</td>
                  </tr>
                </tbody>
              </table>
            </form>
            {APIData[1].url_params !== null && (
              <form>
                <table>
                  <thead>
                    <tr>
                      <th className="api-table-head">Paramater</th>
                      <th className="api-table-head">Type</th>
                      <th className="api-table-head">Required</th>
                      <th className="api-table-head">Description</th>
                    </tr>
                  </thead>
                  <tbody>
                    <tr>
                      <td className="api-table-data">
                        {APIData[1].url_params[0]}
                      </td>
                      <td className="api-table-data">
                        {APIData[1].url_params[1]}
                      </td>
                      <td className="api-table-data">
                        {APIData[1].url_params[2]}
                      </td>
                      <td className="api-table-data">
                        {APIData[1].url_params[3]}
                      </td>
                    </tr>
                  </tbody>
                </table>
              </form>
            )}
            <div className="api-response">
              <div className="api-response-status">
                <span className="">
                  <img
                    src={Arrow}
                    alt="project images"
                    className="api-icon-arraw"
                    onClick={handleArrowClick3}
                  />
                </span>
                <span className="icon-check">
                  <img src={Check} alt="project images" className="api-icon" />
                </span>
                <span className="api-response-title">Response 200</span>
              </div>
              {showResponse2 && (
                <div className="api-response-content">
                  <p className="json">
                    {JSON.stringify(APIData[1].response_200,null,2)}
                  </p>
                </div>
              )}
            </div>

            <div className="api-response">
              <div className="api-response-status">
                <span className="">
                  <img
                    src={Arrow}
                    alt="project images"
                    className="api-icon-arraw"
                    onClick={handleArrowClick4}
                  />
                </span>
                <span className="icon-check">
                  <img src={Check} alt="project images" className="api-icon" />
                </span>
                <span className="api-response-title">Response 404</span>
              </div>
              {showResponse4 && (
                <div className="api-response-content">
                  <p>{APIData[1].response_404}</p>
                </div>
              )}
            </div>
            <div className="api-response">
              <div className="api-response-status">
                <span className="">
                  <img
                    src={Arrow}
                    alt="project images"
                    className="api-icon-arraw"
                    onClick={handleArrowClick5}
                  />
                </span>
                <span className="icon-check">
                  <img src={Check} alt="project images" className="api-icon" />
                </span>
                <span className="api-response-title">Response 500</span>
              </div>
              {showResponse5 && (
                <div className="api-response-content">
                  <p>{APIData[1].response_500}</p>
                </div>
              )}
            </div>
          </div>

        </div>
      </div>
      <Footer />
    </>
  );
};

export default API;
