import express from "express";
import { PORT, mongodbURL } from "./config.js";
import mongoose from "mongoose";
import booksRoute from './routes/booksRoute.js'
import cors from 'cors'

const app = express();
app.use(express.json());

app.use(cors());

app.get("/", (req, res) => { 
  console.log(req);
  return res.status(234).send("Welcome to MERN");
});


app.use('/books', booksRoute);

mongoose
  .connect(mongodbURL)
  .then(() => {
    console.log("App connected to database");
    app.listen(PORT, () => {
      console.log(`App is listening at port: ${PORT}`);
    });
  })
  .catch((error) => {
    console.log(error);
  });
