const express=require("express");
const validUrl=require("valid-url")
const shortid=require("shortid")
const {UrlDB}=require("../models");

const router=express.Router();


router.post("/shorten",async (req,res)=>{
    const{longUrl}=req.body;
    const url_code=shortid.generate();

    if(validUrl.isUri(longUrl)){
        try{
            let url=await UrlDB.findOne({
                where:{
                    long_url:longUrl
                }
            })
            if(url){
               return res.status(200).json(url.url_code);
            }
            else{
                const URLEntry=await UrlDB.create({
                    long_url:longUrl,
                    url_code
                })
                return res.status(200).json(URLEntry.url_code);
            }
        }catch(err){
            console.log(err);
            res.status(500).json("Server Error");
        }
    }else{
        res.status(401).json("Invalid longURL");
    }

})

module.exports=router;