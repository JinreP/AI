import { UserTypes } from "@/lib/types";
import { model, models, Mongoose, Schema } from "mongoose";

const UserSchema = new Schema<UserTypes>({
  name: { type: String, required: true, minlength: 3 },
  age: { type: Number, min: 0 },
});

export const User = models.User || model<UserTypes>("User", UserSchema);
