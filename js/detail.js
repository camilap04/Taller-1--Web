import { doc, getSpecificProduct, db, onAuthStateChanged, auth, getSpecificUser, arrayUnion, updateDoc } from "./app.js";
import { handleShowCartProducts } from "./auth.js";

var productID = parseInt(window.location.href.split('#')[1])

var { info } = await getSpecificProduct(productID);

const page = document.querySelector('.productDetail')


//Crea los detalles del producto, usa el ID que se pasa en la url
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

    // agregar objeto al carro cuando la persona este logeada

    //Verificar si el usuario esta logeado
var userID2;
var userInfo2
onAuthStateChanged(auth, async (user) => {
    var {userID, userInfo} = await getSpecificUser(user.email) 
        userID2 = userID
        userInfo2 = userInfo
  });

  //Al clickear el boton de a;adir al carrito se a;ade a firebase
const cartBtn = document.querySelector('.cartBtn')
cartBtn.addEventListener('click', async ()=>{
    const userRef = doc(db, 'Usuarios', userID2);
    await updateDoc(userRef, {
        cart: arrayUnion(productID)
    });
    alert('el producto se ha agregado correctamente')
    handleShowCartProducts(userInfo2.nombre)
}
)