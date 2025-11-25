// controllers/userrole.controller.ts
import { Request, Response } from "express";
import {
  assignRoleService,
  getUserRolesByUserService,
  getAllUserRolesService,
  removeUserRoleService,
} from "../services/userroleService";

export const assignRoleController = (req: Request, res: Response) =>
  assignRoleService(req, res);
export const getUserRolesByUserController = (req: Request, res: Response) =>
  getUserRolesByUserService(req, res);
export const getAllUserRolesController = (req: Request, res: Response) =>
  getAllUserRolesService(req, res);
export const removeUserRoleController = (req: Request, res: Response) =>
  removeUserRoleService(req, res);
