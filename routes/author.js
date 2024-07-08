const express= require('express')
const router = express.Router()
const author = require('../model/author');
router.post('/',(req,res)=>{
    try{
    const {_id,name,age,totalBooks,description}=req.body;
    const userQuery = new author({_id,name,age,totalBooks,description});
    userQuery.save()
    res.status(201).send({message:"user save"});
    }catch(err){
        res.status(500).send({message:err})
    }
})
module.exports=router;