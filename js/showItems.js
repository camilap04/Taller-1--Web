import {getProducts} from './app.js'

const productsSection = document.querySelector('.productsContainer')
var products = await getProducts()

async function displayProducts(){
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


      productsSection.append(card)
    });
}

const filters = document.querySelector('.filters');

filters.addEventListener('change',function(){
    if (filters.order.value) {
        switch (filters.order.value) {
          case 'price_asc':
            prodcusts = prodcusts.orderBy('price', 'asc');
            break;
          case 'price_desc':
            prodcusts = prodcusts.orderBy('price', 'desc');
            break;
          case 'alpha_asc':
            
            prodcusts = prodcusts.orderBy('name', 'asc');
            break;
          case 'alpha_asc':
           
            prodcusts = prodcusts.orderBy('date', 'desc');
            break;
        }
}});

displayProducts();

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
    console.log(filter);
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
    console.log(productsContainer);
    productsContainer.innerHTML = ``
    for (let index = 0; index < filteredProducts.length; index++) {        
        productsContainer.innerHTML += `
        <div class='card2'>
            <img src='${filteredProducts[index].imgUrl}'/>
            <span>${filteredProducts[index].name}</span>
            <span>${filteredProducts[index].price}</span>
        </div>`
    }
}
handleShowProducts(products);