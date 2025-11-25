import swaggerJsdoc from "swagger-jsdoc";

export const swaggerSpec = swaggerJsdoc({
  definition: {
    openapi: "3.0.0",
    info: {
      title: "Backend-agri API",
      version: "1.0.0",
      description: "Express + TS + MongoDB API",
    },
    servers: [
      {
        url: "http://localhost:5000/api/v1",
      },
    ],
    components: {
      securitySchemes: {
        BearerAuth: {
          type: "http",
          scheme: "bearer",
          bearerFormat: "JWT", // Optional, shows JWT in Swagger UI
        },
      },
    },
    // Optional: apply globally to all endpoints
    security: [
      {
        BearerAuth: [],
      },
    ],
  },
  apis: ["./src/routes/*.ts"], // your route files with @swagger comments
});
