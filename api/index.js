const express=require('express');
const app=express();
var cors = require('cors')
app.use(cors())
const dotenv=require('dotenv').config();
const PORT=5000 || process.env.PORT;
const mongoose=require('mongoose');
app.use(express.urlencoded());
app.use(express.json());
mongoose.set("strictQuery", false);
mongoose.connect(process.env.MONGO_URL)
.then(()=> console.log("Database connected sucessfully"))
.catch(err => console.log("error setting up database"));


app.use("/api/user",require("./routes/user"));
app.use("/api/auth",require("./routes/auth"));
app.use("/api/products",require("./routes/product"))
app.use("/api/cart",require("./routes/cart"))
app.use("/api/order",require("./routes/order"));
app.listen(PORT,()=>
{
    console.log("server running at port ",PORT);
})

app.get("/api/test",(req,res) =>
{
    console.log("test is successfull")
    return res.json("api/test");
})