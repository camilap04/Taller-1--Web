 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries

 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyA2Y0nrLYTDV0NvOY7I871RpVu4-R9TZ30",
   authDomain: "f-sunset-the-journey.firebaseapp.com",
   projectId: "f-sunset-the-journey",
   storageBucket: "f-sunset-the-journey.appspot.com",
   messagingSenderId: "924032395057",
   appId: "1:924032395057:web:e5b2c9eda5994b34e03210"
 };

 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
 const auth = getAuth();
const db = getFirestore(app);
const storage = getStorage(app);


export {
  app,
  auth,
  db,
  storage
}