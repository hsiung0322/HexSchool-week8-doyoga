AOS.init();

$(function() {
  console.log('Hello Bootstrap5');
  $('.reservation-choose .stretched-link').click(function(){
    //aria-expanded
    let isExpanded = $(this).attr('aria-expanded');
    console.log(isExpanded);

    if(isExpanded === 'true'){ //展開
      $('.reservation-choose').removeClass('mb-12');
      $('.choose').removeClass('d-none');
      //border-4 border-info
      $('.reservation-choose .card').removeClass('border-4').removeClass('border-info').hide();
      $('.reservation-choose .stretched-link').addClass('disabled');
      $(this).parent().parent().addClass('border-4').addClass('border-info').show();
      $(this).removeClass('disabled');
    }else{
      $('.reservation-choose').addClass('mb-12');
      $('.choose').addClass('d-none');
      $('.reservation-choose .stretched-link').removeClass('disabled');
      $('.reservation-choose .card').removeClass('border-4').removeClass('border-info').show();
    }
    
  });

  //collapse-plan
  $('.mySwiper-plan .card').click(function(){
    //remove all active
    $('.card').removeClass('border-4').removeClass('border-white');
    $('.check').removeClass('text-white');

    $(this).addClass('border-4').addClass('border-white');
    $('.check', this).addClass('text-white');
  });

  //orderDone info
  $('.accordion .card-header').click(function(){
    let isExpanded = $(this).attr('aria-expanded');
    console.log('sss',isExpanded);
    if(isExpanded === 'true'){ //展開
      $('.info-open').css("transform", "scaleY(-1)");
      $('.info-open').css("transition-duration", ".5s");
    }else{
      $('.info-open').css("transform", "");
    }
  });

});

var swiper = new Swiper(".mySwiper", {
  slidesPerView: 2,
  grid: {
    rows: 2,
    fill: 'row',
  },
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 992 lg
    992: {
      slidesPerView: 1.5,
      spaceBetween: 30,
      grid: {
        rows: 1,
        fill: 'row',
      },
    }
  }
});

// 聽聽他們怎麼說
var swiper = new Swiper(".mySwiper-comment", {
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'row',
  },
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 768 md
    768: {
      slidesPerView: 2,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    // when window width is >= 992 lg
    992: {
      slidesPerView: 2.5,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    },
    // when window width is >= 1200 xl
    1200: {
      slidesPerView: 3,
      spaceBetween: 30,
      grid: {
        rows: 2,
        fill: 'row',
      },
    }
  },
  navigation: {
    nextEl: ".swiper-button-next",
    prevEl: ".swiper-button-prev",
  },
});

var swiper2 = new Swiper(".mySwiper-plan", {
  // Default parameters
  slidesPerView: 1,
  grid: {
    rows: 3,
    fill: 'row',
  },
  spaceBetween: 30,
  breakpoints: {
    // when window width is >= 768 md
    768: {
      slidesPerView: 2,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 30,
    },
    // when window width is >= 1200px xl
    1200: {
      slidesPerView: 3,
      grid: {
        rows: 1,
        fill: 'row',
      },
      spaceBetween: 30,
    }
  }
});

var swiper3 = new Swiper(".mySwiper-teacher", {
  // Default parameters
  slidesPerView: 1,
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 576px sm
    576: {
      slidesPerView: 1.5,
      spaceBetween: 30
    },
    // when window width is >= 768px md
    768: {
      slidesPerView: 2,
      spaceBetween: 30
    },
    // when window width is >= 992px lg
    992: {
      slidesPerView: 2.5,
      spaceBetween: 30
    },
    // when window width is >= 1200px xl
    1200: {
      slidesPerView: 3,
      spaceBetween: 30
    }
  }
});

var swiper4 = new Swiper(".mySwiper-classes", {
  // Default parameters
  slidesPerView: 1.25,
  spaceBetween: 30,
  grabCursor: true,
  breakpoints: {
    // when window width is >= 576px sm
    576: {
      slidesPerView: 2.25,
      spaceBetween: 30
    },
    // when window width is >= 768px md
    768: {
      slidesPerView: 3,
      spaceBetween: 30
    },
    // when window width is >= 992px lg
    992: {
      slidesPerView: 4.25,
      spaceBetween: 30
    },
    // when window width is >= 1200px xl
    1200: {
      slidesPerView: 5,
      spaceBetween: 30
    }
  }
});