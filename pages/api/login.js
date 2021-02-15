import User from "../../models/user.model";
import { connectdb } from "../../database/db";
import jwt from "jsonwebtoken";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '5mb',
        },
    },
}

export default async function handler(req,res){
    await connectdb();

    if(req.method === 'POST'){
        //Request Body
        const { email , password } = req.body;

        //Check body
        if(!email || email == "" || !password || password == ""){
            return res.status(400).json({ error: "Missing values" })
        }

        //Check if email exist
        const emailExist = await User.findOne({ email });
        if(!emailExist){
            return res.status(400).json({ error: "Email does't exist" });
        }

        //Compare password encrypt
        emailExist.compare(password,async (error,equal) => {
            if (error){
                return res.status(500).json({ error });
            }
            
            //If don't equal
            if (!equal){
                return res.status(401).json({ error: "Password invalid" });
            }
            
            //If equal
            const token = await jwt.sign({_id: emailExist._id },"Minatozaki");
        
            res.status(200).json({ token });
        })
    }else{
        res.status(200).json({message: "Only post method"})
    }
}