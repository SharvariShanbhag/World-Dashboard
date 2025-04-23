import dotenv from "dotenv";
// Imports Node.js module that loads environment variables from .env into process.env
import { Sequelize } from "sequelize";

dotenv.config();

export const sequalize = new sequalize(
    process.env.DB_NAME,
    //Specifies database schema name from environment variables
    process.env.DB_USER,
    process.env.DB_PASSWORD,
    {
        host:process.env.DB_HOST,
        dialact : "mysql",
        logging: false,
        dialactOptions:{}
        }
);

(async()=>{
    try{
        await sequalize.authenticate();
        console.log("connection to database successfully")
    }catch(error){
        console.log("connection error");
        process.exit(1);
    }
})