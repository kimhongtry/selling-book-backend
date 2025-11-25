import { User } from "../models/user.model";
import { Request, Response } from "express";
import bcrypt from "bcryptjs";
import Jwt from "jsonwebtoken";
import Role from "../models/role";
import { UserRole } from "../models/userRoleModel";

export const registerService = async (req: Request, res: Response) => {
  try {
    const { email, password, name, phone, age } = req.body;

    //  Check if email already exists
    const existingUser = await User.findOne({ email });
    if (existingUser) {
      return res.status(400).json({ message: "Email already exists" });
    }

    // Hash password
    const hashedPassword = await bcrypt.hash(password, 10);

    //Create new user
    const newUser = new User({
      name,
      age,
      phone,
      email,
      password: hashedPassword,
    });
    await newUser.save();

    //  Find Customer role, create it if missing
    let customerRole = await Role.findOne({ name: "Customer" });
    if (!customerRole) {
      customerRole = await Role.create({ name: "Customer" });
    }

    // Assign role to user
    await UserRole.create({ userId: newUser._id, roleId: customerRole._id });

    //  Respond
    res.status(201).json({
      message: "User registered successfully",
      user: newUser,
      role: customerRole.name,
    });
  } catch (error: any) {
    console.error("Error in register service:", error);
    res.status(500).json({ message: error.message || "Internal Server Error" });
  }
};

export const loginService = async (req: Request, res: Response) => {
  const { email, password } = req.body;
  try {
    const existUser = await User.findOne({ email });
    if (!existUser)
      return res.status(400).json({ message: "Invalid credentials" });

    const isMatch = await bcrypt.compare(password, existUser.password);
    if (!isMatch)
      return res.status(400).json({ message: "Invalid credentials" });

    const token = Jwt.sign(
      {
        id: existUser._id,
        role: (existUser as any).role || "Customer", // now it's string "Admin" or "Customer"
        email: existUser.email,
        name: existUser.name,
      },
      process.env.JWT_SECRET || "SECRET_KEY",
      { expiresIn: "1d" }
    );

    res.status(200).json({ message: "Login successful", token });
  } catch (error) {
    console.error("Error in login service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};

export const logoutservice = async (req: Request, res: Response) => {
  try {
    // Invalidate the token on the client side by instructing the client to delete it.
    res.status(200).json({ message: "Logout successful" });
  } catch (error) {
    console.error("Error in logout service:", error);
    res.status(500).json({ message: "Internal server error" });
  }
};
