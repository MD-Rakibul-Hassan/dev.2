
const express = require('express');
const routes = express.Router();
const {
    getSingleArtical,
    getAllArticals,
    postArtical
} = require('../Controllars/articalControllar');

routes.post("/", postArtical);

routes.get("/", getAllArticals);

routes.get("/:id",getSingleArtical );

module.exports = routes