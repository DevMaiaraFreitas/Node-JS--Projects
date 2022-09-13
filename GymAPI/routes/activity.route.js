import express from "express";
import activityController from "../controllers/activity.controller.js";

const router = express.Router();

router.post("/", activityController.createActivity);
router.get("/", activityController.getActivitys);
router.get("/:id", activityController.getActivity);
router.delete("/:id", activityController.deleteActivity);
router.put("/", activityController.updateActivity);

export default router;