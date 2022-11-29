import { logOut, loginUser, registerUser, onAuthStateChanged, auth, createUser, getSpecificUser, getSpecificProduct, arrayRemove, updateDoc, doc, db } from "./app.js";

//LoginInputs
const loginBtn = document.querySelector('.loginBtn');
const loginPassword = document.querySelector('.loginPassword');
const loginEmail = document.querySelector('.loginEmail');

//RegisterInputs
const registerBtn = document.querySelector('.registerBtn');
const registerPassword = document.querySelector('.registerPassword');
const registerEmail = document.querySelector('.registerEmail');

const logOutBtn = document.querySelector('.aboutUsBtn')
const addProduct = document.querySelector('.add-product')
const registerAdmin = document.querySelector('.registerAdmin')
const shoppingCart = document.querySelector('.shoppingCart')

loginBtn.addEventListener('click', ()=>{
    loginUser(loginEmail.value, loginPassword.value)
    loadUserInfo()
    document.querySelector(".logIn-modal-container").classList.toggle("invisible")
})

registerBtn.addEventListener('click', ()=>{
    createUser(registerEmail.value, registerAdmin.checked)
    registerUser(registerEmail.value, registerPassword.value)
    loadUserInfo()
    document.querySelector(".register-modal-container").classList.toggle("invisible")
})

function loadUserInfo() {
    onAuthStateChanged(auth, async (user) => {
        if (user) {
            console.log('usuario logeado: ',user.email);
            var {userInfo} = await getSpecificUser(user.email)
            if (userInfo.admin) {
                console.log(userInfo.admin);
                addProduct.classList.remove('invisible')
            }
            document.querySelector('.logIn').classList.add('invisible')
            document.querySelector('.register').classList.add('invisible')
            document.querySelector('.userName').classList.remove('invisible')
            document.querySelector('.userName').innerHTML = user.email
            logOutBtn.classList.remove('invisible')
            shoppingCart.classList.remove('invisible') 
            handleShowCartProducts(user.email)
        } else {
            document.querySelector('.logIn').classList.remove('invisible')
            document.querySelector('.register').classList.remove('invisible')
            document.querySelector('.userName').classList.add('invisible')
            addProduct.classList.add('invisible')
            shoppingCart.classList.add('invisible')
            logOutBtn.classList.add('invisible')
            console.log('no hay usuario logeado');
        }
      });
      
}
loadUserInfo()

  const bag = document.querySelector('.bagItems')


var userID2;

async function handleShowCartProducts(email){
    var { userID, userInfo } = await getSpecificUser(email) 
    let total = 0;
    userID2 = userID
    bag.innerHTML = ``
    for (let index = 0; index < userInfo.cart.length; index++) {
        let {info} = await getSpecificProduct(userInfo.cart[index])
        const cartCard = document.createElement ('div')
        cartCard.classList.add('cartCard')
        cartCard.innerHTML = `
        <img class="cartImg" src="${info.imgUrl}" >
        <div class="cartInfo">
            <h1 class="">${info.name}</h1>
            <span>${info.price}</span> 
            <div><img class="trashIcon" id="${info.id}" src="../imagenes/trashIcon.png" ></div>
        </div>`
        bag.append(cartCard)
        total += parseInt(info.price);
    }
    document.querySelector('.total__total').innerHTML = total

    for (let index = 0; index < document.querySelectorAll('.trashIcon').length ; index++) {
        document.querySelectorAll('.trashIcon')[index].addEventListener('click',async (e)=>{
            console.log(e.target.id);
            const userRef = doc(db, 'Usuarios', userID2);
            await updateDoc(userRef, {
                cart: arrayRemove(parseInt(e.target.id))
            });
            handleShowCartProducts(userInfo.nombre)
            console.log('eliminado');
        })    
    }
}


logOutBtn.addEventListener('click', ()=>{
    logOut()
})

export {
    handleShowCartProducts
}