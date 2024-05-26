$(document).ready(function () {
  $('.has_item').hover(
    function () {
      $(this).find('.maga_menu_wrapper').stop(true, true).slideDown();
      $(this).addClass('active_item');
      $(this).find('.nav_link').addClass('active');
      $('#header_wrapper').addClass('dark_header')
    },
    function () {
      $(this).find('.maga_menu_wrapper').stop(true, true).slideUp();
      $(this).removeClass('active_item');
      $(this).find('.nav_link').removeClass('active');
      $('#header_wrapper').removeClass('dark_header')
    }
  );
});

// on scroll toggle class in headt
$(document).ready(function () {
  var $header = $('#header_wrapper');
  var scrollClass = 'dark_header';

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $header.addClass(scrollClass);
    } else {
      $header.removeClass(scrollClass);
    }
  });
});



// hero banner slider JS

const progressCircle = document.querySelector(".autoplay-progress svg");
const progressContent = document.querySelector(".autoplay-progress span");

var swiper = new Swiper(".heroSlider", {

  centeredSlides: true,
  autoplay: {
    delay: 4500,
    disableOnInteraction: false
  },
  // pagination: {
  //   el: ".swiper-pagination",
  //   clickable: true
  // },
  navigation: {
    nextEl: ".control_btn_next",
    prevEl: ".control_btn_prev"
  },

});




// hotel Slider js
var swiper = new Swiper(".hotelSlider", {

  autoplay: false, 
  navigation: {
    nextEl: ".hotel_controls_next",
    prevEl: ".hotel_controls_prev"
  },
  pagination: {
    el: ".hotel_controls_pagination",
    type: "fraction",
  },
  loop:false,
  breakpoints: {
    200: {
      slidesPerView: 1,
    },
    640: {
      slidesPerView: 2,
      spaceBetween: 15,
    },
    768: {
      slidesPerView: 3,
      spaceBetween: 20,
    },
    1024: {
      slidesPerView: 4,
      spaceBetween: 25,
    },
  },
});





// form tab js
$(document).ready(function () {
  var $tabs = $('.hotel_tab');
  var $tabContentWrappers = $('.tab_content_wrapper');
  var $formWrappers = $('.form_wrapper');

  // Function to handle click event
  function handleClick() {
    var elementId = $(this).attr('id');
    var elementTitle = $(this).attr('title');

    // Remove 'selected' class from all tabs and add to the clicked tab
    $tabs.removeClass('selected');
    $(this).addClass('selected');

    // Hide all tab content and form wrappers
    $tabContentWrappers.removeClass('active').hide();
    $formWrappers.removeClass('active').hide();

    // Show the tab content and form wrapper related to the clicked tab
    $('.' + elementTitle).addClass('active').show();
    $('.' + elementId).addClass('active').show();
  }

  // Attach click event to all tabs
  $tabs.click(handleClick);

  // Automatically select the first tab and trigger the click event
  $tabs.first().click();
});