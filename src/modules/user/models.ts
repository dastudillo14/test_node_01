import { Document } from "mongoose";

export interface IUser {
  name:string,
  age: number;
  mail:string
}
export interface IUserDocument extends IUser, Document {}