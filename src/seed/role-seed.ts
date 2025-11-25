import dotenv from "dotenv";
dotenv.config();

import connectDB from "../config/db";
import Role from "../models/role";
const seedRoles = async () => {
  try {
    await connectDB();
    const roles = [
      { name: "Admin", description: "Administrator with full access" },
      { name: "Farmer", description: "Farmer who manages crops and livestock" },
      { name: "Customer", description: "Customer who purchases products" },
    ];
    for (const roleData of roles) {
      const existingRole = await Role.findOne({ name: roleData.name });
      if (!existingRole) {
        const role = new Role(roleData);
        await role.save();
        console.log(`Role ${roleData.name} created`);
      } else {
        console.log(`Role ${roleData.name} already exists`);
      }
      console.log(`Role ${roleData.name} seeded successfully`);
    }
    console.log("All roles seeded successfully");
    process.exit(0);
  } catch (error: any) {
    console.error("Error seeding roles:", error.message);
    if (error.errors) console.error(error.errors);
    process.exit(1);
  }
};

seedRoles();
