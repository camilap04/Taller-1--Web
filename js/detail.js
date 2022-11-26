import { doc, getSpecificProduct, setDoc, db, onAuthStateChanged, auth, getSpecificUser, arrayRemove, arrayUnion, updateDoc } from "./app.js";

var productID = parseInt(window.location.href.split('#')[1])

var { info } = await getSpecificProduct(productID);


const page = document.querySelector('.productDetail')

page.innerHTML = ``
const card = document.createElement ('section')
card.classList.add('details-wereke')
card.innerHTML = `
<img class="wereke-top" src="${info.imgUrl}" >
<div class="wereke-details">
    <h1 class="wereke-title">${info.name}</h1>
    <span>Price: $ ${info.price}</span> 
    <h4>Product details:</h4>
    <p>${info.description}</p>
    <div class="waves-effect waves-light btn cartBtn">Agregar carrito</div>
</div>`

page.append(card)

var userID2;
onAuthStateChanged(auth, async (user) => {
    var {userID} = await getSpecificUser(user.email) 
        userID2 = userID
  });

const cartBtn = document.querySelector('.cartBtn')
cartBtn.addEventListener('click', async ()=>{
    console.log(userID2);
    const userRef = doc(db, 'Usuarios', userID2);
    await updateDoc(userRef, {
        cart: arrayUnion(productID)
    });
})