import express from "express";
import cors from "cors";
import mongoose from "mongoose";
import bodyParser from "body-parser";

import postRoutes from "./routes/posts.js";

const app = express();

app.use("/posts", postRoutes);

app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));
app.use(cors());

const CONNECTION_URL =
  "mongodb+srv://bajrang:bajrang1234@cluster0.dkemrtu.mongodb.net/?retryWrites=true&w=majority";

const PORT = process.env.PORT || 3000;

mongoose
  .connect(CONNECTION_URL, { useUnifiedTopology: true, useNewurlParser: true })
  .then(() => {
    app.listen(PORT, () => console.log(`the server is listening at: ${PORT}`));
  })
  .catch((err) => {
    console.log(err.message);
  });

// mongoose.set("useFindAndModify", false);
