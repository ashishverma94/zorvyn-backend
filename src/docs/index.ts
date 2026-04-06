import { authPaths } from "./paths/auth.paths.js";
import { financePaths } from "./paths/finance.paths.js";

import { securitySchemes } from "./components/security.js";
import { dashboardPaths } from "./paths/dashboard.path.js";
import { authSchemas } from "./schemas/auth.schema.js";
import { financeSchemas } from "./schemas/finance.schema.js";
import { dashboardSchemas } from "./schemas/dashboard.schema.js";

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