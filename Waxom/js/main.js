"use strict";

$(document).ready(function () {
  // script for head slider START
  $('.section-head-slider').slick({
    infinite: true,
    fade: true,
    autoplay: true,
    autoplaySpeed: 5000
  }); // script for fixed header

  $(window).scroll(function () {
    if ($(this).scrollTop() > 50) {
      $(".header").addClass("mode").fadeIn('fast');
    } else {
      $(".header").removeClass("mode").fadeIn('fast');
    }

    ;
  }); // script for recent posts slider START

  $('.section-recent-posts-slider').slick({
    infinite: true
  }); // script for search

  $(".header-form-search__icon-search").click(function () {
    $("body").toggleClass("show-search-field");
  }); // script for tabs

  $(".tab_item").not(":first").hide();
  $(".tabs-block .tab").click(function () {
    $(".tabs-block .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzbGljayIsImluZmluaXRlIiwiZmFkZSIsImF1dG9wbGF5IiwiYXV0b3BsYXlTcGVlZCIsIndpbmRvdyIsInNjcm9sbCIsInNjcm9sbFRvcCIsImFkZENsYXNzIiwiZmFkZUluIiwicmVtb3ZlQ2xhc3MiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwibm90IiwiaGlkZSIsImVxIiwiaW5kZXgiXSwibWFwcGluZ3MiOiJBQUFBOztBQUNBQSxFQUFFQyxRQUFGLEVBQVlDLEtBQVosQ0FBa0IsWUFBVztBQUV6QjtBQUNBRixJQUFFLHNCQUFGLEVBQTBCRyxLQUExQixDQUFnQztBQUM1QkMsY0FBVSxJQURrQjtBQUU1QkMsVUFBTSxJQUZzQjtBQUc1QkMsY0FBVSxJQUhrQjtBQUk1QkMsbUJBQWU7QUFKYSxHQUFoQyxFQUh5QixDQVN6Qjs7QUFDQVAsSUFBRVEsTUFBRixFQUFVQyxNQUFWLENBQWlCLFlBQVc7QUFDeEIsUUFBSVQsRUFBRSxJQUFGLEVBQVFVLFNBQVIsS0FBc0IsRUFBMUIsRUFBOEI7QUFDMUJWLFFBQUUsU0FBRixFQUFhVyxRQUFiLENBQXNCLE1BQXRCLEVBQThCQyxNQUE5QixDQUFxQyxNQUFyQztBQUNILEtBRkQsTUFFTztBQUNIWixRQUFFLFNBQUYsRUFBYWEsV0FBYixDQUF5QixNQUF6QixFQUFpQ0QsTUFBakMsQ0FBd0MsTUFBeEM7QUFDSDs7QUFBQTtBQUNKLEdBTkQsRUFWeUIsQ0FpQnpCOztBQUNBWixJQUFFLDhCQUFGLEVBQWtDRyxLQUFsQyxDQUF3QztBQUNwQ0MsY0FBVTtBQUQwQixHQUF4QyxFQWxCeUIsQ0FzQnpCOztBQUNBSixJQUFFLGtDQUFGLEVBQXNDYyxLQUF0QyxDQUE0QyxZQUFXO0FBQ25EZCxNQUFFLE1BQUYsRUFBVWUsV0FBVixDQUFzQixtQkFBdEI7QUFDSCxHQUZELEVBdkJ5QixDQTBCekI7O0FBQ0FmLElBQUUsV0FBRixFQUFlZ0IsR0FBZixDQUFtQixRQUFuQixFQUE2QkMsSUFBN0I7QUFDQWpCLElBQUUsa0JBQUYsRUFBc0JjLEtBQXRCLENBQTRCLFlBQVc7QUFDbkNkLE1BQUUsa0JBQUYsRUFBc0JhLFdBQXRCLENBQWtDLFFBQWxDLEVBQTRDSyxFQUE1QyxDQUErQ2xCLEVBQUUsSUFBRixFQUFRbUIsS0FBUixFQUEvQyxFQUFnRVIsUUFBaEUsQ0FBeUUsUUFBekU7QUFDQVgsTUFBRSxXQUFGLEVBQWVpQixJQUFmLEdBQXNCQyxFQUF0QixDQUF5QmxCLEVBQUUsSUFBRixFQUFRbUIsS0FBUixFQUF6QixFQUEwQ1AsTUFBMUM7QUFDSCxHQUhELEVBR0dNLEVBSEgsQ0FHTSxDQUhOLEVBR1NQLFFBSFQsQ0FHa0IsUUFIbEI7QUFJSCxDQWhDRCIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcblxuICAgIC8vIHNjcmlwdCBmb3IgaGVhZCBzbGlkZXIgU1RBUlRcbiAgICAkKCcuc2VjdGlvbi1oZWFkLXNsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICBhdXRvcGxheVNwZWVkOiA1MDAwXG4gICAgfSk7XG4gICAgLy8gc2NyaXB0IGZvciBmaXhlZCBoZWFkZXJcbiAgICAkKHdpbmRvdykuc2Nyb2xsKGZ1bmN0aW9uKCkge1xuICAgICAgICBpZiAoJCh0aGlzKS5zY3JvbGxUb3AoKSA+IDUwKSB7XG4gICAgICAgICAgICAkKFwiLmhlYWRlclwiKS5hZGRDbGFzcyhcIm1vZGVcIikuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgIH0gZWxzZSB7XG4gICAgICAgICAgICAkKFwiLmhlYWRlclwiKS5yZW1vdmVDbGFzcyhcIm1vZGVcIikuZmFkZUluKCdmYXN0Jyk7XG4gICAgICAgIH07XG4gICAgfSk7XG4gICAgLy8gc2NyaXB0IGZvciByZWNlbnQgcG9zdHMgc2xpZGVyIFNUQVJUXG4gICAgJCgnLnNlY3Rpb24tcmVjZW50LXBvc3RzLXNsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgfSk7XG5cbiAgICAvLyBzY3JpcHQgZm9yIHNlYXJjaFxuICAgICQoXCIuaGVhZGVyLWZvcm0tc2VhcmNoX19pY29uLXNlYXJjaFwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaG93LXNlYXJjaC1maWVsZFwiKTtcbiAgICB9KTtcbiAgICAvLyBzY3JpcHQgZm9yIHRhYnNcbiAgICAkKFwiLnRhYl9pdGVtXCIpLm5vdChcIjpmaXJzdFwiKS5oaWRlKCk7XG4gICAgJChcIi50YWJzLWJsb2NrIC50YWJcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCIudGFicy1ibG9jayAudGFiXCIpLnJlbW92ZUNsYXNzKFwiYWN0aXZlXCIpLmVxKCQodGhpcykuaW5kZXgoKSkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG4gICAgICAgICQoXCIudGFiX2l0ZW1cIikuaGlkZSgpLmVxKCQodGhpcykuaW5kZXgoKSkuZmFkZUluKClcbiAgICB9KS5lcSgwKS5hZGRDbGFzcyhcImFjdGl2ZVwiKTtcbn0pOyJdfQ==
