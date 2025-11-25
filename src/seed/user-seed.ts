// import dotenv from "dotenv";
// dotenv.config();

// import bcrypt from "bcryptjs";
// import connectDB from "../config/db";
// import { User } from "../models/user.model";
// import Role from "../models/role"; // <-- import Role model

// const seedAdmin = async () => {
//   try {
//     await connectDB();

//     const email = process.env.EMAIL_ADMIN;
//     const password = process.env.PASSWORD_ADMIN;
//     if (!email || !password) {
//       console.log(" EMAIL_ADMIN or PASSWORD_ADMIN missing in .env");
//       process.exit(1);
//     }

//     // Find the Admin role
//     const adminRole = await Role.findOne({ name: "Admin" });
//     if (!adminRole) {
//       console.log("Admin role not found. Please seed roles first.");
//       process.exit(1);
//     }

//     // Check if admin user already exists
//     const existingAdmin = await User.findOne({ email });
//     if (existingAdmin) {
//       console.log("Admin user already exists");
//       process.exit(0);
//     }

//     const adminUser = new User({
//       name: process.env.FULL_NAME_ADMIN || "Administrator",
//       email,
//       password: await bcrypt.hash(password, 10),
//       age: 30,
//       role: adminRole.name, // <-- assign the string "Admin"
//     });

//     console.log("Admin to be created:", adminUser);
//     await adminUser.save();
//     console.log("Admin user seeded successfully");
//     process.exit(0);
//   } catch (error: any) {
//     console.error("Error seeding admin:", error.message);
//     if (error.errors) console.error(error.errors);
//     process.exit(1);
//   }
// };

// seedAdmin();
import dotenv from "dotenv";
dotenv.config();
import bcrypt from "bcryptjs";
import connectDB from "../config/db";
import { User } from "../models/user.model";
import Role from "../models/role";

const seedAdmin = async () => {
  try {
    await connectDB();

    const email = process.env.EMAIL_ADMIN;
    const password = process.env.PASSWORD_ADMIN;

    if (!email || !password) {
      console.log("EMAIL_ADMIN or PASSWORD_ADMIN missing in .env");
      process.exit(1);
    }

    const adminRole = await Role.findOne({ name: "Admin" });
    if (!adminRole) {
      console.log("Admin role not found. Please seed roles first.");
      process.exit(1);
    }

    const existingAdmin = await User.findOne({ email });
    if (existingAdmin) {
      console.log("Admin user already exists");
      process.exit(0);
    }

    const hashedPassword = await bcrypt.hash(password, 10);

    const adminUser = new User({
      name: process.env.FULL_NAME_ADMIN || "Administrator",
      email,
      password: hashedPassword,
      age: 30,
      role: adminRole.name, // store as string "Admin"
    });

    await adminUser.save();
    console.log("Admin user seeded successfully");
    process.exit(0);
  } catch (error: any) {
    console.error("Error seeding admin:", error.message);
    process.exit(1);
  }
};

seedAdmin();
