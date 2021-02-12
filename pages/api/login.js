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

        //Reques Body
        const { email , password } = JSON.parse(req.body);

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
        
        firebase.auth().signInWithEmailAndPassword(email,password)
            .then(async (user) => {
                const token = await user.user.getIdTokenResult();
                res.status(200).json({ token });
            })
    }else{
        res.status(200).json({message: "Only post method"})
    }
}