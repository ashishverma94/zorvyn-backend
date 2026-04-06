export const dashboardSchemas = {
  SummaryResponse: {
    type: "object",
    properties: {
      totalIncome: {
        type: "number",
        example: 72000,
      },
      totalExpense: {
        type: "number",
        example: 21000,
      },
      netBalance: {
        type: "number",
        example: 51000,
      },
    },
  },

  CategoryBreakdown: {
    type: "array",
    items: {
      type: "object",
      properties: {
        category: {
          type: "string",
          example: "FOOD",
        },
        total: {
          type: "number",
          example: 4200,
        },
      },
    },
  },

  MonthlyTrend: {
    type: "array",
    items: {
      type: "object",
      properties: {
        month: {
          type: "string",
          example: "2026-04",
        },
        income: {
          type: "number",
          example: 60000,
        },
        expense: {
          type: "number",
          example: 15000,
        },
        net: {
          type: "number",
          example: 45000,
        },
      },
    },
  },
};