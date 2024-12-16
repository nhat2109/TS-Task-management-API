// tạo file database sdung cho index.js chính, cấu hình database
// gọi mongoes vào 
import mongoose from 'mongoose';
// kết nối với mongodb
export const connect = async (): Promise<void> =>{
    try{
        await mongoose.connect(process.env.MONGO_URL);
        console.log("Connect to database successfully");
    } catch(error){
        console.log("Error connecting");
    }
}