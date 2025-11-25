import { Request, Response } from "express";
import {
  registerService,
  loginService,
  logoutservice,
} from "../services/authservice";

export const registerController = async (req: Request, res: Response) => {
  const result = await registerService(req, res);
  return result;
};
export const loginController = async (req: Request, res: Response) => {
  const result = await loginService(req, res);
  return result;
};
export const logoutController = async (req: Request, res: Response) => {
  const result = await logoutservice(req, res);
  return result;
};
