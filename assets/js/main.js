/***************************************************
==================== JS INDEX ======================
****************************************************
01. Preloader
03. Offcanvas Menu Control
04. Mobile Menu Activation


****************************************************/

(function ($) {
  "use strict";

  // navbar-click mobile menu
  $(".menu-item-has-children a").on("click", function () {
    var element = $(this).parent("li");
    if (element.hasClass("show")) {
        element.removeClass("show");
        element.children("ul").slideUp(500);
    }
    else {
        element.siblings("li").removeClass('show');
        element.addClass("show");
        element.siblings("li").find("ul").slideUp(500);
        element.children('ul').slideDown(500);
    }
  });

  /*
  -----------------------------------------------------
   Header Search
  -----------------------------------------------------
  */
  let header_search = document.querySelector(".search-form");
  let search_icon = document.querySelector("#search_icon");
  let search_close = document.querySelector("#search_close");
  if (header_search) {
    search_icon.addEventListener("click", function () {
      header_search.classList.add("open-search");
      search_icon.style.display = "none";
      search_close.style.display = "block";
    });

    search_close.addEventListener("click", function () {
      header_search.classList.remove("open-search");
      search_icon.style.display = "block";
      search_close.style.display = "none";
    });
  }

  /*
  -----------------------------------------------------
   ClIENT SLIDER
  -----------------------------------------------------
  */
  const clientSlider = new Swiper(".client-slider", {
    slidesPerView: 6,
    spaceBetween: 100,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 6,
        spaceBetween: 100,
      },
    },
  });
  

  /*
  -----------------------------------------------------
   ClIENT SLIDER TWO
  -----------------------------------------------------
  */
  const clientSliderTwo = new Swiper(".client-sliderTwo", {
    slidesPerView: 6,
    spaceBetween: 100,
    speed: 4000,
    loop: true, 
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      640: {
        slidesPerView: 2,
        spaceBetween: 40,
      },
      768: {
        slidesPerView: 4,
        spaceBetween: 40,
      },
      1024: {
        slidesPerView: 6,
        spaceBetween: 50,
      },
    },
  });

  /*
  -----------------------------------------------------
   TESTIMONIAL SLIDER
  -----------------------------------------------------
  */
  const testimonialSlider = new Swiper(".testimonial__slider", {
    slidesPerView: 2,
    spaceBetween: 30,
    speed: 2000,
    freeMode: true, 
    centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        lidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
    },
  });

  /*
  -----------------------------------------------------
   TESTIMONIAL SLIDER TWO
  -----------------------------------------------------
  */
  const testimonialsliderTwo = new Swiper(".testimonial__sliderTwo", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 1500,
    Centered: true,
    loop: true,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
    },
  });

  /*


  /*
  -----------------------------------------------------
   TESTIMONIAL SLIDER TWO
  -----------------------------------------------------
  */
  const course__sliderActive = new Swiper(".course__sliderActive", {
    slidesPerView: 3,
    spaceBetween: 30,
    speed: 1500,
    Centered: true,
    loop: true,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
    },
  });

  /*
  -----------------------------------------------------
   TESTIMONIAL SLIDER THREE
  -----------------------------------------------------
  */
  const testimonialFour = new Swiper(".testimonial__activeFour", {
    slidesPerView: 1,
    spaceBetween: 30,
    speed: 3000,
    loop: true,
    autoplay: {
      delay: 4000,
    },
  });

  /*
  -----------------------------------------------------
   TESTIMONIAL SLIDER THREE
  -----------------------------------------------------
  */
  const testimonialThree = new Swiper(".testimonial__activeThree", {
    slidesPerView: 2.2,
    spaceBetween: 30,
    speed: 1500,
    // centeredSlides: true,
    loop: true,
    navigation: {
      nextEl: ".testimonial-button-next",
      prevEl: ".testimonial-button-prev",
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 1,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 1.3,
        spaceBetween: 30,
        centered: true,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 2.2,
        spaceBetween: 30,
        centered: true,
      },
    },
  });

  /*
  -----------------------------------------------------
   ROLL SLIDER
  -----------------------------------------------------
  */
  const rollSlider = new Swiper(".roll-slider-active", {
    slidesPerView: 8,
    spaceBetween: 30,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      // when window width is >= 320px
      320: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      // when window width is >= 480px
      480: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1024: {
        slidesPerView: 4,
        spaceBetween: 30,
      },
      // when window width is >= 640px
      1200: {
        slidesPerView: 9,
        spaceBetween: 30,
      },
    },
  });

  rollSlider.slides.forEach((slide, index) => {
    slide.style.width = "auto";
  });


  /*
  -----------------------------------------------------
    testimonial SLIDER 5
  -----------------------------------------------------
  */
  const testimonialSliderFive = new Swiper(".testimonial-slider-5", {
    slidesPerView: 1,
    speed: 3000,
    loop: true,
    autoplay: false,
    navigation: {
      prevEl: ".testimonial-5-button-prev",
      nextEl: ".testimonial-5-button-next",
    },
  });

  /*
  -----------------------------------------------------
   ClIENT SLIDER
  -----------------------------------------------------
  */
  const clientSliderFive = new Swiper(".client-slider-five", {
    slidesPerView: 6,
    spaceBetween: 100,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      374: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      480: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      600: {
        slidesPerView:3,
        spaceBetween: 30,
      },
      992: {
        slidesPerView:4,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 5,
        spaceBetween: 100,
      },
    },
  });

  /*
  -----------------------------------------------------
    testimonial SLIDER 5
  -----------------------------------------------------
  */
  const testimonialSliderSix = new Swiper(".testimonial-slider-6", {
    slidesPerView: 1,
    speed: 2000,
    loop: true,
    autoplay: false,
    navigation: {
      prevEl: ".testimonial-6-button-prev",
      nextEl: ".testimonial-6-button-next",
    },
  });

  /*
  -----------------------------------------------------
   ClIENT SLIDER
  -----------------------------------------------------
  */
  const clientSliderSix = new Swiper(".client-slider-six", {
    slidesPerView: 4,
    spaceBetween: 100,
    speed: 4000,
    loop: true,
    autoplay: {
      delay: 1,
      disableOnInteraction: false,
    },
    // Responsive breakpoints
    breakpoints: {
      320: {
        slidesPerView: 1,
        spaceBetween: 20,
      },
      374: {
        slidesPerView: 2,
        spaceBetween: 20,
      },
      576: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      768: {
        slidesPerView: 2,
        spaceBetween: 30,
      },
      992: {
        slidesPerView: 3,
        spaceBetween: 30,
      },
      1200: {
        slidesPerView: 4,
        spaceBetween: 100,
      },
    },
  });

  /*
  -----------------------------------------------------
    blog slider 6
  -----------------------------------------------------
  */
  const blogSliderSix = new Swiper(".blog-slider-6", {
    slidesPerView: 1,
    speed: 4000,
    loop: true,
    autoplay: true,
    pagination: {
      el: ".swiper-pagination",
      type: "fraction",
    },
  });


  /*
  -----------------------------------------------------
   COURSE TAB
  ----------------------------------------------------- 
  */
  const verticleSlider = new Swiper(".verticle-slider", {
    direction: "vertical",
    slidesPerView: "auto",
    speed: 9000,
    loop: true,
    autoHeight: true,
    freeMode: false,
    autoplay: {
      delay: 0,
      reverseDirection: false,
      disableOnInteraction: false,
    },
  });

  /*
  -----------------------------------------------------
   COURSE TAB
  ----------------------------------------------------- 
  */

  var $grid = $(".course__wrapper").isotope({});

  // filter items on button click
  $(".course__tab-wrap").on("click", "button", function () {
    var filterValue = $(this).attr("data-filter");
    $grid.isotope({ filter: filterValue });
    $(".course__btn").removeClass("active");
    $(this).addClass("active");
  });

  let $isotope = $(".course__wrapper").isotope();

  $isotope.find("img").on("load", function () {
    $isotope.isotope("layout");
  });

  /*
-----------------------------------------------------
COUNTER
----------------------------------------------------- 
*/
  if ("counterUp" in window) {
    const skill_counter = window.counterUp.default;
    const skill_cb = (entries) => {
      entries.forEach((entry) => {
        const el = entry.target;
        if (entry.isIntersecting && !el.classList.contains("is-visible")) {
          skill_counter(el, {
            duration: 1500,
            delay: 16,
          });
          el.classList.add("is-visible");
        }
      });
    };

    const IO = new IntersectionObserver(skill_cb, {
      threshold: 1,
    });

    const els = document.querySelectorAll(".counter");
    els.forEach((el) => {
      IO.observe(el);
    });
  }

  /*
-----------------------------------------------------
Video Popup
-----------------------------------------------------  
*/
  if(true) {
    if (jQuery(".popup_video").length) {
      jQuery(".popup_video").magnificPopup({
        type: "iframe",
        mainClass: "video_fade",
        removalDelay: 150,
        preloader: false,
        fixedContentPos: false,
      });
    }
  }

  /*
  -----------------------------------------------------
  single-select
  -----------------------------------------------------  
  */

  if ($('.single-select').length){
    $('.single-select').niceSelect();
  }

  /*
  -----------------------------------------------------
  banner-move
  -----------------------------------------------------  
  */
  if ($('.banner-bg-img').length){
    function touches(e){
      var x = e.touches ? e.touches[0].clientX : e.clientX, 
      y = e.touches ? e.touches[0].clientY : e.clientY;
    var w = window.innerWidth / 2.5;
    var h = window.innerHeight / 2.5;

    var l = -(x - w) / (w / 1) - 1;
    var t = -(y - h) / (h / 1) - 1;    
    
      TweenMax.to($('.banner-bg-img'), 1, {
          top: t + "%",
          left: l + "%"
      });
      
    }

    window.addEventListener("mousemove", touches);
    window.addEventListener("touchstart", touches);
    window.addEventListener("touchmove", touches);
  }

  /*
-----------------------------------------------------
Gsap
----------------------------------------------------- 
*/
gsap.registerPlugin(ScrollTrigger, SplitText);

const fadeItems = document.querySelectorAll('.fade');
fadeItems.forEach((fadeItem) => {
  let startPosition = "top 90%",
  tweenOptions = {
    duration: 1.5,
    delay: 0.5,
    opacity: 1,
  }

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: fadeItem,
      start: startPosition,
      markers: false,
    },
  });
  timeline.to(fadeItem, tweenOptions);
});

const fadeSlideItems = document.querySelectorAll(".fade-slide");

fadeSlideItems.forEach((fadeSlideItem) => {
  let slideAmount = 80,
    startPosition = "top 90%",
    tweenOptions = {
      duration: 1.3,
      delay: 0.5,
      opacity: 0,
      ease: "power2.out",
    };

  if (fadeSlideItem.hasAttribute("data-slide-amount")) {
    slideAmount = fadeSlideItem.getAttribute("data-slide-amount");
  }

  if (fadeSlideItem.hasAttribute("data-opacity")) {
    tweenOptions.opacity = fadeSlideItem.getAttribute("data-opacity");
  }

  if (fadeSlideItem.hasAttribute("data-ease")) {
    tweenOptions.ease = fadeSlideItem.getAttribute("data-ease");
  }

  if (fadeSlideItem.hasAttribute("data-duration")) {
    tweenOptions.duration = fadeSlideItem.getAttribute("data-duration");
  }

  if (fadeSlideItem.hasAttribute("data-delay")) {
    tweenOptions.delay = fadeSlideItem.getAttribute("data-delay");
  }

  if (fadeSlideItem.classList.contains("right")) {
    tweenOptions.x = slideAmount;
  }

  if (fadeSlideItem.classList.contains("left")) {
    tweenOptions.x = -slideAmount;
  }

  if (fadeSlideItem.classList.contains("top")) {
    tweenOptions.y = -slideAmount;
  }

  if (fadeSlideItem.classList.contains("bottom")) {
    tweenOptions.y = slideAmount;
  }

  let timeline = gsap.timeline({
    scrollTrigger: {
      trigger: fadeSlideItem,
      start: startPosition,
      markers: false,
    },
  });
  timeline.from(fadeSlideItem, tweenOptions);
});

const splitChars = document.querySelectorAll('.split_chars');

splitChars.forEach((item) => {
  let isScrollAble = true, 
    tweenOptions = {
      duration: 1.3,
      delay: 0.5,
      autoAlpha: 0,
      stagger: 0.15,
      ease: "power2.out",
  },
  scrollTrigger = {
    trigger: item,
    start: 'top 90%',
    markers: false,
  };

  if (item.hasAttribute('data-duration')) {
    tweenOptions.duration = item.getAttribute('data-duration');
  }

  if (item.hasAttribute('data-delay')) {
    tweenOptions.delay = item.getAttribute('data-delay');
  }

  if (item.hasAttribute('data-ease')) {
    tweenOptions.ease = item.getAttribute('data-ease');
  }

  if (item.hasAttribute('data-stagger')) {
    tweenOptions.stagger = item.getAttribute('data-stagger');
  }

  if (item.hasAttribute('data-translate-x')) {
    tweenOptions.x = item.getAttribute('data-translate-x');
  }

  if (item.hasAttribute('data-translate-y')) {
    tweenOptions.y = item.getAttribute('data-translate-y');
  }

  if (!item.hasAttribute('data-translate-x') && !item.hasAttribute('data-translate-x')) {
    tweenOptions.x = 100;
  }

  if (item.hasAttribute('data-scroll-trigger')) {
    isScrollAble = item.getAttribute('data-scroll-trigger');
  } 

  if (item.hasAttribute('data-trigger-start')) {
    scrollTrigger.start = item.getAttribute('data-trigger-start');
  }

  if (isScrollAble) {
    tweenOptions.scrollTrigger = scrollTrigger;
  }

  let splittedText = new SplitText(item, {
    type: "chars, words"
  });

  gsap.from(splittedText.chars, tweenOptions);

});

const moveLine3DItems = document.querySelectorAll(".move-line-3d");

moveLine3DItems.forEach((item) => {
  let startPosition = "top 90%",
    tweenOptions = {
      duration: 1,
      delay: 0.3,
      opacity: 0,
      rotationX: -80,
      force3D: true,
      transformOrigin: "top center -50",
      stagger: 0.1,
    };

  if (item.hasAttribute("data-start")) {
    startPosition = item.getAttribute("data-start");
  }

  if (item.hasAttribute("data-duration")) {
    tweenOptions.duration = item.getAttribute("data-duration");
  }

  if (item.hasAttribute("data-delay")) {
    tweenOptions.delay = item.getAttribute("data-delay");
  }

  if (item.hasAttribute("data-opacity")) {
    tweenOptions.opacity = item.getAttribute("data-opacity");
  }

  if (item.hasAttribute("data-stagger")) {
    tweenOptions.stagger = item.getAttribute("data-stagger");
  }

  if (item.hasAttribute("data-rotate")) {
    tweenOptions.rotationX = item.getAttribute("data-rotate");
  }

  if (item.hasAttribute("data-origin")) {
    tweenOptions.transformOrigin = item.getAttribute("data-origin");
  }

  const timeline = gsap.timeline({
    scrollTrigger: {
      trigger: item,
      start: startPosition,
      duration: tweenOptions.duration,
      scrub: false,
      markers: false,
    },
  });

  const splitedText = new SplitText(item, {
    type: "lines",
  }).split({
    type: "lines",
  });
  gsap.set(item, {
    perspective: 400,
  });
  timeline.from(splitedText.lines, tweenOptions);
});

// Cursor pointer

const cursorItems = document.querySelectorAll('.cursor');

  cursorItems.forEach((cursorItem) => {
    let options = {
      duration: 0.5,
      ease: "power3"
    }

    if (cursorItem.hasAttribute("data-duration")) {
      options.duration = parseFloat(cursorItem.getAttribute("data-duration"));
    }

    if (cursorItem.hasAttribute("data-ease")) {
      options.ease = parseFloat(cursorItem.getAttribute("data-ease"));
    }

    gsap.set(cursorItem, {xPercent: -50, yPercent: -50});

  let xTo = gsap.quickTo(cursorItem, "x", options),
      yTo = gsap.quickTo(cursorItem, "y", options);

  window.addEventListener("mousemove", e => {
    xTo(e.clientX);
    yTo(e.clientY);
  })
})
// const rotate

})(jQuery);
