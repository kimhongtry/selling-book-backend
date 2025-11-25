import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import { User } from "../models/user.model";
import Role from "../models/role";

//
export const createRoleService = async (req: Request, res: Response) => {
  try {
    const { name, email, password, roleName } = req.body;

    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "User already exists" });
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const role = await Role.findOne({ name: roleName });
    if (!role) {
      return res.status(400).json({ message: "Role does not exist" });
    }

    const user = new User({
      name,
      email,
      password: hashedPassword,
      role: role._id,
    });

    await user.save();

    res.status(201).json({ message: "User created successfully", user });
  } catch (error: any) {
    res.status(500).json({ message: error.message });
  }
};
