import {getProducts} from './app.js'

const productsSection = document.querySelector('.productsContainer')
var products = await getProducts()

//filtros:

const drop = document.querySelector('.dropDown2');
const dropBtn = document.querySelector('.dropDown2Btn');
const filterOptions = ['Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, Low to high', 'Price, High to low']
var showFilters = false;
var filteredProducts = []
var filter = ''
const productsContainer = document.querySelector('.productsContainer')

dropBtn.addEventListener('click', () =>{
    showFilters = !showFilters
    showFilters ? 
    filterOptions.forEach(elem => {
        drop.innerHTML += `<div class='filterOpt'>${elem}</div>`
    }) : drop.innerHTML = ``;
    handleSetFilter()
})

const handleSetFilter = () => {
    const allOptions = document.querySelectorAll('.filterOpt');
    for (let index = 0; index < allOptions.length; index++) {
        allOptions[index].addEventListener('click', () => {
            filter = allOptions[index].innerHTML;
            handleSetItemsFiltered()
        })
    }
}

const handleSetItemsFiltered = () => {
    switch (filter) {
        case 'Alphabetically, A-Z':
            filteredProducts = products.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })
            break;
        case 'Alphabetically, Z-A':
            filteredProducts = products.sort(function(a, b){
                if(a.name < b.name) { return 1; }
                if(a.name > b.name) { return -1; }
                return 0;
            })
            break;
        case 'Price, Low to high':
            filteredProducts = products.sort(function(a, b){
                if(a.price < b.price) { return -1; }
                if(a.price > b.price) { return 1; }
                return 0;
            })
        break;
        case 'Price, High to low':
            filteredProducts = products.sort(function(a, b){
                if(a.price < b.price) { return 1; }
                if(a.price > b.price) { return -1; }
                return 0;
            })
        break;
    }
    handleShowProducts(filteredProducts)
}

const handleShowProducts = (filteredProducts) =>{
    productsContainer.innerHTML = ``
    for (let index = 0; index < filteredProducts.length; index++) {        
        const card = document.createElement ('article')
        card.classList.add('card')
        card.innerHTML = `<div class="card-image">
        <img class="card-inner-image" src=${filteredProducts[index].imgUrl}>
       
      </div>
      <div class="card-content">
        <span class="card-title"> ${filteredProducts[index].name}</span>
        <p>El precio de este producto es: ${filteredProducts[index].price}</p>
      </div>
      <div class="card-action">
        <a href="#">This is a link</a>
      </div>`

      productsSection.append(card)
    }
}
handleShowProducts(products);