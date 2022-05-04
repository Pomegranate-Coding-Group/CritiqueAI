import mongoose from "mongoose";

export interface ITag {
  name: string;
  desc?: string;
  color?: string;
}

const tagSchema = new mongoose.Schema<ITag>({
  name: { type: String, required: true },
  desc: String,
  color: String
});

export const tagModel = mongoose.models?.Tag || mongoose.model("Tag", tagSchema);
