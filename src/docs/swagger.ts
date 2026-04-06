import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./index.js";

export const setupSwagger = (app: any) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};