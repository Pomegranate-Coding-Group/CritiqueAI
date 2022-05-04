import type { NextApiRequest, NextApiResponse } from "next";

import dbConnect from "lib/dbConnect";
import { IKeyword, keyModel } from "models/keyword";
import { ITag, tagModel } from "models/tag";
/**
 * Represents a job listing supplied by a user.
 * Ideally this would be the obj structure coming from frontend request
 */
export interface JobListing {
  industry: string;
  title: string;
  text: string;
}

export default async function handler(
  req: NextApiRequest,
  res: NextApiResponse
) {
  await dbConnect();

  let industry: string = req.body.industry;
  let text: string = req.body.text?.toLowerCase();

  let keywords: IKeyword[] = [];
  let tags: ITag[] = [];
  const { method } = req;

  switch (method) {
    case "POST":
      try {
        // find keywords with
        // @ts-ignore
        keywords = await keyModel.find({ industry: industry });
        // @ts-ignore
        tags = await tagModel.find({});
        let filteredKeywords = keywords;
        if (keywords) {
          console.log(`Found ${keywords.length} keywords`);
          if (text) {
            // filter down to only keywords found in input text. this may get a bit slow if big dataset but should do for now
            filteredKeywords = keywords.filter((k) =>
              text.includes(k.name.toLowerCase())
            );
            filteredKeywords.sort((a, b) => b.importance - a.importance); // Organize by importance descending (bigger is better)
          }
        } else {
          console.log("Coudn't find any keywords!");
        }

        res.status(200).json({ success: true, keywords: filteredKeywords, tags: tags });
      } catch (error: any) {
        console.log(error);
        res.status(400).json({ success: false, error: error.message });
      }
      break;
    case "GET":
      res.status(400).json({
        success: false,
        error: "Unsupported method. Only post requests are supported",
      });
      break;
    default:
      res.status(400).json({ success: false });
      break;
  }
}
