$(document).ready(


  $('.AR').on('click', function (e) {
    $(this).addClass('d-none');
    $('.EN').removeClass('d-none');
  }),
  $('.EN').on('click', function (e) {
    $(this).addClass('d-none');
    $('.AR').removeClass('d-none');
  }),

  $(".fa-moon").on('click', function (event) {
    $(this).addClass('d-none');
    $('.fa-sun').removeClass('d-none');
    $('nav').removeClass('bg-light');
    $('nav').removeClass('navbar-light');
    $('nav').addClass('navbar-dark');
    $('nav').addClass('bg-dark');
    $('.AR , .EN').css('color','#fff');
    $('.navbar-collapse').css('background-color', '#212529');
    $('.fa-sun').css('color', '#fff');
    $('body').css("background-color", "#212121");
    $('header').css("background-color", "#212121");
    $('.project').css("background-color", "#000");
    $('.project').css("color", "#FFF");
    $('footer').css('background-color', ' #0c1627');
    $('footer').css('color', 'white');
    $('footer h2').css('background-color', ' #0c1627');
    $('footer h2').css('color', 'white');
  }),


  // $(document).scroll(function(){
  //     if($(document).scrollTop() > 300){
  //         $('.fa-chevron-up').fadeIn(1000);
  //         $('.fa-chevron-up').removeClass('d-none');

  //     }else {
  //         $('.fa-chevron-up').fadeOut(1000);
  //         $('.fa-chevron-up').addClass('d-none');
  //     }
  // }),

  $('.fa-chevron-up').on('click', function (event) {
    $('html, body').animate({ scrollTop: 0 }, '300');
  }),

  $(".fa-sun").on('click', function (event) {
    $(this).addClass('d-none');
    $('.fa-moon').removeClass('d-none');
    $('nav').removeClass('navbar-dark');
    $('nav').removeClass('bg-dark');
    $('nav').addClass('navbar-light');
    $('nav').addClass('bg-light');
    $('.AR , .EN').css('color','#000');
    $('.navbar-collapse').css('background-color', '#f8f9fa');
      $("body").css("background", "#f5f7fa");
    $("header").css("background", "#f5f7fa");
    $('.project').css("background-color", "#FFF");
    $('.project').css("color", "#000");
    $('footer').css('background-color', '#3fafb1');
    $('footer').css('color', '#000');
    $('footer h2').css('color', '#000');
    $('footer h2').css('background-color', '#3fafb1');
  })
);
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