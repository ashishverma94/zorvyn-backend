export const dashboardPaths = {
  "/api/dashboard/summary": {
    get: {
      tags: ["Dashboard"],
      summary: "Get financial summary",
      description:
        "Returns total income, total expenses, and net balance for the logged-in user.",
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "Summary data retrieved successfully",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/SummaryResponse",
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
        },
      },
    },
  },

  "/api/dashboard/category": {
    get: {
      tags: ["Dashboard"],
      summary: "Get category-wise breakdown",
      description:
        "Returns aggregated totals grouped by category (useful for charts and insights).",
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "Category breakdown retrieved",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/CategoryBreakdown",
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
        },
      },
    },
  },

  "/api/dashboard/trends": {
    get: {
      tags: ["Dashboard"],
      summary: "Get monthly financial trends",
      description:
        "Returns monthly aggregated income, expenses, and net balance for trend analysis.",
      security: [{ bearerAuth: [] }],
      responses: {
        200: {
          description: "Monthly trends retrieved",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/MonthlyTrend",
              },
            },
          },
        },
        401: {
          description: "Unauthorized",
        },
      },
    },
  },
};