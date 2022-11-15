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



