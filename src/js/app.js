

(function (window, document, $, undefined) {
    'use strict'; 
    var rupjs = {
        i: function (e) { 
            rupjs.methods();
        },

         
        methods: function (e) { 
            rupjs.bannerSwiperActive();
           
            
        },
 

    bannerSwiperActive: function () { 
         var swiper = new Swiper(".rupSwiper", {
            loop: true,
            slidesPerView: 1, 
            keyboard: {
              enabled: true,
            },
            pagination: {
              el: ".numbering",
              type: 'custom',
              renderCustom: function (swiper, current, total) {
                  return '0' + current + '<div id="num-style ex-color"></div>' + '0' + total; 
              },
            },
            navigation: {
              nextEl: ".swiper-next",
              prevEl: ".swiper-prev",
            },
            scrollbar: {
              el: "#big",
              hide: false,
            },
          }); 

        },
        
 
    }
    rupjs.i();

})(window, document, jQuery); 

