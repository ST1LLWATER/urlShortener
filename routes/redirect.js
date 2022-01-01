const express=require("express");
const router=express.Router();
const {UrlDB}=require("../models");

router.get("/:code",async(req,res)=>{
    const {code}=req.params;
   try{
       const url=await UrlDB.findOne({
           where:{
               url_code:code
           }
       });
       if(url){
           return res.json(url.long_url);
       }
       else {
           res.status(404).json("No URL Found");
       }
   }
   catch(err){
       console.log(err);
       res.status(500).json("Server Error");
   }

})

module.exports=router;