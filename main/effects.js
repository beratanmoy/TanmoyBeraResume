//jQuery Document
window.onload = () => {

  // loader
  'use strict'
  $(document).ready(function () {
    $('.loader').fadeOut(1000, function () {
      $('.slideLeft ').animate({ 'width': '0' }, 500)
      $('.slideRight ').animate({ 'width': '0' }, 500, function () {
        $('.loader-container').fadeOut();
      });
    });
  });

  // nav menu
  $(function () {
    'use strict'
    $('#menu').slicknav({
      label: '',
      brand: 'Tanmoy Bera'
    })
  })

  // hero section 
  $(document).ready(function () {
    'use strict'
    $(".heroSection").skitter({
      navigation: true,
      dots: false,
      label: false,
    });
  });

  // Hero label
  //    $(document).ready(function(){
  //     $(".picOneLabel").slideDown(1000, function(){
  //         $(".hireUsBtn").fadeIn(1000, function(){
  //             $(".picOneLabel, .hireUsBtn").delay(50).fadeOut(function(){
  //                 $(".picTwoLabel").slideDown(1000, function(){
  //                     $(".picTwoPara").show(1500, function(){
  //                         $(".aboutUsBtn").fadeIn(1000, function(){
  //                             $(".picTwoLabel, .picTwoPara, .aboutUsBtn").delay(2800).fadeOut()
  //                         })
  //                     })
  //                 })
  //             })
  //         })
  //     })
  //    })

  // Hero label loop
  //    $(document).ready(function(){
  //     setInterval(() => {
  //         $(".picOneLabel").slideDown(1000, function(){
  //         $(".hireUsBtn").fadeIn(1000, function(){
  //             $(".picOneLabel, .hireUsBtn").delay(50).fadeOut(function(){
  //                 $(".picTwoLabel").slideDown(1000, function(){
  //                     $(".picTwoPara").show(1500, function(){
  //                         $(".aboutUsBtn").fadeIn(1000, function(){
  //                             $(".picTwoLabel, .picTwoPara, .aboutUsBtn").delay(2800).fadeOut()
  //                         })
  //                     })
  //                 })
  //             })
  //         })
  //     })
  //     }, 10500);
  //    })

  // clients Sliders
  $(document).ready(() => {
    $(".center").slick({
      dots: false,
      centerMode: true,
      infinite: true,
      slidesToShow: 5,
      slidesToScroll: 3,
      autoplay: true,
      centerPadding: '60px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 5,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
        // You can unslick at a given breakpoint now by adding:
        // settings: "unslick"
        // instead of a settings object
      ]
    })
  })

  // progress bar
  $(document).ready(() => {
    var p1 = $(".progress1").html();
    var p2 = $(".progress2").html();
    var p3 = $(".progress3").html();
    var p4 = $(".progress4").html();
    var p5 = $(".progress5").html();
    $(".progress1").animate({ "width": p1 }, 1000, () => {
      $(".progress2").animate({ "width": p2 }, 1000, () => {
        $(".progress3").animate({ "width": p3 }, 1000, () => {
          $(".progress4").animate({ "width": p4 }, 1000, () => {
            $(".progress5").animate({ "width": p5 }, 1000)
          })
        })
      })
    })
  })

  // What people Stay
  $(document).ready(() => {
    $(".peopleBox").slick({
      dots: false,
      centerMode: true,
      infinite: true,
      slidesToShow: 3,
      slidesToScroll: 3,
      autoplay: true,
      centerPadding: '60px',
      responsive: [
        {
          breakpoint: 1024,
          settings: {
            slidesToShow: 3,
            slidesToScroll: 3,
            infinite: true,
            dots: false
          }
        },
        {
          breakpoint: 992,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 2
          }
        },
        {
          breakpoint: 480,
          settings: {
            slidesToShow: 1,
            slidesToScroll: 1
          }
        }
      ]
    })
  })

  // start page scroll effect 992px
  $(document).ready(() => {
    if ($(document).width() > 992) {
      $(document).scroll(() => {
        var pageHeight = window.pageYOffset;
        if (pageHeight > 200) {
          $(".aboutUs").addClass("animate__animated animate__fadeIn")
        }
        else {
          $(".aboutUs").removeClass("animate__animated animate__fadeIn")
        }
      })
    }
  })
  // start page scroll effect 992px
  $(document).ready(() => {
    if ($(document).width() > 992) {
      $(document).scroll(() => {
        var pageHeight = window.pageYOffset;
        if (pageHeight > 400) {
          $(".ServicesSkils").addClass("animate__animated animate__jello")
        }
        else {
          $(".ServicesSkils").removeClass("animate__animated animate__jello")
        }
      })
    }
  })
  // start page scroll effect 992px
  $(document).ready(() => {
    if ($(document).width() > 992) {
      $(document).scroll(() => {
        var pageHeight = window.pageYOffset;
        if (pageHeight > 800) {
          $(".progress").addClass("animate__animated animate__fadeInUp")
        }
        else {
          $(".progress").removeClass("animate__animated animate__fadeInUp")
        }
      })
    }
  })


  // start page scroll effect 768px
  $(document).ready(() => {
    if ($(document).width() < 992) {
      $(document).scroll(() => {
        var pageHeight = window.pageYOffset;
        if (pageHeight > 50) {
          $(".aboutUs").addClass("animate__animated animate__fadeIn")
        }
        else {
          $(".aboutUs").removeClass("animate__animated animate__fadeIn")
        }
      })
    }
  })
  // start page scroll effect 768px
  $(document).ready(() => {
    if ($(document).width() < 992) {
      $(document).scroll(() => {
        var pageHeight = window.pageYOffset;
        if (pageHeight > 700) {
          $(".ServicesSkils").addClass("animate__animated animate__jello")
        }
        else {
          $(".ServicesSkils").removeClass("animate__animated animate__jello")
        }
      })
    }
  })
  // start page scroll effect 768px
  $(document).ready(() => {
    if ($(document).width() < 992) {
      $(document).scroll(() => {
        var pageHeight = window.pageYOffset;
        if (pageHeight > 1400) {
          $(".progress").addClass("animate__animated animate__fadeInUp")
        }
        else {
          $(".progress").removeClass("animate__animated animate__fadeInUp")
        }
      })
    }
  })

  // // start page scroll effect 375px
  // $(document).ready(()=>{
  //   if($(document).width()>375)
  //   {$(document).scroll(()=>{
  //     var pageHeight = window.pageYOffset;
  //     if(pageHeight > 200){
  //       $(".aboutUs").addClass("animate__animated animate__fadeIn")
  //     }
  //     else(
  //       $(".aboutUs").removeClass("animate__animated animate__fadeIn")
  //     )

  //     if(pageHeight > 800){
  //       $(".ServicesSkils").addClass("animate__animated animate__jello")
  //     }
  //     else(
  //       $(".ServicesSkils").removeClass("animate__animated animate__jello")
  //     )

  //     if(pageHeight > 1800){
  //       $(".progress").addClass("animate__animated animate__fadeInUp")
  //     }
  //     else(
  //       $(".progress").removeClass("animate__animated animate__fadeInUp")
  //     )
  //   })
  // }})




  // $(document).ready(() => {
  //   $(document).scroll(() => {
  //     var pageHeight = window.pageYOffset;
  //     $(".test").html(pageHeight)
  //   })
  // })

  
// scroll Top
  $(document).ready(()=>{
    $(window).scroll(()=>{
      if($(this).scrollTop()>200){
        $('.scrolltop').fadeIn(500)
      }
      else{
         $('.scrolltop').fadeOut(500)
      }
    })
    $(".scrolltop").click(()=>{
        $('html, body').animate({scrollTop:0}, 2000)
    })
  })


  
}