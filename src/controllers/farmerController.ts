// import { Request, Response } from "express";
// import {
//   createFarmer,
//   getFarmers,
//   getFarmerById,
//   deleteFarmer,
//   updateFarmer,
// } from "../services/farmerService";

// export const createFarmerController = async (req: Request, res: Response) => {
//   try {
//     const farmer = await createFarmer(req, res);
//     res.status(201).json({ message: "Farmer created successfully", farmer });
//   } catch (error: any) {
//     res
//       .status(500)
//       .json({ message: error?.message ?? "Internal server error" });
//   }
// };

// export const getFarmersController = async (_req: Request, res: Response) => {
//   try {
//     const farmers = await getFarmers(_req, res);
//     res.status(200).json({ farmers });
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const getFarmerByIdController = async (req: Request, res: Response) => {
//   try {
//     const farmer = await getFarmerById(req, res);
//     if (!farmer) return res.status(404).json({ message: "Farmer not found" });

//     res.status(200).json({ farmer });
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };
// export const updateFarmerController = async (req: Request, res: Response) => {
//   try {
//     const farmer = await updateFarmer(req, res);
//     if (!farmer) return res.status(404).json({ message: "Farmer not found" });

//     res.status(200).json({ message: "Farmer updated", farmer });
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };

// export const deleteFarmerController = async (req: Request, res: Response) => {
//   try {
//     const farmer = await deleteFarmer(req, res);
//     if (!farmer) return res.status(404).json({ message: "Farmer not found" });

//     res.status(200).json({ message: "Farmer deleted successfully" });
//   } catch (error: any) {
//     res.status(500).json({ message: error.message });
//   }
// };
