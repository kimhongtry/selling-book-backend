import { Router } from "express";
import {
  assignRoleController,
  getUserRolesByUserController,
  getAllUserRolesController,
  removeUserRoleController,
} from "../controllers/userroleController";
import { roleCheck } from "../middlewares/authMiddleware";

const router = Router();

/**
 * @swagger
 * components:
 *   schemas:
 *     UserRole:
 *       type: object
 *       required:
 *         - userId
 *         - roleId
 *       properties:
 *         userId:
 *           type: string
 *           description: User ID
 *         roleId:
 *           type: string
 *           description: Role ID
 */

/**
 * @swagger
 * /userroles:
 *   post:
 *     summary: Assign a role to a user
 *     tags: [UserRole]
 *     requestBody:
 *       required: true
 *       content:
 *         application/json:
 *           schema:
 *             $ref: '#/components/schemas/UserRole'
 *     responses:
 *       201:
 *         description: Role assigned successfully
 *       400:
 *         description: User already has this role
 */
router.post("/", roleCheck(["Admin"]), assignRoleController);

/**
 * @swagger
 * /userroles:
 *   get:
 *     summary: Get all user roles
 *     tags: [UserRole]
 *     responses:
 *       200:
 *         description: List of all user roles
 */
router.get("/", roleCheck(["Admin"]), getUserRolesByUserController);

/**
 * @swagger
 * /userroles/user/{userId}:
 *   get:
 *     summary: Get roles of a specific user
 *     tags: [UserRole]
 *     parameters:
 *       - in: path
 *         name: userId
 *         required: true
 *         schema:
 *           type: string
 *         description: User ID
 *     responses:
 *       200:
 *         description: List of roles for the user
 */
router.get("/user/:userId", roleCheck(["Admin"]), getAllUserRolesController);

/**
 * @swagger
 * /userroles/{id}:
 *   delete:
 *     summary: Remove a role from a user
 *     tags: [UserRole]
 *     parameters:
 *       - in: path
 *         name: id
 *         required: true
 *         schema:
 *           type: string
 *         description: UserRole ID
 *     responses:
 *       200:
 *         description: Role removed successfully
 *       404:
 *         description: UserRole not found
 */
router.delete("/:id", roleCheck(["Admin"]), removeUserRoleController);

export default router;
