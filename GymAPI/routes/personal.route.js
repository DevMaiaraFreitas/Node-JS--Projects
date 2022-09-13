import express from "express";
import personalController from "../controllers/personal.controller.js";

const router = express.Router();

router.post("/", personalController.createPersonal);
router.get("/", personalController.getPersonals);
router.get("/:id", personalController.getPersonal);
router.delete("/:id", personalController.deletePersonal);
router.put("/", personalController.updatePersonal);

export default router;