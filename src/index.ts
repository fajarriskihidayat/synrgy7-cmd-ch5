import express from "express";
const cors = require("cors");
const PORT = 8000;

const app = express();

const rootRoute = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(express.static(__dirname + "./../public"));

app.set("view engine", "ejs");
app.set("views", "./src/views");

app.use(rootRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
