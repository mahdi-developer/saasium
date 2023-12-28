// // /**
// //  * @Script js for (Template/Project Name)
// //  *
// //  * @project     - Project Name
// //  * @author      -
// //  * @created_by  - Asraful Hoque
// //  * @created_at  -
// //  * @modified_by -
// //  */

// // tools Slider
// let tools = new Splide(".tools", {
//     type: "loop",
//     perPage: 5,
//     perMove: 1,
//     gap: "2rem",
//     pagination: true,
//     breakpoints: {
//         1199: {
//             perPage: 4,
//             gap: "1.5rem",
//         },
//         991: {
//             perPage: 3,
//             gap: "1.5rem",
//         },
//         767: {
//             perPage: 2,
//             gap: "2rem",
//         },
//         586: {
//             perPage: 3,
//             gap: "1rem",
//         },
//         400: {
//             autoWidth: true,
//             perPage: 2,
//             gap: "12px",
//         },
//     },
// });

// tools.mount();

// // testimonial Slider
// let testimonial = new Splide(".testimonial", {
//     type: "loop",
//     perPage: 3,
//     perMove: 1,
//     gap: "2rem",
//     pagination: true,
//     breakpoints: {
//         1199: {
//             perPage: 4,
//             gap: "1.5rem",
//         },
//         991: {
//             perPage: 3,
//             gap: "1.5rem",
//         },
//         767: {
//             perPage: 2,
//             gap: "2rem",
//         },
//         586: {
//             perPage: 3,
//             gap: "1rem",
//         },
//         400: {
//             autoWidth: true,
//             perPage: 2,
//             gap: "12px",
//         },
//     },
// });

// testimonial.mount();

// // var splide1 = new Splide("#testimonial", {
// //   type: "loop",
// //   perPage: 3,
// //   perMove: 1,
// //   gap   :  '40px',
// //   pagination: true,
// //   breakpoints: {
// //     1350: {
// //       gap   :  '20px',

// //     },
// //     991: {
// //       perPage: 2,
// //       gap   :  '15px',
// //     },
// //     586: {
// //       perPage: 1,
// //       gap   :  '10px',
// //     }
// //   },
// // });

// // splide1.mount();

// // new Splide("#testimonial", {
// //     type: "loop",
// //     perPage: 3,
// //     perMove: 1,
// //     gap: "40px",
// //     pagination: true,
// //     breakpoints: {
// //         1350: {
// //             gap: "20px",
// //         },
// //         991: {
// //             perPage: 2,
// //             gap: "15px",
// //         },
// //         586: {
// //             perPage: 1,
// //             gap: "10px",
// //         },
// //     },
// // }).mount();

// // new Splide( '#testimonial2', {
// //   type: "loop",
// //   perPage: 3,
// //   perMove: 1,
// //   gap   :  '40px',
// //   pagination: true,

// // } ).mount();

// $(window).scroll(function () {
//     if ($(this).scrollTop() > 50) {
//         $(".scrolltop:hidden").stop(true, true).fadeIn();
//     } else {
//         $(".scrolltop").stop(true, true).fadeOut();
//     }
// });
// $(function () {
//     $(".scroll").click(function () {
//         $("html,body").animate({
//             scrollTop: $(".top").offset().top
//         }, "1000");
//         return false;
//     });
// });

// document.addEventListener('DOMContentLoaded', function () {
//     let splideElements = document.querySelectorAll('.tools');

//     splideElements.forEach(function (element) {
//         let splide = new Splide(element, {
//             type: 'loop',
//             perPage: 5,
//             perMove: 1,
//             gap: '2rem',
//             pagination: true,
//         });

//         splide.mount();
//     });
// });

document.addEventListener("DOMContentLoaded", function () {
  let splideElements = document.querySelectorAll(".testimonial");

  splideElements.forEach(function (element) {
    let splide = new Splide(element, {
      type: "loop",
      perPage: 3,
      perMove: 1,
      gap: "2rem",
      pagination: true,
    });

    splide.mount();
  });
});

