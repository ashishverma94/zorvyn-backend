export const financePaths = {
  "/api/finance": {
    post: {
      tags: ["Finance"],
      summary: "Create a financial record",
      security: [{ bearerAuth: [] }],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/CreateRecordInput",
            },
          },
        },
      },
      responses: {
        201: {
          description: "Record created successfully",
        },
        401: {
          description: "Unauthorized",
        },
      },
    },

    get: {
      tags: ["Finance"],
      summary: "Get financial records (with filters, pagination, search)",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "page",
          in: "query",
          schema: { type: "number", example: 1 },
        },
        {
          name: "limit",
          in: "query",
          schema: { type: "number", example: 10 },
        },
        {
          name: "type",
          in: "query",
          schema: { type: "string", enum: ["INCOME", "EXPENSE"] },
        },
        {
          name: "category",
          in: "query",
          schema: { type: "string" },
        },
        {
          name: "search",
          in: "query",
          schema: { type: "string", example: "food" },
        },
        {
          name: "startDate",
          in: "query",
          schema: { type: "string", example: "2026-04-01" },
        },
        {
          name: "endDate",
          in: "query",
          schema: { type: "string", example: "2026-04-30" },
        },
      ],
      responses: {
        200: {
          description: "List of records",
          content: {
            "application/json": {
              schema: {
                $ref: "#/components/schemas/PaginatedRecords",
              },
            },
          },
        },
      },
    },
  },

  "/api/finance/{id}": {
    put: {
      tags: ["Finance"],
      summary: "Update a financial record",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      requestBody: {
        required: true,
        content: {
          "application/json": {
            schema: {
              $ref: "#/components/schemas/UpdateRecordInput",
            },
          },
        },
      },
      responses: {
        200: {
          description: "Record updated",
        },
        404: {
          description: "Record not found",
        },
      },
    },

    delete: {
      tags: ["Finance"],
      summary: "Delete (soft delete) a financial record",
      security: [{ bearerAuth: [] }],
      parameters: [
        {
          name: "id",
          in: "path",
          required: true,
          schema: { type: "string" },
        },
      ],
      responses: {
        200: {
          description: "Record deleted",
        },
        404: {
          description: "Record not found",
        },
      },
    },
  },
};