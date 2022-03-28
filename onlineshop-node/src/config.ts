import * as dotenv from 'dotenv'
dotenv.config({
    path: __dirname + '/../.env'
})

console.log(__dirname + '/../.env');

console.log(process.env.DATABASE_URL);


export default {
    databaseUrl: process.env.DATABASE_URL,
    secretKey: process.env.SECRET_KEY
}