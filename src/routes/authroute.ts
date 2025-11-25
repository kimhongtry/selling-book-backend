// src/routes/auth.route.ts
import { Router, Request, Response } from "express";
import {
  registerController,
  loginController,
  logoutController,
} from "../controllers/authcontroller";

const router = Router();

/**
 * @swagger
 * tags:
 *   name: Auth
 *   description: Authentication endpoints
 */

/**
 * @swagger
 * /auth/register:
 *   post:
 *     summary: Register a new user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - name
 *               - email
 *               - password
 *               - phone
 *               - age
 *             properties:
 *
 *               name:
 *                 type: string
 *                 example: "Kim Hong"
 *               email:
 *                 type: string
 *                 example: "kimhong@example.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *               phone:
 *                 type: string
 *                 example: "0123456789"
 *               age:
 *                 type: number
 *                 example: 25
 *     responses:
 *       201:
 *         description: User registered successfully
 *       400:
 *         description: Email already exists
 */
router.post("/register", registerController);

/**
 * @swagger
 * /auth/login:
 *   post:
 *     summary: Login a user
 *     tags: [Auth]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             required:
 *               - email
 *               - password
 *             properties:
 *               email:
 *                 type: string
 *                 example: "admin@example.com"
 *               password:
 *                 type: string
 *                 example: "123456"
 *     responses:
 *       200:
 *         description: Login successful
 *       400:
 *         description: Invalid credentials
 */
router.post("/login", loginController);

/**
 * @swagger
 * /auth/logout:
 *   post:
 *     summary: Logout a user
 *     tags: [Auth]
 *     responses:
 *       200:
 *         description: Logout successful
 */
router.post("/logout", logoutController);

export default router;
