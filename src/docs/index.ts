import { authPaths } from "./paths/auth.paths";
import { financePaths } from "./paths/finance.paths";

import { securitySchemes } from "./components/security";
import { dashboardPaths } from "./paths/dashboard.path";
import { authSchemas } from "./schemas/auth.schema";
import { financeSchemas } from "./schemas/finance.schema";
import { dashboardSchemas } from "./schemas/dashboard.schema";

export const swaggerDocument = {
  openapi: "3.0.0",
  info: {
    title: "Finance API",
    version: "1.0.0",
    description: "Finance Management Backend API",
  },

  paths: {
    ...authPaths,
    ...financePaths,
    ...dashboardPaths,
  },

  components: {
    schemas: {
      ...authSchemas,
      ...financeSchemas,
      ...dashboardSchemas,
    },
    securitySchemes,
  },
};