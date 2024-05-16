import express from "express";
const cors = require("cors");
const PORT = 8000;

const app = express();

const rootRoute = require("./routes");

app.use(cors());
app.use(express.json());
app.use(express.static("public"));

app.use(rootRoute);

app.listen(PORT, () => {
  console.log(`server running on port ${PORT}`);
});
