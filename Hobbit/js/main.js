"use strict";

$(document).ready(function () {
  $(".links__item_dropmenu1").click(function () {
    $("body").toggleClass("show-dropdown-menu1");
  });
  $(".links__item_dropmenu2").click(function () {
    $("body").toggleClass("show-dropdown-menu2");
  }); // slick slider START

  $('.head-slider').slick({
    dots: true,
    arrows: false
  }); // scrept for menu

  $(".burger").click(function () {
    $("body").toggleClass("open-menu");
  });
});
