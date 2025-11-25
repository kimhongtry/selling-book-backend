import { Document } from "mongoose";
export interface IRole extends Document {
  _id: string;
  name: string;
  userId: object;
  description: string;
  createdAt: Date;
  updatedAt: Date;
}
