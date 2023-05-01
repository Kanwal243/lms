import mongoose, { mongo } from "mongoose";
const connection = {};
async function connectDb() {
  if (connection.isConnected) {
    console.log("DataBase Already Connected");
  }
}
const db = {connectDb}
export default db;