const express = require("express");
const db = require("../db/db-config.js");
const server = express();
server.use(express.json());

// GET
server.get("/", async (req, res) => {
  try {
    let data = await db("cars");
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

server.get("/:id", async (req, res) => {
  try {
    const id = req.params.id;
    let data = await db("cars").where({ id });
    res.status(200).json(data);
  } catch (error) {
    console.error(error);
    res.status(500).send("Something went wrong");
  }
});

// POST
server.post("/", async (req, res) => {
  try {
    let userInput = await db("cars").insert(req.body);
    let data = await db("cars").where({ id: userInput });
    res.json(data[0]);
  } catch (error) {
    console.error(error);
    res.status(500).json({ message: "Sorry!" });
  }
});

module.exports = server;
