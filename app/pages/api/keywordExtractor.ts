const extractor = require("keyword-extractor")

/**
 * Represents a unit of our internal knowledgebase of jobs and their keywords
 * Can initially store our data as an array of these objs, and if needed convert into a DB with tables that we can join based on industry and title.
 */
interface JobWords {
    industry: string;
    title: string;
    keywords: Set<string>;
}

/**
 * Represents a job listing supplied by a user.
 * Ideally this would be the obj structure coming from frontend request
 */
interface JobListing {
    industry: string;
    title: string;
    text: string;
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
 * Filters wordlist to only include words found in a given set
 * @param words List of single words or phrases
 * @param keywords Set of keywords to filter down to
 * @returns A new list with only allowed keywords included
 */
function filterKeywords(words: string[], keywords: Set<string>): string[] {
    return words.filter(word => {
        keywords.has(word)
    })
}

/**
 * Gets the frequencies of selected keywords from a block of text
 * @param text Block of text to be parsed
 * @param keywords Specific keywords to extract from text
 */
export default function getKeywords(text: string, keywords: Set<string>) {
    let words = filterKeywords(parseText(text), keywords)
    let wordMap: Map<string, number> = getFrequencies(words)
    console.log(wordMap.keys())
}


/**
 * TEST CODE BLOCK REMOVE INTO TESTING SECTION LATER
 */
 let exampleWords: JobWords = {
    industry: "compsci",
    title: "swe",
    keywords: new Set<string>([
        "python",
        "java",
        "git",
        "agile",
        "AWS",
        "javascript"
    ])
}

let exampleInput: JobListing = {
    industry: "compsci",
    title: "swe",
    text: "We are searching for an experience java developer. Ideal candidate will have 3 years of experience with java. Also require experience using git, agile development, and aws services. Java but capitalized. JAVA all caps. gIt jAvA AWS"
}

export function testKeywords() {
    getKeywords(exampleInput.text, exampleWords.keywords)
}
testKeywords();