import AsyncStorage from '@react-native-async-storage/async-storage' ;   
import { initializeApp } from 'firebase/app' ;   
import { 
  initializeAuth ,
  getReactNativePersistence
} from 'firebase/auth/react-native' ; 
// https://firebase.google.com/docs/web/setup#available-libraries

// Your web app's Firebase configuration
const firebaseConfig = {
  apiKey: "AIzaSyBbcs5OrVtHHiJ7x8lQmt1jMWbogT94KnY",
  authDomain: "testereact-8b1e5.firebaseapp.com",
  projectId: "testereact-8b1e5",
  storageBucket: "testereact-8b1e5.appspot.com",
  messagingSenderId: "133124454243",
  appId: "1:133124454243:web:530344c3413f4dffaa0556"
};

// Initialize Firebase
/* let app;
if (firebase.apps.length === 0){
    app = firebase.initializeApp(firebaseConfig);
} else {
    app = firebase.app()
} */

export const app = initializeApp(firebaseConfig);

const auth = initializeAuth ( app , {  
  persistência : getReactNativePersistence ( AsyncStorage ) 
} ) ;

export { auth } ;