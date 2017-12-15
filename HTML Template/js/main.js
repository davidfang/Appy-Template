/*************************************************/
      /*******     Theme Js        *******/
/*************************************************/

// Loading Screen 

window.onload = function () {
    var load = document.getElementById("loading-screen");
    document.body.removeChild(load);
}

// After Everything is loaded

$(document).ready(function(){
    // Use Strict
    "use strict";

    // set header fixed when scroll
    $(window).on("scroll",function(){
        if ($(this).scrollTop() > 0) {
            $(".header-section").removeClass("header-unsticky").addClass("header-sticky");
        } else {
            $(".header-section").removeClass("header-sticky").addClass("header-unsticky");
        }
    });

    if ($(this).scrollTop() > 0) {
        $(".header-section").removeClass("header-unsticky").addClass("header-sticky");
    } else {
        $(".header-section").removeClass("header-sticky").addClass("header-unsticky");
    }

    // Add Class active to nav-items when click 
    var navItem = $(".nav-item");
    navItem.on("click",function(){
        $(this).addClass("active").siblings().removeClass("active");
    });

    // Add Class active to nav-items when scroll 

    // Cashe Selectors

    $(window).on("scroll",function(){
        var windowscroll = $(this).scrollTop(),
            introsection = $("#intro").offset().top - 100,
            featuressection = $("#features").offset().top - 100,
            pricingsection =  $("#pricing").offset().top - 100,
            testimonialssection   =  $("#testimonials").offset().top - 100,
            downloadsection    = $("#download").offset().top - 100,
            teamsection   = $("#team").offset().top - 100,
            blogsection   = $("#blog").offset().top - 100,
            contactsection  = $("#contact").offset().top - 100;

        // Add Class Active 

        if (windowscroll > introsection && windowscroll < featuressection ) {
            navItem.eq(1).addClass("active").siblings().removeClass("active")
        } else if (windowscroll > featuressection && windowscroll < pricingsection) {
            navItem.eq(2).addClass("active").siblings().removeClass("active");
        } else if (windowscroll > pricingsection && windowscroll < testimonialssection ) {
            navItem.eq(3).addClass("active").siblings().removeClass("active");
        } else if (windowscroll > testimonialssection && windowscroll < downloadsection) {
            navItem.eq(4).addClass("active").siblings().removeClass("active");
        } else if (windowscroll > downloadsection && windowscroll < teamsection) {
            navItem.eq(5).addClass("active").siblings().removeClass("active");
        } else if (windowscroll > teamsection && windowscroll < blogsection) {
            navItem.eq(6).addClass("active").siblings().removeClass("active");
        } else if (windowscroll > blogsection && windowscroll < contactsection ) {
            navItem.eq(7).addClass("active").siblings().removeClass("active");
        } else if (windowscroll > contactsection) {
            navItem.eq(8).addClass("active").siblings().removeClass("active");
        } else if (windowscroll < introsection) {
            navItem.eq(0).addClass("active").siblings().removeClass("active")
        }
    });

    $(window).scroll(function(){
        console.log($(this).scrollTop())
    })

    // animate scrll down icon 

    var scroll = $(".scroll");

    (function animate(){
        scroll.animate({
            bottom : "3%"
        },1000,function(){
            $(this).animate({
                bottom : "5%"
            },1000,function(){
                animate();
            })
        })
    }());

    $(window).on("scroll",function(){
        if ($(window).scrollTop() > 600 && $(window).width() > 991) {
            scroll.fadeOut(500);
        } else {
            scroll.fadeIn(500);
        }
    });

    scroll.on("click",function(){
        $("html,body").animate({
            scrollTop : ($("#intro").offset().top) - $("header").height() + 50
        },1000);
    });

    // Add class animate to features-section when scroll 
    var check = false;
    $(window).on("scroll",function(){
        if (!check && $(this).scrollTop() > $("header").height() ) {
            $(".card-body").addClass("fadeinanimate");
            check = true;
        }
    });
    if (!check && $(window).scrollTop() > $("header").height() ) {
        $(".card-body").addClass("fadeinanimate");
        check = true;
    }

    // make window scroll when click on navbar-links

    $(".nav-link").on("click",function(){
        $("html,body").animate({
            scrollTop : ($("#" + $(this).data("value")).offset().top) - $("header").height()
        },1000); 
    });

    // add animation to about section when scroll

    var checked = false;
    $(window).on("scroll",function(){
        if (!checked && $(this).scrollTop() > 800){
            $(".img.about-js").addClass("infoanimate");
            $(".info.about-js").addClass("infoanimateleft");
            checked = true;
        }
    });

    if (!checked && $(window).scrollTop() > 800){
        $(".img.about-js").addClass("infoanimate");
        $(".info.about-js").addClass("infoanimateleft");
        checked = true;
    }

    $(window).on("scroll",function(){
        if ($(this).scrollTop() > $("#about").offset().top + 50) {
            $(".action-section .action-inner").addClass("fadeinanimate");
        }
    });

    if ($(this).scrollTop() > $("#about").offset().top + 50) {
        $(".action-section .action-inner").addClass("fadeinanimate");
    }

    // add animation to about section when scroll 

    $(window).on("scroll",function(){
        if ($(this).scrollTop() > $("#about").offset().top + 750) {
            $(".section-features-section .img").addClass("fadeinanimate");
            $(".section-features-section .info.right").addClass("infoanimate");
            $(".section-features-section .info.left").addClass("infoanimateleft");
        }
    });

    if ($(this).scrollTop() > $("#about").offset().top + 750) {
        $(".section-features-section .img").addClass("fadeinanimate");
        $(".section-features-section .info.right").addClass("infoanimate");
        $(".section-features-section .info.left").addClass("infoanimateleft");
    }

    // Init CountTo 
    var flag = false;
    $(window).on("scroll",function(){
        if (!flag && $(this).scrollTop() > $("#features").offset().top + 400) {       
            $(".count").countTo({
                speed: 7000,
                refreshInterval: 50,
            });
            flag = true;
        }
    });

    if ($(window).scrollTop() > $("#features").offset().top + 400) {       
        $(".count").countTo({
            speed: 7000,
            refreshInterval: 50,
        });
        flag = true;
    }


// The App Screens Slider 

    screen = 1;

    // Click on the arrow

    $("#next,#prev").on("click",function(){
        if (screen === 0|| screen === 6) {
            $(".screen1").css({
                zIndex : 1000,
                transform : "translateX(0px) scale(1.5)",
                opacity: 1
            });
            $(".screen2").css({
                zIndex : 100,
                transform : "translateX(200px) scale(0.8);",
                opacity : 0.8
            });
            $(".screen3").css({
                zIndex : 100,
                transform : "translateX(-100px) scale(1);",
                opacity : 1
            });
            $(".screen4").css({
                zIndex : 88,
                transform : "translateX(-200px) scale(0.8);",
                opacity : 0.8
            });
            $(".screen5").css({
                zIndex : 100,
                transform : "translateX(100px) scale(1)",
                opacity : 1
            });
            screen = 1;
        } else if (screen == 1) {
            $(".screen5").css({
                zIndex : 1000,
                transform : "translateX(0px) scale(1.5)",
                opacity: 1
            });
            $(".screen2").css({
                zIndex : 100,
                transform : "translateX(200px) scale(0.8)",
                opacity : 0.8
            });
            $(".screen3").css({
                zIndex : 100,
                transform : "translateX(-100px) scale(1)",
                opacity : 1
            });
            $(".screen4").css({
                zIndex : 88,
                transform : "translateX(-200px) scale(0.8)",
                opacity : 0.8
            });
            $(".screen1").css({
                zIndex : 120,
                transform : "translateX(100px) scale(1)",
                opacity : 1
            });
            screen = 2;
        } else if (screen == 2) {
            $(".screen2").css({
                zIndex : 1000,
                transform : "translateX(0px) scale(1.5)",
                opacity: 1
            });
            $(".screen1").css({
                zIndex : 100,
                transform : "translateX(200px) scale(0.8)",
                opacity : 0.8
            });
            $(".screen3").css({
                zIndex : 100,
                transform : "translateX(-100px) scale(1)",
                opacity : 1
            });
            $(".screen4").css({
                zIndex : 88,
                transform : "translateX(-200px) scale(0.8)",
                opacity : 0.8
            });
            $(".screen5").css({
                zIndex : 120,
                transform : "translateX(100px) scale(1)",
                opacity : 1
            });
            screen = 3;
        } else if (screen == 3) {
            $(".screen3").css({
                zIndex : 1000,
                transform : "translateX(0px) scale(1.5)",
                opacity: 1
            });
            $(".screen1").css({
                zIndex : 100,
                transform : "translateX(200px) scale(0.8)",
                opacity : 0.8
            });
            $(".screen2").css({
                zIndex : 100,
                transform : "translateX(-100px) scale(1)",
                opacity : 1
            });
            $(".screen4").css({
                zIndex : 88,
                transform : "translateX(-200px) scale(0.8)",
                opacity : 0.8
            });
            $(".screen5").css({
                zIndex : 120,
                transform : "translateX(100px) scale(1)",
                opacity : 1
            });
            screen = 4;
        } else if (screen == 4) {
            $(".screen4").css({
                zIndex : 1000,
                transform : "translateX(0px) scale(1.5)",
                opacity: 1
            });
            $(".screen1").css({
                zIndex : 100,
                transform : "translateX(200px) scale(0.8)",
                opacity : 0.8
            });
            $(".screen2").css({
                zIndex : 100,
                transform : "translateX(-100px) scale(1)",
                opacity : 1
            });
            $(".screen3").css({
                zIndex : 88,
                transform : "translateX(-200px) scale(0.8)",
                opacity : 0.8
            });
            $(".screen5").css({
                zIndex : 120,
                transform : "translateX(100px) scale(1)",
                opacity : 1
            });
            screen = 5;
        } else if (screen = 5) {
            $(".screen1").css({
                zIndex : 1000,
                transform : "translateX(0px) scale(1.5)",
                opacity: 1
            });
            $(".screen2").css({
                zIndex : 100,
                transform : "translateX(200px) scale(0.8)",
                opacity : 0.8
            });
            $(".screen3").css({
                zIndex : 111,
                transform : "translateX(-100px) scale(1)",
                opacity : 1
            });
            $(".screen4").css({
                zIndex : 88,
                transform : "translateX(-200px) scale(0.8)",
                opacity : 0.8
            });
            $(".screen5").css({
                zIndex : 100,
                transform : "translateX(100px) scale(1)",
                opacity : 1
            });
            screen = 6;
            $(this).trigger("click")
        }
    });

    // End the App Screens Slider Slider 

    // Init Youtube Video Pop 

    $(".youtube-link").grtyoutube();

    // Testimonials Auto Slider 

    (function autoSlider(){
        $(".testimonials-box.active").each(function(){
            if (!$(this).is(":last-child")){
                $(this).delay(6000).fadeOut(0,function(){
                    $(this).removeClass("active").next().addClass("active").fadeIn();
                    autoSlider();
                });
            } else {
                $(this).delay(6000).fadeOut(0,function(){
                    $(this).removeClass("active");
                    $(".testimonials-box").eq(0).addClass("active").fadeIn();
                    autoSlider();
                });
            }
        });
    }());

    // Go Up
    
    // Cashe Selector 

    var go = $("#go-up");

    $(window).on("scroll",function(){
        if ($(this).scrollTop() > 500) {
            go.fadeIn(500);
        } else {
            go.fadeOut(500);
        }
    });

    if ($(window).scrollTop() > 500) {
        go.fadeIn(500);
    } else {
        go.fadeOut(500);
    }

    go.on("click",function(){
        $("html,body").animate({
            scrollTop : $("#home").offset().top
        },1000)
    });
    
});
