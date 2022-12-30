const express = require('express');
const tasksRoutes = express.Router();
const tasksModel = require("../models/tasks");


tasksRoutes.get("/", async (req, res) => {
  const data = await tasksModel.findAll();
    res.json({ status: 200, data: data });
  });

  // crear role
tasksRoutes.post("/create", async (req, res) => {
  const data = await tasksModel.create(req.body);

  res.json({ status: 200, data });
})

// buscar tasks

tasksRoutes.get("/:id", async (req, res) => {
  const data = await tasksModel.findOne({
    where: {
      id: req.params.id
    }
  })

  res.json({ status: 200, data })
})

// actualizar tasks
tasksRoutes.put("/:id", async (req, res) => {
  const data = await tasksModel.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.json({ status: 200, data });
})
// borrar tasks
tasksRoutes.delete("/:id", (req, res) => {
  console.log("id", req.params.id);

  tasksModel.destroy({
    where: {
      id: req.params.id
    }
  }).then((data) => {
    res.json({ status: 200, data });
  });
})


module.exports=tasksRoutes;