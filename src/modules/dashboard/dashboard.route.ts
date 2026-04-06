import { Router } from "express";
import { getSummary, getCategory, getTrends } from "./dashboard.controller.js";
import { authenticate, authorizeRoles } from "../../middleware/auth";

const router = Router();

// Summary (Viewer + Analyst + Admin)
router.get(
  "/summary",
  authenticate,
  authorizeRoles("VIEWER", "ANALYST", "ADMIN"),
  getSummary as any,
);

// Category breakdown
router.get(
  "/category",
  authenticate,
  authorizeRoles("ANALYST", "ADMIN"),
  getCategory as any,
);

// Monthly trends
router.get(
  "/trends",
  authenticate,
  authorizeRoles("ANALYST", "ADMIN"),
  getTrends as any,
);

export default router;
