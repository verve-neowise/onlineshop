import * as dotenv from 'dotenv'

dotenv.config({
    path: __dirname + '/../../.env'
})

console.log(__dirname);


export default {
    databaseUrl: process.env.DATABASE_URL,
    secretKey: process.env.SECRET_KEY
}