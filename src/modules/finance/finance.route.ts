import { Router } from "express";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} from "./finance.controller.js";
import { authenticate, authorizeRoles } from "../../middleware/auth.js";

const router = Router();

// Create (Admin only)
router.post("/", authenticate, authorizeRoles("ADMIN"), createRecord as any);

// Get (Analyst + Admin)
router.get("/", authenticate, authorizeRoles("ANALYST", "ADMIN"), getRecords as any);

// Update (Admin only)
router.put("/:id", authenticate, authorizeRoles("ADMIN"), updateRecord as any);

// Delete (Admin only)
router.delete("/:id", authenticate, authorizeRoles("ADMIN"), deleteRecord as any);

export default router;
