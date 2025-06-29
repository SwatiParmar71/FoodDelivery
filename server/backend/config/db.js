import mongoose from "mongoose";

export const  connectDB = async () =>{

    await mongoose.connect('mongodb+srv://sumitksharma363:sumit363@cluster4.ctpyquj.mongodb.net/food-del').then(()=>console.log("DB Connected"));
   
}

