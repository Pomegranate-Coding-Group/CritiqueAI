const extractor = require("keyword-extractor")

interface JobWords {
    industry: string;
    title: string;
    keywords: Set<string>;
}

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