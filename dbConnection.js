const {MongoClient} = require('mongodb')
const url = 'mongodb://localhost:27017';
const client = new MongoClient(url);
const dbName = 'Linkedin';

let cachedDB = null;//avoid connecting multiple times
//async function for database connection
const dbConnection = async () =>{
    //if already connected once, don't call again
    if(cachedDB) return cachedDB;
    try{
        await client.connect();
        console.log("connected succesfully to the server");//console the message
        const db = client.db(dbName);
        cachedDB = db;//assign database ot the cachedDB
        return db;
    }
    //try catch block to handle connection errors
    catch(error){
        //error caught in catch block
        console.log("Failed to connect to the database");//console the message
        throw error;
    }
}
module.exports = {dbConnection};
