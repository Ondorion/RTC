$(function () {

  $('.menu__burger').on('click', function () {
    $('.menu__list').toggleClass('menu__list--active');
  })

  $('.reviews__tabs__top-item').on('click', function (e) {
    e.preventDefault();
    $('.reviews__tabs__top-item').removeClass('reviews__tabs__top-item--active');
    $(this).addClass('reviews__tabs__top-item--active');


    $('.reviews__tabs-content__item').removeClass('reviews__tabs-content__item--active');
    $($(this).attr('href')).addClass('reviews__tabs-content__item--active');
  })

});


$(document).ready(function () {
  $('.news__filbtn').click(function () {
    if (!$(this).hasClass("active")) {
      $(this).parent().find('.active').removeClass('active');
      $(this).addClass('active');
      let selector = $(this).attr("data-filter");

      $(".slick-track").isotope({
        itemSelector: ".news-slider__item ",
        filter: (selector === "*") ? "*" : "." + selector
      });
    }
  });

  $('.news-slider').slick({
    slidesToShow: 3,
    slidesToScroll: 1,
    prevArrow: "<img src='../images/arrow-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../images/arrow-right.svg' class='next' alt='2'>",
    variableWidth: true,
    infinite: false,
    responsive: [{
        breakpoint: 456,
        settings: {
          slidesToShow: 1,
          prevArrow: false,
          nextArrow: false,
          centreMode: true
        }
      }



    ]
  });
});

$(document).ready(function () {
  $('.marks__filbtn').click(function () {
    if (!$(this).hasClass("active")) {
      $(this).parent().find('.active').removeClass('active');
      $(this).addClass('active');
      let selector = $(this).attr("data-filter");

      $(".slick-track").isotope({
        itemSelector: ".marks-slider__item ",
        filter: (selector === "*") ? "*" : "." + selector
      });
    }
  });
  $('.marks-slider').slick({
    slidesToShow: 4,
    slidesToScroll: 1,
    prevArrow: "<img src='../images/arrow-left.svg' class='prev' alt='1'>",
    nextArrow: "<img src='../images/arrow-right.svg' class='next' alt='2'>",
    variableWidth: true,
    infinite: false,
    centerMode: false,
    responsive: [{
        breakpoint: 635,
        settings: {
          centreMode: true,
          prevArrow: false,
          nextArrow: false,
        },
        breakpoint: 456,
        settings: {
          centreMode: false,
          prevArrow: false,
          nextArrow: false,
        }
      }



    ]

  });
});