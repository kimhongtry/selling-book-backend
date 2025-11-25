// // controllers/farmer.controller.ts
// import { Request, Response } from "express";
// import { Farmer } from "../models/farmerModel";

// // CREATE farmer
// export const createFarmer = async (req: Request, res: Response) => {
//   try {
//     const { name, age, phone, address } = req.body;

//     const farmer = await Farmer.create({ name, age, phone, address });

//     res.status(201).json({
//       message: "Farmer created successfully",
//       farmer,
//     });
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // GET all farmers
// export const getFarmers = async (_req: Request, res: Response) => {
//   try {
//     const farmers = await Farmer.find();
//     res.status(200).json({ farmers });
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // GET farmer by ID
// export const getFarmerById = async (req: Request, res: Response) => {
//   try {
//     const farmer = await Farmer.findById(req.params.id);
//     if (!farmer) {
//       return res.status(404).json({ message: "Farmer not found" });
//     }
//     res.status(200).json({ farmer });
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // UPDATE farmer
// export const updateFarmer = async (req: Request, res: Response) => {
//   try {
//     const farmer = await Farmer.findByIdAndUpdate(req.params.id, req.body, {
//       new: true,
//     });

//     if (!farmer) {
//       return res.status(404).json({ message: "Farmer not found" });
//     }

//     res.status(200).json({
//       message: "Farmer updated",
//       farmer,
//     });
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };

// // DELETE farmer
// export const deleteFarmer = async (req: Request, res: Response) => {
//   try {
//     const farmer = await Farmer.findByIdAndDelete(req.params.id);

//     if (!farmer) {
//       return res.status(404).json({ message: "Farmer not found" });
//     }

//     res.status(200).json({ message: "Farmer deleted successfully" });
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };
