import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import { setupSwagger } from "./docs/swagger.js";

dotenv.config();

const app = express();
setupSwagger(app);

// Middlewares
app.use(cors());
app.use(express.json());

// Health Check
app.get("/", (req, res) => {
  res.send("Finance API running 🚀");
});

import authRoutes from "./modules/auth/auth.route.js"
import financeRoutes from "./modules/finance/finance.route.js"
import dashboardRoutes from "./modules/dashboard/dashboard.route.js";

app.use("/api/auth",authRoutes)
app.use("/api/finance",financeRoutes)
app.use("/api/dashboard", dashboardRoutes);

// Global Error Handler (important for assignment)
app.use((err: any, req: any, res: any, next: any) => {
  console.error(err);

  res.status(err.status || 500).json({
    success: false,
    message: err.message || "Internal Server Error",
  });
});


const PORT = process.env.PORT || 3001;

app.listen(PORT, () => {
  console.log(`Server running on port ${PORT}`);
});