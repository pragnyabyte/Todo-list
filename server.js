import express from "express";
import dotenv from "dotenv";

import dbConnect from "./config/dbConfig.js";

dotenv.config();

dbConnect();

const app = express()
const port = 3000

app.get('/helo', (req, res) => {
  res.send('Hello World!')
})

app.listen(port, () => {
  console.log(`Example app listening on port ${port}`)
})