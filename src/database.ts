import {Pool} from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Faline56y',
    database: 'firstapi',
    port: 5432,
})