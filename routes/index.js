const express = require("express");
const rolesRoutes = require("./roles");
const usersRoutes = require("./users");
const tasksRoutes = require("./tasks");

const apiRoutes = express.Router();

apiRoutes.use("/users", usersRoutes);
apiRoutes.use("/roles", rolesRoutes);
apiRoutes.use("/tasks", tasksRoutes);

module.exports = apiRoutes;