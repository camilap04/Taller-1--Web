import { logOut, loginUser, registerUser, getAuth, getProducts, onAuthStateChanged, auth } from "./app.js";

//LoginInputs
const loginBtn = document.querySelector('.loginBtn');
const loginPassword = document.querySelector('.loginPassword');
const loginEmail = document.querySelector('.loginEmail');

//RegisterInputs
const registerBtn = document.querySelector('.registerBtn');
const registerPassword = document.querySelector('.registerPassword');
const registerEmail = document.querySelector('.registerEmail');

const aboutUsBtn = document.querySelector('.aboutUsBtn')
const addProduct = document.querySelector('.add-product')


loginBtn.addEventListener('click', ()=>{
    loginUser(loginEmail.value, loginPassword.value)
})

registerBtn.addEventListener('click', ()=>{
    registerUser(registerEmail.value, registerPassword.value)
})

onAuthStateChanged(auth, (user) => {
    if (user) {
        console.log('user existe')
        addProduct.classList.remove('invisible')
    } else {
        addProduct.classList.add('invisible')
        console.log('user no existe');
    }
  });

//opcion para producto




aboutUsBtn.addEventListener('click', ()=>{
    console.log('logotu');
    logOut()
})
//console.log(await getCurrentUser()); 