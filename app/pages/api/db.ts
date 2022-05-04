/** DB Management Code
 * MSSQL Server
 */
const sql = require('mssql')

// For local testing, make sure you export these env variables in your own terminal. check vercel for all the values
const sqlConfig = {
    user: process.env.DB_USER,
    password: process.env.DB_PWD,
    database: process.env.DB_NAME,
    server: process.env.DB_ADDR,
    port: 1433,
    pool: {
        max: 10,
        min: 0,
        idleTimeoutMillis: 30000
    },
}

// When fully implementing, switch to taking a parameter for industry. This is just for testing
export default async function openConnection() {
    try {
        await sql.connect(sqlConfig)
        const result = await sql.query`select * from Keyword` // SAMPLE QUERY
        console.log(result)
        return result
    } catch (err) {
        console.error("Error connecting to database.", err)
    }
}

