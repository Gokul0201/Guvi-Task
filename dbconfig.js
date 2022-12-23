const mongodb = require('mongodb');
const mongoClient = mongodb.MongoClient;
require('dotenv').config();
const dbName= process.env.DB_NAME
const dbUrl = `${process.env.MONGO_URL}/${process.env.DB_NAME}`
module.exports = {dbName,dbUrl,mongodb,mongoClient}