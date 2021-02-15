import { connectdb } from "../../database/db";
import sendMail from "../../functions/sendMail";
import jwt from "jsonwebtoken";
import User from "../../models/user.model";

export default async function handler(req,res){
    await connectdb();
    
    if(req.method === 'POST'){
        const { email } = req.body;

        //Check if email body exist
        if(!email || 
            email == '' || 
            !email.includes("@") || 
            !email.includes(".com")
        ){
            return res.status(200).json({error: "put the email right"})
        }

        //Check if email exist
        const emailExist = await User.findOne({ email });
        if(!emailExist){
            res.status(400).json({ error: "Email Doesn't Exist" });
        }

        //Create token whit 30min of expiration
        const token = await jwt.sign({
            action_type: "reset password",
            _id: emailExist._id
        },process.env.KEY,{  expiresIn: '1h' });

        //Send Mail
        const send = await sendMail("Reset Password",`
            <h2>Now you are going to reset the password</h2>
            <br/>
            <p>Click to the link (the link expires in 1h)</p>
            <br/>
            <a>${token}</a>
        `,email)

        //Check if mail is send
        if(send){
            res.status(200).json({message: "Mail send"})
        }else{
            res.status(400).json({error: "Mail not send"})
        }

    }else{
        res.status(500).json({message: "Only post method"});
    }
}