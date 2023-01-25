const swiper = new Swiper('.swiper', {
    slidesPerView: 3,
    spaceBetween: 0,
    loop: true,
    autoplay: {
      delay: 2000,
    },
  });

  var arrow = document.querySelector(".arrow"); 
  var scrolling = 0;
  var body = document.querySelector("body")

  window.addEventListener("scroll", function() {
    scrolling =  window.scrollY;

    if(scrolling >= 300){
      arrow.classList.add("--isActive")
    }
    else {
      arrow.classList.remove("--isActive")
    }
  })



  arrow.addEventListener("click", function() {
    document.documentElement.scrollTop = 0;
  })