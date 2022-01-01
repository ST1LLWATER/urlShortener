const express=require("express");
const validUrl=require("valid-url")
const shortid=require("shortid")
const {UrlDB}=require("../models");

const router=express.Router();

const baseUrl=process.env.BASE_URL || "http://localhost:5000";

router.post("/shorten",async (req,res)=>{
    const{longUrl}=req.body;
    if(!validUrl.isUri(baseUrl)){
        return res.status(401).json("Invalid Base URL");
    }

    const url_code=shortid.generate();

    if(validUrl.isUri(longUrl)){
        try{
            let url=await UrlDB.findOne({
                where:{
                    long_url:longUrl
                }
            })
            if(url){
               return res.json(url);
            }
            else{
                const short_url=baseUrl+"/"+url_code;

                const URLEntry=await UrlDB.create({
                    long_url:longUrl,
                    short_url,
                    url_code
                })
                return res.json(URLEntry);
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