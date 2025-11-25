// services/userrole.service.ts
import { Request, Response } from "express";
import { UserRole } from "../models/userRoleModel";

export const assignRoleService = async (req: Request, res: Response) => {
  try {
    const { userId, roleId } = req.body;
    if (!userId || !roleId)
      return res
        .status(400)
        .json({ message: "userId and roleId are required" });

    const existing = await UserRole.findOne({ userId, roleId });
    if (existing)
      return res
        .status(400)
        .json({ message: "Role already assigned to this user" });

    const userRole = await UserRole.create({ userId, roleId });
    res.status(201).json({ message: "Role assigned", userRole });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getUserRolesByUserService = async (
  req: Request,
  res: Response
) => {
  try {
    const { userId } = req.params;
    if (!userId) return res.status(400).json({ message: "userId is required" });

    const userRoles = await UserRole.find({ userId }).populate("roleId");
    if (!userRoles || userRoles.length === 0)
      return res.status(404).json({ message: "No roles found for this user" });

    res.status(200).json({ userRoles });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const getAllUserRolesService = async (_req: Request, res: Response) => {
  try {
    const userRoles = await UserRole.find().populate("roleId userId");
    res.status(200).json({ userRoles });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};

export const removeUserRoleService = async (req: Request, res: Response) => {
  try {
    const { id } = req.params;
    const deleted = await UserRole.findByIdAndDelete(id);
    if (!deleted)
      return res.status(404).json({ message: "UserRole not found" });

    res.status(200).json({ message: "Role removed from user" });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
