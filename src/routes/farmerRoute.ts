// // routes/farmer.route.ts
// import { Router } from "express";
// import {
//   createFarmerController,
//   getFarmersController,
//   getFarmerByIdController,
//   updateFarmerController,
//   deleteFarmerController,
// } from "../controllers/farmerController";

// const router = Router();

// router.post("/", createFarmerController); // Create
// router.get("/", getFarmersController); // Read all
// router.get("/:id", getFarmerByIdController); // Read by ID
// router.put("/:id", updateFarmerController); // Update
// router.delete("/:id", deleteFarmerController); // Delete

// export default router;

// /**
//  * @swagger
//  * components:
//  *   schemas:
//  *     Farmer:
//  *       type: object
//  *       required:
//  *         - name
//  *         - age
//  *         - phone
//  *         - address
//  *       properties:
//  *         id:
//  *           type: string
//  *           description: Auto-generated ID of the farmer
//  *         name:
//  *           type: string
//  *           description: Farmer's name
//  *         age:
//  *           type: number
//  *           description: Farmer's age
//  *         phone:
//  *           type: string
//  *           description: Farmer's phone number
//  *         address:
//  *           type: string
//  *           description: Farmer's address
//  *       example:
//  *         id: "64f8b2a1e7b2c4a1f3e8d123"
//  *         name: "John Doe"
//  *         age: 45
//  *         phone: "0123456789"
//  *         address: "Phnom Penh, Cambodia"
//  */

// /**
//  * @swagger
//  * tags:
//  *   name: Farmers
//  *   description: Farmer management API
//  */

// /**
//  * @swagger
//  * /farmers:
//  *   post:
//  *     summary: Create a new farmer
//  *     tags: [Farmers]
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Farmer'
//  *     responses:
//  *       201:
//  *         description: Farmer created successfully
//  *       500:
//  *         description: Internal server error
//  *
//  *   get:
//  *     summary: Get all farmers
//  *     tags: [Farmers]
//  *     responses:
//  *       200:
//  *         description: List of farmers
//  *       500:
//  *         description: Internal server error
//  */

// /**
//  * @swagger
//  * /farmers/{id}:
//  *   get:
//  *     summary: Get farmer by ID
//  *     tags: [Farmers]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Farmer ID
//  *     responses:
//  *       200:
//  *         description: Farmer found
//  *       404:
//  *         description: Farmer not found
//  *       500:
//  *         description: Internal server error
//  *
//  *   put:
//  *     summary: Update farmer by ID
//  *     tags: [Farmers]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Farmer ID
//  *     requestBody:
//  *       required: true
//  *       content:
//  *         application/json:
//  *           schema:
//  *             $ref: '#/components/schemas/Farmer'
//  *     responses:
//  *       200:
//  *         description: Farmer updated
//  *       404:
//  *         description: Farmer not found
//  *       500:
//  *         description: Internal server error
//  *
//  *   delete:
//  *     summary: Delete farmer by ID
//  *     tags: [Farmers]
//  *     parameters:
//  *       - in: path
//  *         name: id
//  *         required: true
//  *         schema:
//  *           type: string
//  *         description: Farmer ID
//  *     responses:
//  *       200:
//  *         description: Farmer deleted successfully
//  *       404:
//  *         description: Farmer not found
//  *       500:
//  *         description: Internal server error
//  */
