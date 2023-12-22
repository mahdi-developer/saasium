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
    breakpoints: {
      1199: {
        perPage: 4,
        gap   : '1.5rem',
      },
      991: {
        perPage: 3,
        gap   : '1.5rem',
      },
      767: {
        perPage: 2,
        gap   : '2rem',
      },
      586: {
        perPage: 2,
        gap   : '2rem',
      },
      400: {
        perPage: 2,
        gap   : '1rem',
      },
    }
  });

  splide.mount();


  var splide1 = new Splide("#testimonial", {
    type: "loop",
    perPage: 3,
    perMove: 1,
    gap   :  '40px',
    pagination: true,
    breakpoints: {
      1350: {
        gap   :  '20px',
  
      },
      776: {
        perPage: 2,
        gap   :  '15px',
      },
      586: {
        perPage: 1,
        gap   :  '10px',
      }
    },
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