/*Слайдер*/

$(document).ready(function() {
  var swiper = undefined;
  function initSwiper() {
    var screenWidth = document.body.clientWidth;
    if(screenWidth <=1000 && swiper == undefined) {
      swiper = new Swiper('.storage__slider .swiper-container', {
        loop: true,
        slidesPerView: 4,
        slidesPerGroup: 1,
        spaceBetween: 8,
        autoHeight: true,
        watchSlidesProgress: true,
        watchSlidesVisibility: true,
        navigation: {
          nextEl: '.storage__slider .swiper-button-next',
          prevEl: '.storage__slider .swiper-button-prev'
        },
        breakpoints: {
          1016: {
            slidesPerView: 3
          },
          800: {
            slidesPerView: 2
          },
          500: {
            slidesPerView: 1
          }
        }
      });
    } else if (screenWidth > 1000 && swiper != undefined) {
      swiper.destroy();
      swiper = undefined;
      $('.storage__slider .swiper-wrapper').removeAttr('style');
      $('.storage__slider .swiper-slide').removeAttr('style');
    }
  }

  initSwiper();

  $(window).on('resize', function(){
    initSwiper();
  });

});

/*Переключение табов*/

$(document).ready(function() {
  $(function() {
    $(".storage__wrapper").each(function(indx, el) {
      var li = $(".storage__city-name", el),
        box = $(".storage__info", el),
        arrow = $(".storage__arrow", el),
        len = box.length - 1,
        i = 0;
      $(el).on("click", ".storage__city-name", function(event) {
        event.preventDefault();
        i = +$(this).attr("data-id")
        li.removeClass("active");
        $("[data-id =" + i +"]").addClass("active");
        box.removeClass("visible").eq(i).addClass("visible");
      });
      $(el).on("click", ".storage__arrow", function(event) {
        event.preventDefault();
        i += $(this).is(".swiper-button-prev") ? -1 : 1;
        i < 0 && (i = len);
        i > len && (i = 0);
        $("[data-id =" + i +"]").click();
      })
    })
  });
});