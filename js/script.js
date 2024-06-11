$(function() {
  $(".menu_btn").click(function() {
    $(this).toggleClass('open');
  });

  const testimonialSwiper = new Swiper(".testimonial_slider", {
    slidesPerView: 1,
    spaceBetween: 30,
    loop: true,
    pagination: {
      el: '.swiper-pagination',
      clickable: true,
    },
    breakpoints: {

      640: {
        slidesPerView: 1,
      },
      768: {
        slidesPerView: 2,
      },
      1024: {
        slidesPerView: 3,
      },
    },
  });

});