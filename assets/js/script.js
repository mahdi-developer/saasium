// /**
//  * @Script js for (Template/Project Name)
//  *
//  * @project     - Project Name
//  * @author      - 
//  * @created_by  - Asraful Hoque
//  * @created_at  - 
//  * @modified_by -
//  */

// Swiper Slider
  let swiper1 = new Swiper(".swiper1", {
    slidesPerView: 6,
    spaceBetween: 30,
    loop: true,
    autoplay: {
      delay: 2500,
      disableOnInteraction: false,
    },
    pagination: {
      el: ".swiper-pagination",
      clickable: true,
    },
  });


  // Splide Slider
  let splide = new Splide(".splide", {
    type: "loop",
    perPage: 5,
    perMove: 1,
    gap   : '2rem',
    pagination: true,
  });

  splide.mount();


  var splide1 = new Splide("#testimonial", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap   : '2rem',
    pagination: true,
  });

  splide1.mount();

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".top").offset().top},"1000");return false})})