const express = require("express");
const mongoose = require("mongoose");
const router = require("./routes/bookroutes.js");
const cors = require("cors");
const app = express();

// Middlewares

// app.use('/', (req, res, next)=> {
//     res.send('This is our app!')
// })

app.use(express.json());
app.use(cors());
app.use("/books", router); // localhost:5000/books

mongoose
  .connect(
    "mongodb+srv://admin:thebookstoreadmin@cluster0.5vbcs2s.mongodb.net/bookStore?retryWrites=true&w=majority"
  )
  .then(() => console.log("Connected To Database!"))
  .then(() => {
    app.listen(5000);
  })
  .catch((err) => console.log(err));

// console.log("first");
