// /**
//  * @Script js for (Template/Project Name)
//  *
//  * @project     - SaaSium
//  * @author      - 
//  * @created_by  - Mahdi
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
    breakpoints: {
      1200: {
        slidesPerView: 6,
        spaceBetween: 20,
      },
      992: {
        slidesPerView: 5,
        spaceBetween: 20,
      },
      500: {
        slidesPerView: 4,
        spaceBetween: 15,
      },
      350: {
        slidesPerView: 3,
        spaceBetween: 12,
      },
      
    }
  });


  // Splide Tools Slider
document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll(".tools");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      perPage: 5,
      perMove: 1,
      gap: "2rem",
      pagination: true,
      breakpoints: {
        1199: {
          perPage: 4,
          gap: "1.5rem",
        },
        991: {
          perPage: 3,
          gap: "1.5rem",
        },
        767: {
          perPage: 2,
          gap: "2rem",
        },
        586: {
          perPage: 3,
          gap: "1rem",
        },
        400: {
          autoWidth: true,
          perPage: 2,
          gap: "12px",
        },
      },
    });

    splide.mount();
  });
});

// Splide Testimonial Slider
document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll(".testimonial");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      perPage: 3,
      perMove: 1,
      gap: "40px",
      pagination: true,
      breakpoints: {
        1350: {
          gap: "20px",
        },
        991: {
          perPage: 2,
          gap: "15px",
        },
        586: {
          perPage: 1,
          gap: "10px",
        },
      },
    });

    splide.mount();
  });
});

// Splide Blog Slider
document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll(".blog-slider");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      perPage: 3,
      perMove: 1,
      gap: "40px",
      pagination: true,
      breakpoints: {
        1350: {
          gap: "20px",
        },
        991: {
          perPage: 2,
          gap: "15px",
        },
        586: {
          perPage: 1,
          gap: "10px",
        },
      },
    });

    splide.mount();
  });
});

  $(window).scroll(function() {
    if ($(this).scrollTop() > 50 ) {
        $('.scrolltop:hidden').stop(true, true).fadeIn();
    } else {
        $('.scrolltop').stop(true, true).fadeOut();
    }
});
$(function(){$(".scroll").click(function(){$("html,body").animate({scrollTop:$(".top").offset().top},"1000");return false})})

