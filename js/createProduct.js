import { getProducts, getUsers, createUser, createProducts, db } from "./app.js"
const name = document.querySelector('.productName')
const price = document.querySelector('.productPrice')
const description = document.querySelector('.productDescription')
const imgUrl = document.querySelector('.productImgUrl')
const collection = document.querySelector('.productCollection')
const type = document.querySelector('.productCategory')

const submitBtn = document.querySelector('.products__submit')

submitBtn.addEventListener('click', (e) => {
    e.preventDefault()
    let product = {
        id: 1,
        imgUrl: "https://cdn.shopify.com/s/files/1/0624/7081/5965/products/DSC04180_a05a334f-0973-433d-be70-1c192e67bc78_720x.jpg?v=1657168486",
        name : name.value,
        price : price.value,
        description: description.value,
        type: [type.value],
        collection: "The joy of happy accidents"
    }
    createProducts(product)
})