import firebase from "firebase";

const db = () => firebase.firestore()

//Register Function
const register = async (email,password,repeat_password,nickname,handler) => {

    //Verify the values
    if(email === "" || password === "" || nickname === ""){
        handler("Put all values",null)
    }

    //Verify the passwords
    if(password !== repeat_password){
        handler("the passwords are not identical",null);
        return false;
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

    if(exist.length != 0){
        handler("This nickname exist",null);
    }

    firebase.auth().createUserWithEmailAndPassword(email,password)
        .then(async (user) => {
            const nick = await db().collection("users").add({
                user: user.user.uid,
                nickname
            })

            handler(null,{user , nick});
        })
        .catch(error => {
            handler(error,null);
        })
}

export default register;