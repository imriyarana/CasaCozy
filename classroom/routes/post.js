const express = require("express");
const router = express.Router();

router.get("/", (req,res)=>{
    res.send("GET for posts");
});

router.get("/:id", (req,res)=>{
    res.send("GET for posts id");
});

router.post("/", (req,res)=>{
    res.send("POst for post");
});

router.delete("/:id", (req,res)=>{
    res.send("DELETE for posts id");
});

module.exports = router;