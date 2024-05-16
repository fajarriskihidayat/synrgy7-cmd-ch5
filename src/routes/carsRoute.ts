import { Router } from "express";
import {
  createCar,
  deleteCar,
  getCars,
  getCarsById,
  updateCar,
} from "../controllers/carsController";

const router = Router();
const upload = require("../middleware/upload");

router.get("/", getCars);
router.get("/:id", getCarsById);
router.post("/", upload.single("picture"), createCar);
router.put("/:id", upload.single("picture"), updateCar);
router.delete("/:id", upload.single("picture"), deleteCar);

module.exports = router;
