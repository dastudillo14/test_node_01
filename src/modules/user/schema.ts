import mongoose from "mongoose";
import { IUserDocument } from "./models";

const userSchema = new mongoose.Schema({
    name:{
        type:String,
        required:true
    },
    mail:{
        type:String,
        required:true,        
    },
    age:{
        type:Number,
        required:true
    }
});

export const UserModel = mongoose.model<IUserDocument>("users", userSchema);

