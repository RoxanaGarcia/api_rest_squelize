const express = require('express');
const userModel = require("../models/users");

const userRoutes = express.Router();

userRoutes.get("/", async (req, res) => {
  const data = await userModel.findAll();

  res.json({ status: 200, data: data });
});
// crear usuario
userRoutes.post("/create", async (req, res) => {
  const data = await userModel.create(req.body);

  res.json({ status: 200, data });
})

// buscar usuario

userRoutes.get("/:id", async (req, res) => {
  const data = await userModel.findOne({
    where: {
      id: req.params.id
    }
  })

  res.json({ status: 200, data })
})

// actualizar usuario
userRoutes.put("/:id", async (req, res) => {
  const data = await userModel.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.json({ status: 200, data });
})

// borrar usuarios
userRoutes.delete("/:id", (req, res) => {
  console.log("id", req.params.id);

  userModel.destroy({
    where: {
      id: req.params.id
    }
  }).then((data) => {
    res.json({ status: 200, data });
  });
})

module.exports = userRoutes;