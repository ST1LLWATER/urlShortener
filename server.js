const express=require("express");
require("dotenv").config();

const createRoute=require("./routes/url");
const redirectRoute=require("./routes/redirect");

const app=express();
const PORT =process.env.PORT || 5000;

app.use(express.json());
app.use(express.urlencoded({extended:false}))

app.use("/api/url",createRoute);
app.use("/",redirectRoute);

app.listen(PORT,()=> console.log(`Server Listening On Port ${PORT}`))