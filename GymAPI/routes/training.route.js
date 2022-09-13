import express from "express";
import trainingController from "../controllers/training.controller.js";

const router = express.Router();

router.post("/", trainingController.createTraining);
router.get("/", trainingController.getTrainings);
router.get("/:id", trainingController.getTraining);
router.delete("/:id", trainingController.deleteTraining);
router.put("/", trainingController.updateTraining);

export default router;