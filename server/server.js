const express = require("express");
const mongoose = require("mongoose");
const cors = require("cors");
const postRoute = require("./routes/postRoute");
const bodyParser = require("body-parser");

const app = express();
app.use(express.json());
app.use(bodyParser.json({ limit: "30mb", extended: true }));
app.use(bodyParser.urlencoded({ limit: "30mb", extended: true }));

app.use(cors());

app.use("/posts", postRoute);

const CONNECTION_URL =
  "mongodb+srv://Ramil:ObsR6Xx4b8RI43bh@cluster0.lrftd.mongodb.net/tatargram?retryWrites=true&w=majority";
const PORT = process.env.PORT || 5000;

mongoose
  .connect(CONNECTION_URL, { useNewUrlParser: true, useUnifiedTopology: true })
  .then(() =>
    app.listen(PORT, () =>
      console.log(`Server Running on Port: http://localhost:${PORT}`)
    )
  )
  .catch((error) => console.log(`${error} did not connect`));

mongoose.set("useFindAndModify", false);
