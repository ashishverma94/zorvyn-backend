import { Router } from "express";
import { getSummary, getCategory, getTrends } from "./dashboard.controller";
import { authenticate, authorizeRoles } from "../../middleware/auth";

const router = Router();

// Summary (Viewer + Analyst + Admin)
router.get(
  "/summary",
  authenticate,
  authorizeRoles("VIEWER", "ANALYST", "ADMIN"),
  getSummary,
);

// Category breakdown
router.get(
  "/category",
  authenticate,
  authorizeRoles("ANALYST", "ADMIN"),
  getCategory,
);

// Monthly trends
router.get(
  "/trends",
  authenticate,
  authorizeRoles("ANALYST", "ADMIN"),
  getTrends,
);

export default router;
