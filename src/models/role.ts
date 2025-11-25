import mongoose, { Schema } from "mongoose";
import { IRole } from "../types/role";

const RoleSchema = new mongoose.Schema(
  {
    name: { type: String, required: true, unique: true },
    userId: {
      type: Schema.Types.ObjectId,
      ref: "User",
      require: true,
    },
    description: { type: String },
  },
  { timestamps: true }
);

export default mongoose.model<IRole>("Role", RoleSchema);
