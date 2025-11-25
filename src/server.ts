import express from "express";
import dotenv from "dotenv";
import connectDB from "./config/db";
import router from "./routes/index";
import swaggerUi from "swagger-ui-express";
import { swaggerSpec } from "./config/swagger";

dotenv.config();
const app = express();

// Swagger
app.use("/api-docs", swaggerUi.serve, swaggerUi.setup(swaggerSpec));

// JSON parser
app.use(express.json());
app.use(express.urlencoded({ extended: true }));

// Connect DB
connectDB();

// Routes
app.use("/api/v1", router);

// Error handling
app.use(
  (
    err: any,
    req: express.Request,
    res: express.Response,
    next: express.NextFunction
  ) => {
    console.error(err.stack);
    res.status(500).json({ message: "Server Error", error: err.message });
  }
);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`Server running on port ${PORT}`));
console.log(`Swagger Docs:http://localhost:${PORT}/api-docs`);
