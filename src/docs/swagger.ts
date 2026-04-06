import swaggerUi from "swagger-ui-express";
import { swaggerDocument } from "./index";

export const setupSwagger = (app: any) => {
  app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerDocument));
};