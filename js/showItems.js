import {getProducts} from './app.js'
var products = await getProducts()

//filtros:

const drop = document.querySelector('.dropDown2');
const dropBtn = document.querySelector('.dropDown2Btn');
const filterOptions = ['Alphabetically, A-Z', 'Alphabetically, Z-A', 'Price, Low to high', 'Price, High to low']
var showFilters = false;
var filter = ''
const productsContainer = document.querySelector('.productsContainer')
const inputValue = document.querySelector('.inputValue')

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
            if (inputValue == '') {
                handleSetItemsFiltered(products)
            } else {
                handleSetItemsFiltered(handleSetSearchProducts(inputValue.value)); 
            }
        })
    }
}

const handleSetItemsFiltered = (items) => {
    let filteredProducts;
    switch (filter) {
        case 'Alphabetically, A-Z':
            filteredProducts = items.sort(function(a, b){
                if(a.name < b.name) { return -1; }
                if(a.name > b.name) { return 1; }
                return 0;
            })
            break;
        case 'Alphabetically, Z-A':
            filteredProducts = items.sort(function(a, b){
                if(a.name < b.name) { return 1; }
                if(a.name > b.name) { return -1; }
                return 0;
            })
            break;
        case 'Price, Low to high':
            filteredProducts = items.sort(function(a, b){
                if(a.price < b.price) { return -1; }
                if(a.price > b.price) { return 1; }
                return 0;
            })
        break;
        case 'Price, High to low':
            filteredProducts = items.sort(function(a, b){
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
        const card = document.createElement ('a')
        card.classList.add('card')
        card.setAttribute('href', `./details.html#${filteredProducts[index].id}`)
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

      productsContainer.append(card)
    }
}
handleShowProducts(products);

const handleSetSearchProducts = (value) =>{
    console.log(value);
    let searchProducts = []
    for (let index = 0; index < products.length; index++) {
        if (products[index].name.toLowerCase().includes(value)) {
            products[index].name.includes(value)    
            searchProducts.push(products[index])
        }
    }
    handleShowProducts(searchProducts)
    return searchProducts
}

inputValue.addEventListener('input', (e)=>{
    handleSetSearchProducts(e.target.value)
})