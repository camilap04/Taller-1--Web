 // Import the functions you need from the SDKs you need
 import { initializeApp } from "https://www.gstatic.com/firebasejs/9.14.0/firebase-app.js";
 import { getFirestore , collection, getDocs, addDoc, query, where, setDoc, doc, arrayUnion, arrayRemove, updateDoc } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-firestore.js'
 import { getAuth , createUserWithEmailAndPassword, signInWithEmailAndPassword, signOut, onAuthStateChanged } from 'https://www.gstatic.com/firebasejs/9.14.0/firebase-auth.js'

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
  const auth = getAuth();
  const db = getFirestore(app);

  // Firestore

async function getUsers() {
  const usersCol = collection(db, 'Usuarios');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList
}

async function getSpecificUser(email) {
  let userInfo;
  let userID;
  const q = query(collection(db, "Usuarios"), where("nombre", "==", email));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (doc) => {
  // doc.data() is never undefined for query doc snapshots
  userID = doc.id
  userInfo = (doc.id, " => ", doc.data())
  });
  return {userID, userInfo}
}

async function getSpecificProduct(ids) {
  let info;
  let id
  const q = query(collection(db, "Productos"), where("id", "==", ids));
  const querySnapshot = await getDocs(q);
  querySnapshot.forEach(async (doc) => {
  // doc.data() is never undefined for query doc snapshots
  id = doc.id
  info = (doc.id, " => ", doc.data())
  });
  return  {id, info}
}

async function getProducts() {
    const productsCol = collection(db, 'Productos');
  const productsSnapshot = await getDocs(productsCol);
  const productsList = productsSnapshot.docs.map(doc => doc.data());
  return await productsList
}

async function createUser(nombre, admin) {
  console.log('crear usuario: '+nombre, admin);
  try {
    const docRef = await addDoc(collection(db, "Usuarios"), {
      nombre: nombre,
      admin: admin,
      cart: []
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

//ejemplo de crear usuarios y productos 

//createUser('Camila'); 
/* createProducts(
  {
      id: 1,
      imgUrl: "https://cdn.shopify.com/s/files/1/0624/7081/5965/products/DSC04180_a05a334f-0973-433d-be70-1c192e67bc78_720x.jpg?v=1657168486" ,
      name : "WAKERE TOP" ,
      price : "130.000",
      description: "Top wayu tejido a mano" ,
      collection: "The joy of happy accidents"
  }
) */

//Auth

function registerUser(email, password) {
  createUserWithEmailAndPassword(auth, email, password)
  .then(() => {
    alert('usuario registrado con exito');
    console.log('usuario registrado' + email, password);
    loginUser(email, password)
  })
  .catch((error) => {
    const errorMessage = error.message;
    console.log(errorMessage);
    alert('error al registrarse: \n'+errorMessage);
  });
}

function loginUser(email, password) {
  signInWithEmailAndPassword(auth, email, password)
    .then(() => {
      alert('usuario logeado exitosamente')
    })
    .catch((error) => {
      const errorMessage = error.message;
      alert('error al logearse: \n'+errorMessage);
    });
}

function logOut() {
  signOut(auth).then(() => {
    alert('has cerrado sesión')
  }).catch((error) => {
    alert('hubo un error al cerrar sesión')
  });
}


// console.log(auth.currentUser);

//registerUser('carlos@gmail.com', 'asd123')
//loginUser('carlos@gmail.com', 'asd123')
//logOut()

export {
  db,
  app,
  getProducts,
  getUsers,
  createUser,
  createProducts,
  registerUser,
  loginUser,
  getAuth,
  auth,
  logOut,
  onAuthStateChanged,
  getSpecificUser,
  getSpecificProduct,
  setDoc,
  doc,
  arrayRemove,
  arrayUnion,
  updateDoc
}