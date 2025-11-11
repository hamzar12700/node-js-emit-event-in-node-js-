import mongoose from "mongoose";


export async function dbConnect() {
    try {
       let conn= await mongoose.connect('mongodb://localhost:27017/mernAuth')
       console.log('Database Name :', conn.connection.name,'PORT : ',conn.connection.port ,"Host Name :", conn.connection.host);
    //    console.log( ,'==== connected');
       
    } catch (error) {
        console.log(error.message);
    }
}