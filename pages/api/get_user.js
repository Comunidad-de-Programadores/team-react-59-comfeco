import admin from "firebase-admin";
import firebase from "firebase";

const db = () => firebase.firestore()

export const config = {
  api: {
    bodyParser: {
      sizeLimit: "5mb",
    },
  },
};

export default async function handler(req, res) {
    
    //Method Verify
    if (req.method === "GET") {

        //Auth Header Verify
        if (!req.headers.authorization) {
            res.status(400).json({ error: "not login" });
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

        //Veify if there is apps initialized of firebase admin
        if(!admin.apps.length){
            admin.initializeApp(firebaseConfig);
        }else{
            admin.app();
        }

        //Veify if there is apps initialized of firebase
        if(!firebase.apps.length){
            firebase.initializeApp(firebaseConfig);
        }else{
            firebase.app();
        }

        admin.auth().verifyIdToken(req.headers.authorization)
            .then(async (user) => {

                //Search the nickname
                const data = await db().collection("users").where("user","==",user.uid).get()
                let nickname;
                data.forEach(v => {nickname = v.data().nickname})

                //Request successfull
                res.status(200).json({
                    uid: user.uid,
                    email: user.email,
                    nickname
                })
            })
            .catch(error => {

                //Request failed
                res.status(200).json({error})
            })
    }
}
