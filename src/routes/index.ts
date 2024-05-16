import { Router } from "express";

const router = Router();

const carSizeRoute = require("./carSizeRoute");
const carsRoute = require("./carsRoute");

router.use("/api/cars", carsRoute);
router.use("/api/sizes", carSizeRoute);

module.exports = router;
