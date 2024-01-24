const express = require("express");
const axios = require("axios");
const cors = require("cors");
const app = express();
const port = 5001;
const path  = require('path');

const _dirname = path.dirname(__filename);
const buildPath = path.join(_dirname  , "../client/build");

app.use(cors());
app.use(express.static(buildPath));
app.use(express.json());


const ProjectData = [
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
      "PuppyPal a social platform designed for local dogs and their owners to connect, fostering friendships and joy. Key features include an interactive map for discovering nearby dogs, detailed dog profiles, in-app messaging for seamless communication, and sophisticated algorithms for interest-based matching.",
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
      "The teahouse management system targets teahouse owners, employees, and customers. Teahouse owners use the system to manage employee information, products, inventory, and monitor sales. Employees utilize it for order processing, while customers can browse the menu and place orders. ",
    technologies: "C#",
    Gitlink: "https://github.com/lelew66/Bubble-Tea-Project",
  },
];
// Example endpoint
app.get("/", (req, res) => {
  res.sendFile(path.join(buildPath, "index.html"));
});

app.get("/API/Projects", (req, res) => {
  try {
    if (ProjectData) {
      res.status(200).send(ProjectData);
    } else {
      res.status(404).send({ error: "Data not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.get("/API/Projects/:id", (req, res) => {
  const id = req.params.id-1;
  const arrayLenght = ProjectData.length;
  try {
    if (id <= arrayLenght) {
      res.status(200).send(ProjectData[id]);
    } else {
      res.status(404).send({ error: "Data not found" });
    }
  } catch (err) {
    res.status(500).send({ message: err.message });
  }
});

app.post("/API/create", (req, res) => {
  try {
    const { id, name, description, technologies, Gitlink } = req.body;
    if (!id || !name || !description || !technologies || !Gitlink) {
      return res.status(400).send({
        success: false,
        message: "Missing required fields in the request body",
      });
    } else {
      ProjectData.push(req.body);
      res
        .status(200)
        .send({ success: true, message: "Data saved successfully" });
    }
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send({
      success: false,
      message: "Error saving data",
      error: error.message,
    });
  }
});

app.put("/API/update/:id", (req, res) => {
  const projectId = req.params.id;
  const updateProject = req.body;
  try {
    const { name, description, technologies, Gitlink } = req.body;
    if (!projectId || !name || !description || !technologies || !Gitlink) {
      return res.status(400).send({
        success: false,
        message: "Missing required fields in the request body",
      });
    } else {
      const index = ProjectData.findIndex(
        (project) => project.id === projectId
      );
      if (index) {
        ProjectData[index] = { ...ProjectData[index], ...updateProject };
        res.status(202).json(updateProject);
      } else {
        res.status(404).json({ error: "Park not found" });
      }
    }
  } catch (error) {
    console.error("Error saving data:", error);
    res.status(500).send({
      success: false,
      message: "Error saving data",
      error: error.message,
    });
  }
});

app.delete("/delete", (req, res) => {
    try {
      ProjectData = [];
      res.status(202).json({ success: true, message: "All projects deleted" });
    } catch (error) {
      console.error("Error deleting projects:", error);
      res.status(500).json({
        success: false,
        message: "Error deleting projects",
        error: error.message,
      });
    }
  });
  

app.listen(port, '0.0.0.0',() => {
  console.log(`Server is running on http://localhost:${port}`);
});
