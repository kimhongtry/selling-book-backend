import mongoose, { Schema } from "mongoose";
import { JwtPayload } from "../types/userRole";

const userRoleSchema = new mongoose.Schema({
  userId: { type: mongoose.Schema.Types.ObjectId, ref: "User" },
  roleId: { type: mongoose.Schema.Types.ObjectId, ref: "Role" },
});

export const UserRole = mongoose.model<JwtPayload>("UserRole", userRoleSchema);
