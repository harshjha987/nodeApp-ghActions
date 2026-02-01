import express from "express";

const app = express();
const PORT = process.env.PORT ?? 8080;

app.get("/",(req,res)=>{
    return res.json({msg : "Hello from server, now making some change to see"
    });
})

app.listen(PORT,()=>{
    console.log(`Server is running at port ${PORT}`);
})