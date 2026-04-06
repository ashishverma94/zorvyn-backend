export const authSchemas = {
  RegisterInput: {
    type: "object",
    required: ["name", "email", "password"],
    properties: {
      name: { type: "string", example: "Ashish" },
      email: { type: "string", example: "ashish@test.com" },
      password: { type: "string", example: "123456" },
    },
  },

  LoginInput: {
    type: "object",
    required: ["email", "password"],
    properties: {
      email: { type: "string", example: "ashish@test.com" },
      password: { type: "string", example: "123456" },
    },
  },

  AuthResponse: {
    type: "object",
    properties: {
      success: { type: "boolean", example: true },
      token: { type: "string", example: "jwt.token.here" },
    },
  },

  UserResponse: {
    type: "object",
    properties: {
      id: { type: "string" },
      name: { type: "string" },
      email: { type: "string" },
      role: { type: "string", example: "ADMIN" },
      status: { type: "string", example: "ACTIVE" },
    },
  },
};