import express from "express";
import studentController from "../controllers/student.controller.js";

const router = express.Router();

router.post("/", studentController.createStudent);
router.get("/", studentController.getStudents);
router.get("/:id", studentController.getStudent);
router.delete("/:id", studentController.deleteStudent);
router.put("/", studentController.updateStudent);

export default router;