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
        console.log(req.body)

        const { email , password , nickname } = JSON.parse(req.body);

        const db = () => firebase.firestore()

        //Verify the values
        if(email == "" || password == "" || nickname == "" ||
           !email || !password || !nickname
        ){
            return res.status(401).json({error: "Put all values"})
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

        //Verify Nickname
        const exist = (await db().collection("users").where("nickname","==",nickname).get()).size;

        if(exist != 0){
            return res.status(401).json({error: "This nickname exist"});
        }

        //Create User
        firebase.auth().createUserWithEmailAndPassword(email,password)
            .then(async (user) => {
                
                //Add Nickname
                const setNickname = await db().collection("users").add({
                    user: user.user.uid,
                    nickname
                })

                const token = await user.user.getIdTokenResult()

                res.status(200).json({ token })
            })
            .catch(error => {
                res.status(400).json({ error })
            })
    }
    

    
}