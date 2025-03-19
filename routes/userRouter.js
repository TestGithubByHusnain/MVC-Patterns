// const path = require ('path');

const express = require ('express');
const userRouter= express.Router();

// Local module
const homesController= require('../controllers/homes');
userRouter.get('/', homesController.getHomes);



module.exports= userRouter;

