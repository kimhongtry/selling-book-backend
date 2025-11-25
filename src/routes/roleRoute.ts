import { Router } from "express";
import { createRoleController } from "../controllers/rolecontroller";
import { roleCheck } from "../middlewares/authMiddleware";
import { authorizeRoles } from "../middlewares/authorizeRoles";

const router = Router();

/**
 * @swagger
 * roles/create-role:
 *   post:
 *     summary: Create a new role
 *     tags: [Roles]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             type: object
 *             properties:
 *               name:
 *                 type: string
 *               description:
 *                 type: string
 *             required:
 *               - name
 *               - description
 *     responses:
 *       201:
 *         description: Role created successfully
 */
router.post(
  "/create-role",
  roleCheck,
  authorizeRoles("Admin"),
  createRoleController
);

export default router;
