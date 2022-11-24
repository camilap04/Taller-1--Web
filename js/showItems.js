import {getProducts} from './app.js'

const productsSection = document.getElementById('products-container')

async function displayProducts(){
    var products = await getProducts()
    console.log(products);    

    products.forEach(product => {
        const card = document.createElement ('article')
        card.classList.add('card')
        card.innerHTML = `<div class="card-image">
        <img class="card-inner-image" src=${product.imgUrl}>
       
      </div>
      <div class="card-content">
        <span class="card-title"> ${product.name}</span>
        <p>El precio de este producto es: ${product.price}</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>`


      prodcustSection.append(card)
    });
}

displayProducts();