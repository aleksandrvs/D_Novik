$(function () {
  $('.burger, .overlay, .header__nav').on('click', function (e) {
    e.preventDefault()
    $('.header__nav').toggleClass('header__nav--open')
    $('.burger').toggleClass('active')
    $('.overlay').toggleClass('overlay--show')
    $('body').toggleClass('overflow-hidden')
    $('.header').removeClass('header-fixed')
  })

  $(".header__nav").on("click", "a", function (event) {
    event.preventDefault();
    var id = $(this).attr('href'),
      top = $(id).offset().top;
    $('body,html').animate({ scrollTop: top }, 2000);
  });

  window.onscroll = function headerShow() {
    var header = document.querySelector('.header');
    if (window.pageYOffset > 200) {
      header.classList.add('header-fixed');
    }
    else {
      header.classList.remove('header-fixed');
    }
  }

  $('.ru').on('click', function (e) {
    e.preventDefault()
    $('.ru').toggleClass('active');
    $('.en').toggleClass('no-active')
  })

  $('.en').on('click', function (e) {
    e.preventDefault()
    $('.ru').removeClass('active');
    $('.en').removeClass('no-active')
  })
});
