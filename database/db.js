import mongoose from "mongoose";

const connectdb = () => {
    if(mongoose.connection.readyState >= 1) return;

    return mongoose.connect(process.env.MONGODB, {
        useNewUrlParser: true,
        useFindAndModify: false,
        useUnifiedTopology: true
    })
}

export { connectdb };