$(document).ready(
  $('.front').fadeIn(2000),
  $('.soft').fadeIn(2500),
  $('.mobile').fadeIn(3000),
  $('.hi').fadeIn(2000),
  $('.java').fadeIn(2500),
  $('.mail').fadeIn(3000),
  $('.AR').on('click', function () {
    $(this).addClass('d-none');
    $('.EN').removeClass('d-none');
    // setlanugage('arabic');
    // localStorage.setItem('lang','arabic');
  }),
  $('.EN').on('click', function () {
    $(this).addClass('d-none');
    $('.AR').removeClass('d-none');
    // setlanugage('english');
    // localStorage.setItem('lang','english');
  }),
  // setlanugage(localStorage.getItem('lang')),
  // function setlanugage(getlanugage){
  //   if(getlanugage==='arabic'){
  //     $('.front').text('بهاء المقيد');;
  //   }else if(getlanugage==='english'){
  //     $('.front').text('front');
  //   }
  // },


  $(".fa-moon").on('click', function (event) {
    $(this).addClass('d-none');
    $('.fa-sun').removeClass('d-none');
    $('nav').removeClass('bg-light');
    $('nav').removeClass('navbar-light');
    $('nav').addClass('navbar-dark');
    $('nav').addClass('bg-dark');
    $('.AR , .EN').css('color', '#fff');
    $('.navbar-collapse').css('background-color', '#212529');
    $('.fa-sun').css('color', '#fff');
    $('body').css('background-color', '#212121');
    $('body').css('color', '#FFF');
    $('header').css('background-image', 'linear-gradient(to bottom right , #212121 30%, #0c1627 70%)');
    $('header .bobble div').css('background-color', '#000');
    $('.program').css('background-color', '#000');
    $('.program').css('color', '#FFF');
    $('.masseage').css('background-color', 'black');
    $('.masseage').css('color', 'white');
    $('.number').css('background-color', '#0c1627');
    $('footer').css('background-color', '#0c1627');
    $('footer').css('color', 'white');
    $('footer h2').css('background-color', ' #0c1627');
    $('footer h2').css('color', 'white');

  }),
  $('.mail').on('click', function (event) {
    $('html, body').animate({ scrollTop: 2871 }, '300');
  }),


  //rgb(12,22,39,1)
  // $(document).scroll(function () {
  //     if ($(document).scrollTop() > 300) {
  //         $('.fa-chevron-up').fadeIn(1000);
  //         $('.fa-chevron-up').removeClass('d-none');
  //     } else {
  //         $('.fa-chevron-up').fadeOut(1000);
  //         $('.fa-chevron-up').addClass('d-none');
  //     }
  // }),
  // $(document).scroll(function(){
  //   console.log($(document).scrollTop());
  // }),

  // $('.fa-chevron-up').on('click', function (event) {
  //     $('html, body').animate({ scrollTop: 0 }, '300');
  //     $('.fa-chevron-up').fadeOut(1000);
  // }),
  $(".fa-sun").on('click', function (event) {
    $(this).addClass('d-none');
    $('.fa-moon').removeClass('d-none');
    $('nav').removeClass('navbar-dark');
    $('nav').removeClass('bg-dark');
    $('nav').addClass('navbar-light');
    $('nav').addClass('bg-light');
    $('.AR , .EN').css('color', '#000');
    $('.navbar-collapse').css('background-color', '#f8f9fa');
    $('body').css('background-color', '#f5f7fa');
    $('body').css('color', '#000');
    $('header .bobble div').css('background-color', '#FFF');
    $('header').css('background-image', 'linear-gradient(to bottom right , #3fafb1 30%,#f0f2f5 70%)');
    $('.program').css('background-color', '#3fafb1');
    $('.program').css('color', '#000');
    $('.masseage').css('background-color', 'white');
    $('.masseage').css('color', 'black');
    $('.number').css('background-color', 'rgba(0, 0, 0, 0.07)');
    $('footer').css('background-color', '#3fafb1');
    $('footer').css('color', '#000');
    $('footer h2').css('color', '#000');
    $('footer h2').css('background-color', '#3fafb1');
  })
)
var scrollToTopBtn = document.querySelector(".scrollToTopBtn")
var rootElement = document.documentElement

function handleScroll() {
  var scrollTotal = rootElement.scrollHeight - rootElement.clientHeight
  if ($(document).scrollTop() > 300) {
    scrollToTopBtn.classList.add("showBtn")
  } else {
    scrollToTopBtn.classList.remove("showBtn")
  }
}

function scrollToTop() {
  rootElement.scrollTo({
    top: 0,
    behavior: "smooth"
  })
}
scrollToTopBtn.addEventListener("click", scrollToTop);
document.addEventListener("scroll", handleScroll);



var wid = $(document).width();
if (wid < 768) {
  $('.gmail').on('click', function (event) {
    $('html, body').animate({ scrollTop: 3550 }, '300');
  })
}
else {
  $('.gmail').on('click', function (event) {
    $('html, body').animate({ scrollTop: 2900 }, '300');
  })
}
//translate