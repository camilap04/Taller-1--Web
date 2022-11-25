 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getFirestore , collection, getDocs, addDoc} from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'
 // TODO: Add SDKs for Firebase products that you want to use
 // https://firebase.google.com/docs/web/setup#available-libraries
 
 // Your web app's Firebase configuration
 const firebaseConfig = {
   apiKey: "AIzaSyA2Y0nrLYTDV0NvOY7I871RpVu4-R9TZ30",
   authDomain: "f-sunset-the-journey.firebaseapp.com",
   projectId: "f-sunset-the-journey",
   storageBucket: "f-sunset-the-journey.appspot.com",
   messagingSenderId: "924032395057",
   appId: "1:924032395057:web:e5b2c9eda5994b34e03210",
   databaseURL: "https://f-sunset-the-journey-default-rtdb.firebaseio.com"
 };


 // Initialize Firebase
 const app = initializeApp(firebaseConfig);
const db = getFirestore(app);

async function getUsers() {
  const usersCol = collection(db, 'Usuarios');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList
}

async function getProducts() {
    const productsCol = collection(db, 'Productos');
  const productsSnapshot = await getDocs(productsCol);
  const productsList = productsSnapshot.docs.map(doc => doc.data());
  return await productsList
  
}

async function createUser(nombre) {
  try {
    const docRef = await addDoc(collection(db, "Usuarios"), {
      nombre: nombre
    });
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}
async function createProducts(producto) {
  try {
    const docRef = await addDoc(collection(db, "Productos"), producto);
    console.log("Document written with ID: ", docRef.id);
  } catch (e) {
    console.error("Error adding document: ", e);
  }
}


getProducts();
getUsers()

//ejemplo de crear usuarios y productos 

//createUser('Camila'); 
/* createProducts(
  {
      id: 1,
      imgUrl: "https://cdn.shopify.com/s/files/1/0624/7081/5965/products/DSC04180_a05a334f-0973-433d-be70-1c192e67bc78_720x.jpg?v=1657168486" ,
      name : "WAKERE TOP" ,
      price : "130.000",
      description: "Top wayu tejido a mano" ,
      type: ["Top"],
      collection: "The joy of happy accidents"
  }
) */

export {
  db,
  app,
  getProducts,
  getUsers,
  createUser,
  createProducts
}