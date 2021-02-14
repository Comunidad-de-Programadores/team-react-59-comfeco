import admin from "firebase-admin";

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

        //Veify if there is apps initialized of firebase
        if(!admin.apps.length){
            admin.initializeApp(firebaseConfig);
        }else{
            admin.app();
        }

        admin.auth().verifyIdToken(req.headers.authorization)
            .then(user => {
                res.status(200).json({user})
            })
            .catch(error => {
                res.status(200).json({error})
            })
    }
}
