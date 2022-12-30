const express = require('express');
const rolesRoutes = express.Router();
const rolesModel = require("../models/roles");


rolesRoutes.get("/", async (req, res) => {
  const data = await rolesModel.findAll();
    res.json({ status: 200, data: data });
  });


  // crear role
rolesRoutes.post("/create", async (req, res) => {
  const data = await rolesModel.create(req.body);

  res.json({ status: 200, data });
})

// buscar role

rolesRoutes.get("/:id", async (req, res) => {
  const data = await rolesModel.findOne({
    where: {
      id: req.params.id
    }
  })

  res.json({ status: 200, data })
})

// actualizar role
rolesRoutes.put("/:id", async (req, res) => {
  const data = await rolesModel.update(req.body, {
    where: {
      id: req.params.id
    }
  });

  res.json({ status: 200, data });
})
// borrar role
rolesRoutes.delete("/:id", (req, res) => {
  console.log("id", req.params.id);

  rolesModel.destroy({
    where: {
      id: req.params.id
    }
  }).then((data) => {
    res.json({ status: 200, data });
  });
})

module.exports=rolesRoutes;