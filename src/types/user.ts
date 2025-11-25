import { IRole } from "../types/role";

export interface IUser {
  name: string;
  _id?: string;
  email: string;
  password: string;
  phone?: string;
  createdAt?: Date;
  updatedAt?: Date;
}
