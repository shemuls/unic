jQuery(document).ready(function( $ ) {



        //for preloader
        $("#loaderr").fadeOut(2000);
        $("#load").delay(3000).fadeOut("slow");



       


        $('.unik-service-area .unik-service .s-one').click(function(){
             $('.unik-service-area .unik-service .s-one').toggleClass('active');
               $('.unik-service-area .unik-service .s-two').removeClass('active');
               $('.unik-service-area .unik-service .s-three').removeClass('active');
               $('.unik-service-area .unik-service .s-four').removeClass('active');
               $('.unik-service-area .unik-service .s-five').removeClass('active');

                 $('.ser-two').css('visibility','hidden');
	             $('.ser-three').css('visibility','hidden');
	             $('.ser-four').css('visibility','hidden');
	             $('.ser-five').css('visibility','hidden');
	             $('.ser-one').css('visibility','visible');
           
        });

        $('.unik-service-area .unik-service .s-two').click(function(){
             $('.unik-service-area .unik-service .s-two').toggleClass('active');
             $('.unik-service-area .unik-service .s-three').removeClass('active');
               $('.unik-service-area .unik-service .s-four').removeClass('active');
               $('.unik-service-area .unik-service .s-five').removeClass('active');
               $('.unik-service-area .unik-service .s-one').removeClass('active');
             
               	 $('.ser-one').css('visibility','hidden');
	             $('.ser-three').css('visibility','hidden');
	             $('.ser-four').css('visibility','hidden');
	             $('.ser-five').css('visibility','hidden');
	             $('.ser-two').css('visibility','visible');
        });

        $('.unik-service-area .unik-service .s-three').click(function(){
             $('.unik-service-area .unik-service .s-three').toggleClass('active');

             $('.unik-service-area .unik-service .s-two').removeClass('active');
               $('.unik-service-area .unik-service .s-four').removeClass('active');
               $('.unik-service-area .unik-service .s-five').removeClass('active');
               $('.unik-service-area .unik-service .s-one').removeClass('active');
             

               	 $('.ser-one').css('visibility','hidden');
	             $('.ser-two').css('visibility','hidden');
	             $('.ser-four').css('visibility','hidden');
	             $('.ser-five').css('visibility','hidden');
	             $('.ser-three').css('visibility','visible');

        });

        $('.unik-service-area .unik-service .s-four').click(function(){
             $('.unik-service-area .unik-service .s-four').toggleClass('active');


             $('.unik-service-area .unik-service .s-three').removeClass('active');
               $('.unik-service-area .unik-service .s-two').removeClass('active');
               $('.unik-service-area .unik-service .s-five').removeClass('active');
               $('.unik-service-area .unik-service .s-one').removeClass('active');
             


               	 $('.ser-one').css('visibility','hidden');
	             $('.ser-two').css('visibility','hidden');
	             $('.ser-three').css('visibility','hidden');
	             $('.ser-five').css('visibility','hidden');
	             $('.ser-four').css('visibility','visible');
        });

        $('.unik-service-area .unik-service .s-five').click(function(){
             $('.unik-service-area .unik-service .s-five').toggleClass('active');

             $('.unik-service-area .unik-service .s-three').removeClass('active');
               $('.unik-service-area .unik-service .s-four').removeClass('active');
               $('.unik-service-area .unik-service .s-two').removeClass('active');
               $('.unik-service-area .unik-service .s-one').removeClass('active');
             


               	 $('.ser-one').css('visibility','hidden');
	             $('.ser-two').css('visibility','hidden');
	             $('.ser-three').css('visibility','hidden');
	             $('.ser-four').css('visibility','hidden');
	             $('.ser-five').css('visibility','visible');
        });



        $('.service-review-area #review-slide').owlCarousel({


            items           : 1,
            autoplay        : true,
            loop            : true,
            nav             : true,
            navText         : ['<i class="fa fa-angle-left"></i>','<i class="fa fa-angle-right"></i>'],
            autoplayTimeout     : 1000,


          });


        // for mixit up
        $(".my-project").mixItUp();
       

    });