// import { createRoleService } from "../services/roleService";
// import { Request, Response } from "express";

// export const createRoleController = async (req: Request, res: Response) => {
//   const result = await createRoleService(req, res);
//   return result;
// };
import { Request, Response } from "express";
import { createRoleService } from "../services/roleService";

export const createRoleController = async (req: Request, res: Response) => {
  try {
    const { name } = req.body;
    const role = await createRoleService(name, res);
    res.status(201).json({ message: "Role created successfully", role });
  } catch (error: any) {
    res.status(400).json({ message: error.message });
  }
};
