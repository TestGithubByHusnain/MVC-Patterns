// Core module
const path = require('path')
//External modules
const express=require('express');
// Local Module
const rootDir= require ('../utils/pathUtil');
const contact = express.Router();


contact.get("/contact-us", (req, res, next)=>{
    res.sendFile(path.join(rootDir, "views", "contact.html" ));
})
contact.post("/contact-us", (req, res, next)=>{
    console.log(req.body);
    res.sendFile(path.join(rootDir, "views", "contact-success.html" ));
})
module.exports = contact;