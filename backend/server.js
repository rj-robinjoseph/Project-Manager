// 1. imports
import express from "express";
import cors from "cors";
import mongoose from "mongoose";

import model from "./model.js";

// 2. initialize express app
const app = express();
const port = process.env.PORT || 9000;

// middleware
app.use(cors());
app.use(express.json());

// 3. initialize database
const mongoURI =
  "mongodb+srv://user:user@cluster0.nvwhn.mongodb.net/mydatabase?retryWrites=true&w=majority";

mongoose.connect(mongoURI, {
  useCreateIndex: true,
  useNewUrlParser: true,
  useUnifiedTopology: true,
});

mongoose.connection.once("open", () => {
  console.log("Database Connected!");
});

// 4. Routes
app.get("/", (req, res) => res.status(200).send("Hello"));

//get projects
app.get("/get/projects", (req, res) => {
  model.find((err, data) => {
    err ? res.status(500).send(err) : res.status(201).send(data);
  });
});

//post projects
app.post("/new/project", (req, res) => {
  const projectData = req.body;

  model.create(projectData, (err, data) => {
    err ? res.status(500).send(err) : res.status(201).send(data);
  });
});

// 5. listen
app.listen(port, () => console.log(`Listening on port: ${port}`));