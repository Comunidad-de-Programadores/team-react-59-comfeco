import firebase from "firebase";

export const config = {
    api: {
        bodyParser: {
            sizeLimit: '5mb',
        },
    },
}

export default async function handler(req,res){

    if(req.method === 'POST'){

        //Request Body
        const { email , password } = JSON.parse(req.body);

        //Check body
        if(!email || email == "" || !password || password == ""){
            return res.status(400).json({ error: "Missing values" })
        }

        //FirebaseKeys
        var firebaseConfig = {
            apiKey: "AIzaSyBYNf8d2bbZC55LNA-B3rChfDpWOS58Ixk",
            authDomain: "store-f42c8.firebaseapp.com",
            projectId: "store-f42c8",
            storageBucket: "store-f42c8.appspot.com",
            messagingSenderId: "527568472092",
            appId: "1:527568472092:web:342dea10fc14f14fd677d9"
        };

        //Veify if there is apps initialized of firebase
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }else{
            firebase.app();
        }
        
        //SignIn
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(async (user) => {
                const token = await user.user.getIdTokenResult();
                
                //Request successful
                res.status(200).json({ token });
            })
            .catch(error => {

                //Request failed
                res.status(400).json({ error });
            })
    }else{
        res.status(200).json({message: "Only post method"})
    }
}