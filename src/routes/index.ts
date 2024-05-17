import { Request, Response, Router } from "express";

const router = Router();

const index = require("../apis/index.api");
const addCar = require("../apis/addCar.api");
const editCar = require("../apis/editCar.api");

const carSizeRoute = require("./carSizeRoute");
const carsRoute = require("./carsRoute");

router.get("/", index);
router.get("/addCar", addCar);
router.get("/editCar/:id", editCar);

router.use("/api/cars", carsRoute);
router.use("/api/sizes", carSizeRoute);

module.exports = router;
