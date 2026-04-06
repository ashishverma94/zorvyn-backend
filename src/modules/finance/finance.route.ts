import { Router } from "express";
import {
  createRecord,
  getRecords,
  updateRecord,
  deleteRecord,
} from "./finance.controller";
import { authenticate, authorizeRoles } from "../../middleware/auth";

const router = Router();

// Create (Admin only)
router.post("/", authenticate, authorizeRoles("ADMIN"), createRecord);

// Get (Analyst + Admin)
router.get("/", authenticate, authorizeRoles("ANALYST", "ADMIN"), getRecords);

// Update (Admin only)
router.put("/:id", authenticate, authorizeRoles("ADMIN"), updateRecord);

// Delete (Admin only)
router.delete("/:id", authenticate, authorizeRoles("ADMIN"), deleteRecord);

export default router;
