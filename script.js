var swiper = new Swiper(".mySwiper", {
    effect: "coverflow",
    grabCursor: true,
    centeredSlides: true,
    slidesPerView: "auto",
    coverflowEffect: {
      rotate: 50,
      stretch: 0,
      depth: 100,
      modifier: 1,
      slideShadows: true,
    },
    pagination: {
      el: ".swiper-pagination",
    },
  });


  function onHover() 
{
    $("#img1").attr('src', './imagenes/kaitop-hover.png');
}

function offHover()
{
    $("#img1").attr('src', './imagenes/hover1.png');
}


function onHover2()
{
    $("#img2").attr('src', './imagenes/jasaityop-hover.png');
}

function offHover2()
{
    $("#img2").attr('src', './imagenes/jasaitop.png');
    
}

function onHover3()
{
    $("#img3").attr('src', './imagenes/wereketop-hover (1).png');
}

function offHover3()
{
    $("#img3").attr('src', './imagenes/wereketop.png');
}

// Mostrar y ocultar modales

const addproduct = document.querySelector(".add-product");
const modalBackground = document.querySelector(".add-product-modal-background");
const modalcontainer = document.querySelector(".add-product-modal-container");
modalBackground.addEventListener("click", () =>{
    modalcontainer.classList.toggle("invisible");
})
addproduct.addEventListener("click",()=>{ 
    modalcontainer.classList.toggle("invisible")   
})


const bag = document.querySelector(".bag");
const bagBackground = document.querySelector(".bag-modal-background");
const bagcontainer = document.querySelector(".bag-modal-container");
bagBackground.addEventListener("click", () =>{

    bagcontainer.classList.toggle("invisible");

})
bag.addEventListener("click",()=>{ 
    bagcontainer.classList.toggle("invisible")   
})


const login = document.querySelector(".logIn");
const loginBackground = document.querySelector(".logIn-modal-background");
const loginContainer = document.querySelector(".logIn-modal-container");
loginBackground.addEventListener("click", () =>{
    loginContainer.classList.toggle("invisible");
})
login.addEventListener("click",()=>{ 
    loginContainer.classList.toggle("invisible")   
})

const register = document.querySelector(".register");
const registerBackground = document.querySelector(".register-modal-background");
const registerContainer = document.querySelector(".register-modal-container");
registerBackground.addEventListener("click", () =>{
    registerContainer.classList.toggle("invisible");
})
register.addEventListener("click",()=>{ 
    registerContainer.classList.toggle("invisible")   
})


