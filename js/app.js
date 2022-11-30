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
//Llamo a todos los usuarios
async function getUsers() {
  const usersCol = collection(db, 'Usuarios');
  const usersSnapshot = await getDocs(usersCol);
  const usersList = usersSnapshot.docs.map(doc => doc.data());
  return usersList
}
//Llamo un usuario en especifico, recibe por parametro (información que le tengo que pasar a la funcion para que funcione) en este caso el parametro es  email
//esta funcion se usa en el login (busca la información para saber si es admin o no) y tambien se usa en el carrito (para saber a que usuario se le van agregar esos productos)

async function getSpecificUser(email) {
  let userInfo; // declaramos las variables con let (solo funciona en este bloque de codigo, son temporanles)
  let userID; 
  const q = query(collection(db, "Usuarios"), where("nombre", "==", email)); // planteo la informacion que quiero traer (la info de usuarios y que haga match el user con la base de datos)//el where es un filtro que me indica que si el nombre que se escribio en el gmmail es igual al que esta registrado en firestor entonces s
  const querySnapshot = await getDocs(q); // me trae esa informacion
  querySnapshot.forEach(async (doc) => {
  // doc.data() is never undefined for query doc snapshots
  userID = doc.id
  userInfo = (doc.id, " => ", doc.data())
  });
  return {userID, userInfo} 
}


async function getSpecificProduct(ids) { // la funcon que recibe por parametro ids que es el id del producto que quiero bscar. Esto se usa para la pagina de detalles
  let info;
  let id // id del documento en firestore
  const q = query(collection(db, "Productos"), where("id", "==", ids)); // cuando haga match el id con el id que recibi por parametro ( es decir ids)criterio
  const querySnapshot = await getDocs(q); //accion - que busque
  querySnapshot.forEach(async (doc) => { // aqui cuando llega la info pasa que... qu
    // doc.data() is never undefined for query doc snapshots
    id = doc.id
    info = (doc.id, " => ", doc.data())
  });
  return  {id, info}
}

async function getProducts() { //esto se usa cuando quiero traer la info de los porductos ( se usa en la parte de tops.html para renderizar)
  
  const productsCol = collection(db, 'Productos'); //criterio
  const productsSnapshot = await getDocs(productsCol); //busca la info
  const productsList = productsSnapshot.docs.map(doc => doc.data()); // llega la info (sucede)
  return await productsList
}

async function createUser(email, admin) {
  console.log('crear usuario: '+email, admin); // admin es booleano que determina si la persona es admin o nel
  try {
    const docRef = await addDoc(collection(db, "Usuarios"), {
      nombre: email,
      admin: admin,
      cart: []
    });
    alert("Usuario creado exitosamente ");
  } catch (e) {
    alert("Error:", e);
  }
}

async function createProducts(producto) {
  try {
    const docRef = await addDoc(collection(db, "Productos"), producto);
    alert("Producto creado con el ID: ", docRef.id.toString());
  } catch (e) {
    alert("Error: \n", e);
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
  createUserWithEmailAndPassword(auth, email, password) // le estamos diciendo a firebase que cree un usuario con esos datos (email, paswword))
  .then(() => {
    alert('usuario registrado con exito');

    
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