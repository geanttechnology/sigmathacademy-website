/*-----------------------------------------------------------------------------------

    Theme Name: Campus - University and Education Template
    Description: University and Education Template
    Author: Chitrakoot Web
    Version: 1.0

    /* ----------------------------------

    JS Active Code Index
            
        01. Preloader
        02. Sticky Header
        03. Scroll To Top
        04. Parallax
        05. Video
        06. Resize function
        07. FullScreenHeight function
        08. ScreenFixedHeight function
        09. FullScreenHeight and screenHeight with resize function
        10. Sliders
        11. Tabs
        12. CountUp
        13. Countdown
        14. Isotop
        
    ---------------------------------- */    

(function($) {

    "use strict";

    var $window = $(window);

        /*------------------------------------
            01. Preloader
        --------------------------------------*/

        $('#preloader').fadeOut('normall', function() {
            $(this).remove();
        });

        /*------------------------------------
            02. Sticky Header
        --------------------------------------*/

        $window.on('scroll', function() {
            var scroll = $window.scrollTop();
            var logocommon = $(".navbar-brand img");
            if (scroll <= 50) {
                $("header").removeClass("scrollHeader").addClass("fixedHeader");
                logocommon.attr('src', 'http://easymath.me/static/img/logos/easy-math-logo.svg');
            } 
            else {
                $("header").removeClass("fixedHeader").addClass("scrollHeader");
                logocommon.attr('src', 'http://easymath.me/static/img/logos/easy-math-logo.svg');
            }
        });

        /*------------------------------------
            03. Scroll To Top
        --------------------------------------*/

        $window.on('scroll', function() {
            if ($(this).scrollTop() > 500) {
                $(".scroll-to-top").fadeIn(400);

            } else {
                $(".scroll-to-top").fadeOut(400);
            }
        });

        $(".scroll-to-top").on('click', function(event) {
            event.preventDefault();
            $("html, body").animate({
                scrollTop: 0
            }, 600);
        });

        /*------------------------------------
            04. Parallax
        --------------------------------------*/

        // sections background image from data background
        var pageSection = $(".parallax,.bg-img");
        pageSection.each(function(indx) {

            if ($(this).attr("data-background")) {
                $(this).css("background-image", "url(" + $(this).data("background") + ")");
            }
        });
        
        /*------------------------------------
            05. Video
        --------------------------------------*/

        $('.story-video').magnificPopup({
            delegate: '.video',
            type: 'iframe'
        });

        /*------------------------------------
            06. Resize function
        --------------------------------------*/

        $window.resize(function(event) {
            setTimeout(function() {
                SetResizeContent();
            }, 500);
            event.preventDefault();
        });

        /*------------------------------------
            07. FullScreenHeight function
        --------------------------------------*/

        function fullScreenHeight() {
            var element = $(".full-screen");
            var $minheight = $window.height();
            element.css('min-height', $minheight);
        }

        /*------------------------------------
            08. ScreenFixedHeight function
        --------------------------------------*/

        function ScreenFixedHeight() {
            var $headerHeight = $("header").height();
            var element = $(".screen-height");
            var $screenheight = $window.height() - $headerHeight;
            element.css('height', $screenheight);
        }

        /*------------------------------------
            09. FullScreenHeight and screenHeight with resize function
        --------------------------------------*/        

        function SetResizeContent() {
            fullScreenHeight();
            ScreenFixedHeight();
        }

        SetResizeContent();

    // === when document ready === //
    $(document).on("ready", function() {

        /*------------------------------------
            10. Sliders
        --------------------------------------*/

        // Testmonials-style1
        $('.testimonial-style1').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            dots: false,
            margin: 0,
            autoplay: true,
            thumbs: true,
            thumbsPrerendered: true,
            autoplayTimeout: 5000,
            smartSpeed:800,
            responsive: {
                0: {
                    items: 1
                },
                600: {
                    items: 1
                },
                1000: {
                    items: 1
                }
            }
        });

        // Testmonials-style2
        $('.testimonial-style2').owlCarousel({
            loop: true,
            responsiveClass: true,
            nav: false,
            dots: true,
            margin: 40,
            autoplay: true,
            thumbs: false,
            thumbsPrerendered: false,
            autoplayTimeout: 5000,
            smartSpeed:800,
            responsive: {
                0: {
                    items: 1
                },
                768: {
                    items: 2
                },
                992: {
                    items: 2
                }
            }
        });

        // courses carousel
        $('.courses-area .owl-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            smartSpeed: 500,        
            nav: false,
            navText: ["<i class='fas fa-long-arrow-alt-left'></i>", "<i class='fas fa-long-arrow-alt-right'></i>"],
            dots: true,
            margin: 10,
            responsive: {
                0: {
                    items: 1,
                    margin: 0,
                    dots: false
                },
                768: {
                    items: 2
                },
                992: {
                    items: 3
                }
            }
        });

        // facility carousel
        $('.facility-wrapper .owl-carousel').owlCarousel({
            loop: true,
            responsiveClass: true,
            autoplay: false,
            smartSpeed: 500,        
            nav: false,
            dots: false,
            margin: 30,
            responsive: {
                0: {
                    items: 2
                },
                768: {
                    items: 3
               
                },
                992: {
                    items: 4
                },
                1200: {
                    items: 4
                }
            }
        });

        // Sliderfade
        $('.slider-fade .owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            nav: true,
            navText: ["<i class='fas fa-chevron-left'></i>", "<i class='fas fa-chevron-right'></i>"],
            autoplay:false,
            smartSpeed:500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
            
        }); 

        // banner-slider
        $('.banner-slider .owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: true,
            margin: 0,
            nav: false,
            autoplay:true,
            smartSpeed:500,
            mouseDrag:false,
            animateIn: 'fadeIn',
            animateOut: 'fadeOut'
        });

        // Default owlCarousel
        $('.owl-carousel').owlCarousel({
            items: 1,
            loop:true,
            dots: false,
            margin: 0,
            autoplay:true,
            smartSpeed:500
        });   

        // Slider text animation
        var owl = $('.slider-fade');
        owl.on('changed.owl.carousel', function(event) {
            var item = event.item.index - 2;     // Position of the current item
            $('h3').removeClass('animated fadeInRight');
            $('h1').removeClass('animated fadeInRight');
            $('p').removeClass('animated fadeInRight');
            $('.butn').removeClass('animated fadeInRight');
            $('.owl-item').not('.cloned').eq(item).find('h3').addClass('animated fadeInRight');
            $('.owl-item').not('.cloned').eq(item).find('h1').addClass('animated fadeInRight');
            $('.owl-item').not('.cloned').eq(item).find('p').addClass('animated fadeInRight');
            $('.owl-item').not('.cloned').eq(item).find('.butn').addClass('animated fadeInRight');
        });

        /*------------------------------------
            11. Tabs
        --------------------------------------*/

        //Horizontal Tab
        if ($(".horizontaltab").length !== 0) {
            $('.horizontaltab').easyResponsiveTabs({
                type: 'default', //Types: default, vertical, accordion
                width: 'auto', //auto or any width like 600px
                fit: true, // 100% fit in a container
                tabidentify: 'hor_1', // The tab groups identifier
                activate: function(event) { // Callback function if tab is switched
                    var $tab = $(this);
                    var $info = $('#nested-tabInfo');
                    var $name = $('span', $info);
                    $name.text($tab.text());
                    $info.show();
                }
            });
        }

        /*------------------------------------
            12. CountUp
        --------------------------------------*/

        $('.countup').counterUp({
            delay: 25,
            time: 2000
        });

        /*------------------------------------
            13. Countdown
        --------------------------------------*/

        // CountDown for coming soon page
        $(".countdown").countdown({
            date: "01 Jan 2021 00:01:00", //set your date and time. EX: 15 May 2014 12:00:00
            format: "on"
        });
      
    });

    // === when window loading === //
    $window.on("load", function() {

        /*------------------------------------
            14. Isotop
        --------------------------------------*/

        // isotope with magnificPopup
        $('.gallery').magnificPopup({
            delegate: '.popimg',
            type: 'image',
            gallery: {
                enabled: true
            }
        });

        var $gallery = $('.gallery').isotope({
            // options
        });

        // filter items on button click
        $('.filtering').on('click', 'span', function() {
            var filterValue = $(this).attr('data-filter');
            $gallery.isotope({
                filter: filterValue
            });
        });

        $('.filtering').on('click', 'span', function() {
            $(this).addClass('active').siblings().removeClass('active');
        });

        // stellar
        $window.stellar();

    });

})(jQuery);
