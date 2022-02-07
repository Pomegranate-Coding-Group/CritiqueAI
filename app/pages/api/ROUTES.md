# API Route Docs

## POST /keywords - Keyword Extraction

### Request Format

`

    {
        industry: string
        title: string
        text: string
    }
`

### Response Format

`

    {
        keywords: string[]
        frequencies: number[]
    }
`
