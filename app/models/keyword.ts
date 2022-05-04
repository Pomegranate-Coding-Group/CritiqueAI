import mongoose from "mongoose";

export interface IKeyword {
  name: string;
  desc?: string;
  link?: string;
  tags?: string[];
  industry?: string[];
  importance: number;
}

const keywordSchema = new mongoose.Schema<IKeyword>({
  name: { type: String, required: true },
  desc: String,
  link: String,
  tags: Array,
  industry: String,
  importance: Number,
});

export const keyModel = mongoose.models?.Keyword || mongoose.model("Keyword", keywordSchema);