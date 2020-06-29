import firebase from 'firebase/app';
import 'firebase/firestore';
import 'firebase/auth';
// Set the configuration for your app
  // TODO: Replace with your project's config object
const config = {
    apiKey: "AIzaSyAhzjA3clyQ8r1Iuace1eGaPlFJ80BlG04",
    authDomain: "crwn-db-7177a.firebaseapp.com",
    databaseURL: "https://crwn-db-7177a.firebaseio.com",
    projectId: "crwn-db-7177a",
    storageBucket: "crwn-db-7177a.appspot.com",
    messagingSenderId: "366205276263",
    appId: "1:366205276263:web:9b8d35a189b511044f44c2",
    measurementId: "G-4SPNWZJ3B5"
};
//  the queryReference object does not have the actual data of the collection or document.
// it instead has prooperties that tell us details about it,or the method to get the Snapshot object 
// which gives us the data we are looking for
export const createUserProfileDocument = async (userAuth,additionalData) => {
    // if （！userAuth） is true, means userAuth is false
   if(!userAuth) return;
// get queryRefrence
   const userRef = firestore.doc(`user/${userAuth.uid}`)

//     to see if there is data about useRef
// get documentSnapshot object from userRef.get() 
   const snapShot = await userRef.get()
// 如果database 里面没有相关记录， 就把signin 的相关信息存到database里面
// snapShot.exists to check if a document exists at this query
   if(!snapShot.exists){
       const {displayName, email} = userAuth;
        console.log("111")
       const createAt = new Date();
// userRef.set() perform create methods
       try{
            await userRef.set({
                displayName,
                email,
                createAt,
                ...additionalData
            })
       } catch(err){
                console.log('error creating user',err.message)
       }

   }
   return userRef

}
// initialize firebase
firebase.initializeApp(config);

export const auth = firebase.auth();
export const firestore = firebase.firestore();
// 创建google provider对象实例
const provider = new firebase.auth.GoogleAuthProvider();
// 
provider.setCustomParameters({prompt:'select_account'});
// signInWithProps 表明使用弹出式窗口登录
export const signInWithGoogle = () => auth.signInWithPopup(provider);

export default firebase;
