import type { NextApiRequest, NextApiResponse } from 'next'
import openConnection from './db';
// const words = require('./wordBank.json')
const extractor = require("keyword-extractor")

/**
 * Represents a unit of our internal knowledgebase of jobs and their keywords
 * Can initially store our data as an array of these objs, and if needed convert into a DB with tables that we can join based on industry and title.
 */
export interface JobWords {
    industry: string;
    title: string;
    keywords: string[];
}

/**
 * Represents a job listing supplied by a user.
 * Ideally this would be the obj structure coming from frontend request
 */
export interface JobListing {
    industry: string;
    title: string;
    text: string;
}

/**
 * The format for supplying extraction results to the frontend
 */
interface KeywordsResponse {
    keywords: string[];
    frequencies: number[];
}


/**
 * Returns a list of words found in the text, with basic english stopwords removed
 * @param text A large block of text to be parsed
 */
function parseText(text: string): string[] {
    let res: string[] = extractor.extract(text, {
        language: "english",
        remove_digits: true,
        return_changed_case: true,
        remove_duplicates: false,
        return_chained_words: false // if we want to recognize multi word phrases, set this to true and add logic to detect multi-word phrases
    })
    return res
}

/**
 * Generates a sorted mapping of keywords to their frequencies
 * @param words list of keywords
 */
function getFrequencies(words: string[]): Map<string, number> {
    let res = words.reduce((counts, word) => counts.set(word, (counts.get(word) || 0) + 1), new Map<string, number>()); // mapping value frequency
    res = new Map<string, number>([...res.entries()].sort((a, b) => b[1] - a[1])); // sorts desc
    return res
}

/**
 * Filters wordlist to only include words found in a given list
 * @param words List of single words or phrases
 * @param keywords Array of keywords to filter down to
 * @returns A new list with only allowed keywords included
 */
function filterKeywords(words: string[], keywords: string[]): string[] {
    return words.filter(word => {
        return keywords.includes(word)
    })
}

/**
 * Grabs the corresponding wordbank for a job area
 * @param wordBank Reference to JSON file with wordbanks in it
 * @param industry
 * @param title
 * @returns An array of keywords if a match is found
 */
function getWordBank(wordBank: any, industry: string, title: string): string[] {
    // let json = JSON.parse(wordBank)
    let json = wordBank
    for (let i = 0; i < json.wordLists.length; i++) {
        let bank = json.wordLists[i]
        if (bank.title == title && bank.industry == industry) {
            return bank.words
        }
    }
    throw Error("Internal Error No Wordbank Found!")
}

/**
 * Gets the frequencies of selected keywords from a block of text
 * @param text Block of text to be parsed
 * @param keywords Specific keywords to extract from text
 */
export function getKeywords(text: string, keywords: string[]): Map<string, number> {
    console.log("text: ", text, "keywords", keywords)
    let words = filterKeywords(parseText(text), keywords)
    let wordMap: Map<string, number> = getFrequencies(words)
    console.log(Array.from(wordMap.keys())) //debugline
    return wordMap
}


/**
 * API ROUTING
 */
async function handler(req: NextApiRequest, res: NextApiResponse) {
    if (req.method !== 'POST') {
        res.status(400).send({ message: 'Unsupported method. Only post requests are supported'})
        return
    }
    if (req.headers['content-type'] !== 'application/json') {
        res.status(400).send({ message: 'Something went wrong with POST request, please ensure content type header is application/json'})
        return
    }

    const industry: string = req.body.industry
    const title: string = req.body.title
    const listingText: string = req.body.text
    // const input: Joblisting = JSON.parse(req.body) // Use this if api bodyParser: false

    // const wordBank = getWordBank(words, industry, title)
    // const keywordMap: Map<string, number> = getKeywords(listingText, wordBank)
    // const keywordResp: KeywordsResponse = {
    //     keywords: Array.from(keywordMap.keys()),
    //     frequencies: Array.from(keywordMap.values())
    // }
    // console.log(keywordResp)
    let resp = await openConnection()
    res.status(200).json(resp)
}
export default handler