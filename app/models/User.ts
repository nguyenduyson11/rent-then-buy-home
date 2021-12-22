import mongoose, { Schema } from "mongoose";

const UserSchema = new Schema(
  {
    userName: { type: String },
    password: { type: String, min: 18, required: true },
  },
  {
    timestamps: true,
  }
);
export default mongoose.model("User", UserSchema);
