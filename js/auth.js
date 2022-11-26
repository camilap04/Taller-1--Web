import { logOut, loginUser, registerUser, getAuth, getProducts, onAuthStateChanged, auth, createUser, getSpecificUser } from "./app.js";

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
const registerAdmin = document.querySelector('.registerAdmin')
const shoppingCart = document.querySelector('.shoppingCart')

loginBtn.addEventListener('click', ()=>{
    loginUser(loginEmail.value, loginPassword.value)
})

registerBtn.addEventListener('click', ()=>{
    registerUser(registerEmail.value, registerPassword.value)
    createUser(registerEmail.value, registerAdmin.checked)
})

onAuthStateChanged(auth, async (user) => {
    let info
    if (user) {
        console.log('usuario existe',user.email);
        info = await getSpecificUser(user.email) 
        if (info.admin) {
            addProduct.classList.remove('invisible')
        }
        shoppingCart.classList.remove('invisible')            
    } else {
        addProduct.classList.add('invisible')
        shoppingCart.classList.add('invisible')
        console.log('no hay usuario logeado');
    }
  });

aboutUsBtn.addEventListener('click', ()=>{
    logOut()
})