import type { NextApiRequest, NextApiResponse } from 'next'
import queryDB, { KeywordResult } from './db';

export default async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(400).send({ message: 'Unsupported method. Only post requests are supported'})
        console.log("Exit due to user 400 error")
        return
    }
    if (req.headers['content-type'] !== 'application/json') {
        res.status(400).send({ message: 'Something went wrong with POST request, please ensure content type header is application/json'})
        console.log("Exit due to user 400 error")
        return
    }

    let industry: string = req.body.industry
    let text: string = req.body.text

    let keywords: KeywordResult[] = []

    try {
        keywords = await queryDB(industry)
    } catch (err) {
        res.status(500).send({ message: 'Internal server error occured'})
    }

    // filter down to only keywords found in input text. this may get a bit slow if big dataset but should do for now
    let filteredKeywords = keywords.filter(keyword => text.toLowerCase().includes(keyword.KeyName.toLowerCase()))
    filteredKeywords.sort((a,b) => b.Importance - a.Importance) // Organize by importance descending (bigger is better)

    res.status(200).json(filteredKeywords)
}
