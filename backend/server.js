const express=require('express');
const app=express();

app.get('/',(req,res)=>{
    res.send("Hello World");
})

app.post('/post',(req,res)=>{
    res.send("Upload the article");
})

app.put("/put",(req,res)=>{
    res.send("Update the article");
})

app.delete("/delete",(req,res)=>{
    res.send("Delete the article");
})

app.listen(3000,()=>{
    console.log("Server is running on port 3000");
})