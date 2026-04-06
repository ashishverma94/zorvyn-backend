export const financeSchemas = {
  FinancialRecord: {
    type: "object",
    properties: {
      id: { type: "string" },
      amount: { type: "number", example: 5000 },
      type: { type: "string", example: "INCOME" },
      category: { type: "string", example: "SALARY" },
      date: { type: "string", format: "date-time" },
      notes: { type: "string", example: "Monthly salary" },
    },
  },

  CreateRecordInput: {
    type: "object",
    required: ["amount", "type", "category", "date"],
    properties: {
      amount: { type: "number", example: 5000 },
      type: {
        type: "string",
        enum: ["INCOME", "EXPENSE"],
      },
      category: { type: "string", example: "FOOD" },
      date: { type: "string", example: "2026-04-05" },
      notes: { type: "string", example: "Lunch" },
    },
  },

  UpdateRecordInput: {
    type: "object",
    properties: {
      amount: { type: "number" },
      type: {
        type: "string",
        enum: ["INCOME", "EXPENSE"],
      },
      category: { type: "string" },
      date: { type: "string" },
      notes: { type: "string" },
    },
  },

  PaginatedRecords: {
    type: "object",
    properties: {
      records: {
        type: "array",
        items: {
          $ref: "#/components/schemas/FinancialRecord",
        },
      },
      total: { type: "number", example: 10 },
      page: { type: "number", example: 1 },
      limit: { type: "number", example: 10 },
    },
  },
};