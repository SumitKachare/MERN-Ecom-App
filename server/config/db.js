import mongoose from 'mongoose'

const MONGO_URI = " mongodb+srv://carthub:carthub@cluster0.6gh0f.mongodb.net/carthub?retryWrites=true&w=majority"
const connectDB =  async () =>{
    try {
        const conn =  await mongoose.connect(MONGO_URI , {
            useNewUrlParser:true,
            useUnifiedTopology:true,
            useCreateIndex:true
        })

        console.log(`Mongo DB Connected : ${conn.connection.host}`);
    } catch (error) {
        console.log(error.message);
        process.exit(1)
    }
}

export default connectDB

