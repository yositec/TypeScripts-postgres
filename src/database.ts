import {Pool} from 'pg'

export const pool = new Pool({
    user: 'postgres',
    host: 'localhost',
    password: 'Faline56y',
    database: 'users',
    port: 5432,
})