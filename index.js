const express = require("express")
const app = express();
const userRouter = require("./routes/userRoutes");
const noteRouter = require("./routes/noteRoutes");

const mongoose = require("mongoose");

app.use(express.json());

app.use((req, res, next)=>{
   console.log("HTTP Method - " + req.method + " , URL - " + req.url);
   next();
});

app.use("/users", userRouter);
app.use("/note", noteRouter);

app.get("/", (req, res) =>{
  res.send("Hello");
});

mongoose.connect("mongodb://localhost:27017")
.then(()=>{
  app.listen(5000, ()=>{
    console.log("Server started on port no. 5000");
  });
})
.catch((error)=>{
  console.log(error);
})


