import User from "../../models/user.models";
import { connectdb } from "../../database/db";
import jwt from "jsonwebtoken";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '2mb',
        },
    },
}

export default async function handler(req,res){
    await connectdb();

    if(req.method === 'POST'){

        const { email , password , nickname } = req.body;

        //Verify the values
        if(email == "" || password == "" || nickname == "" ||
           !email || !password || !nickname
        ){
            return res.status(400).json({error: "Missing values"});
        }

        //Verify if Email Exist
        const emailExist = await User.findOne({email});
        if(emailExist){
            return res.status(400).json({error: "email exist"});
        }

        //Verify if nickname Exist
        const nicknameExist = await User.findOne({nickname});
        if(nicknameExist){
            return res.status(400).json({error: "nickname exist"});
        }

        //Register Users
        const register = await new User({ email , password , nickname }).save()

        //Create Token
        const token = await jwt.sign({_id: register._id},process.env.KEY);

        res.status(200).json({ token });
    }else{
        res.status(200).json({message: "Only post method"})
    }
}