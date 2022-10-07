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
    $("#img1").attr('src', 'https://images.unsplash.com/photo-1653398597887-5005619e8cdc?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774');
}

function offHover()
{
    $("#img1").attr('src', './imagenes/hover1.png');
}


function onHover2()
{
    $("#img2").attr('src', 'https://images.unsplash.com/photo-1653398597887-5005619e8cdc?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774');
}

function offHover2()
{
    $("#img2").attr('src', './imagenes/hover2.png');
    
}


function onHover3()
{
    $("#img3").attr('src', 'https://images.unsplash.com/photo-1653398597887-5005619e8cdc?ixlib=rb-1.2.1&raw_url=true&q=80&fm=jpg&crop=entropy&cs=tinysrgb&ixid=MnwxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8&auto=format&fit=crop&w=774');
}

function offHover3()
{
    $("#img3").attr('src', './imagenes/hover3.png');
}

let timer = setTimeout(function(hover1) {
	console.log('Hello world!');
}, 1000);