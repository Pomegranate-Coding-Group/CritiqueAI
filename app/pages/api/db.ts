/** DB Management Code
 * MSSQL Server
 */
const sql = require('mssql')

export interface KeywordResult {
    KeywordID: number,
    KeyName: string,
    KeyDesc: string,
    KeyLink: string,
    // Keytags: string[], // If tags are gonna be an array, uncomment this and remove the other tags below
    KeyTag1: string,
    KeyTag2: string,
    KeyTag3: string,
    KeyTag4: string,
    Industry1: string,
    Industry2: string
    Importance: number
}


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
    options: {
        encrypt: true,
        trustServerCertificate: true
    }
}

if(!sqlConfig.user || !sqlConfig.password || !sqlConfig.database || !sqlConfig.server){
    throw new Error(`missing 1+ required environment database vars. 
        DB_USER: ${sqlConfig.user},
        DB_PWD: ${sqlConfig.password}, 
        DB_NAME: ${sqlConfig.database}, 
        DB_ADDR: ${sqlConfig.server}`);
}


export default async function queryDB(industry: string) {
    try {
        let pool = await sql.connect(sqlConfig);
        let result = await pool.request()
            .input('industry_input', sql.NVarChar, industry)
            .query('SELECT * FROM tblINDUSTRY WHERE IndustryName = @industry_input');
        console.log(result); // TODO rm debug line
        return result;
    } catch (err) {
        console.error("Error connecting to database.", err);
        throw new Error('Internal DB Server Error');
    }
}

