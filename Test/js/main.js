"use strict";

$(document).ready(function () {
  //slick slider script START
  $('.slider').slick({
    infinite: true,
    centerMode: true,
    slidesToShow: 3,
    responsive: [{
      breakpoint: 970,
      settings: {
        slidesToShow: 1,
        slidesToScroll: 1,
        infinite: true
      }
    }]
  }); //accordion script START

  $(function () {
    $("#accordion").accordion({
      animate: 400
    });
  }); //scroll script START

  $('.go_to').click(function () {
    var scroll_el = $(this).attr('href');

    if ($(scroll_el).length != 0) {
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top
      }, 500);
    }

    return false;
  }); //calculator script START

  function plus() {
    var el = document.getElementById('inputId');
    if (el.value.trim() === '') el.value = 0;
    var val = parseInt(el.value);
    el.value = val + 1;
  }

  var plusSpan = document.getElementById('ClickPlus');

  plusSpan.onclick = function () {
    plus();
  };

  function minus() {
    var el = document.getElementById('inputId');
    if (el.value.trim() === '') el.value = 0;
    var valmin = parseInt(el.value);
    if (valmin === 0) return;
    el.value = valmin - 1;
  }

  var minusSpan = document.getElementById('ClickMinus');

  minusSpan.onclick = function () {
    minus();
  };

  var optionsCar = {
    audi: {
      price: 1000
    },
    cadillac: {
      price: 5000
    },
    ferrari: {
      price: 9000
    },
    cur: false,
    count: function count(price, time) {
      return price * time;
    }
  };
  var coutnBtnEl = document.getElementById('coutnBtn');

  coutnBtn.onclick = function () {
    var inputTime = document.getElementById('inputId');
    var checkboxes = document.querySelectorAll('.checkbox');
    var priceArr = [];

    for (var i = 0; i < checkboxes.length; i++) {
      if (checkboxes[i].checked) {
        var nameCar = checkboxes[i].name;
        priceArr.push(optionsCar[nameCar].price);
      }
    }

    if (priceArr.length === 0) return;
    var sum = priceArr.reduce(function (previousValue, currentValue) {
      return previousValue + currentValue;
    });
    var time = parseInt(inputTime.value);
    var result = optionsCar.count(sum, time);
    var resultElement = document.getElementById('result');
    resultElement.innerHTML = result;
  }; //header burger script START


  $('.header-burger, .close').click(function () {
    $('body').toggleClass('activation-menu');
  });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzbGljayIsImluZmluaXRlIiwiY2VudGVyTW9kZSIsInNsaWRlc1RvU2hvdyIsInJlc3BvbnNpdmUiLCJicmVha3BvaW50Iiwic2V0dGluZ3MiLCJzbGlkZXNUb1Njcm9sbCIsImFjY29yZGlvbiIsImFuaW1hdGUiLCJjbGljayIsInNjcm9sbF9lbCIsImF0dHIiLCJsZW5ndGgiLCJzY3JvbGxUb3AiLCJvZmZzZXQiLCJ0b3AiLCJwbHVzIiwiZWwiLCJnZXRFbGVtZW50QnlJZCIsInZhbHVlIiwidHJpbSIsInZhbCIsInBhcnNlSW50IiwicGx1c1NwYW4iLCJvbmNsaWNrIiwibWludXMiLCJ2YWxtaW4iLCJtaW51c1NwYW4iLCJvcHRpb25zQ2FyIiwiYXVkaSIsInByaWNlIiwiY2FkaWxsYWMiLCJmZXJyYXJpIiwiY3VyIiwiY291bnQiLCJ0aW1lIiwiY291dG5CdG5FbCIsImNvdXRuQnRuIiwiaW5wdXRUaW1lIiwiY2hlY2tib3hlcyIsInF1ZXJ5U2VsZWN0b3JBbGwiLCJwcmljZUFyciIsImkiLCJjaGVja2VkIiwibmFtZUNhciIsIm5hbWUiLCJwdXNoIiwic3VtIiwicmVkdWNlIiwicHJldmlvdXNWYWx1ZSIsImN1cnJlbnRWYWx1ZSIsInJlc3VsdCIsInJlc3VsdEVsZW1lbnQiLCJpbm5lckhUTUwiLCJ0b2dnbGVDbGFzcyJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3ZCO0FBQ0FGLElBQUUsU0FBRixFQUFhRyxLQUFiLENBQW1CO0FBQ2ZDLGNBQVUsSUFESztBQUVmQyxnQkFBWSxJQUZHO0FBR2ZDLGtCQUFjLENBSEM7QUFJZkMsZ0JBQVksQ0FBQztBQUNUQyxrQkFBWSxHQURIO0FBRVRDLGdCQUFVO0FBQ1JILHNCQUFjLENBRE47QUFFUkksd0JBQWdCLENBRlI7QUFHUk4sa0JBQVU7QUFIRjtBQUZE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WUFBaEIsRUFBaUM7QUFDekQsYUFBT0QsZ0JBQWdCQyxZQUF2QjtBQUNELEtBRlMsQ0FBVjtBQUlBLFFBQUlmLE9BQU9iLFNBQVNnQixVQUFVbkIsS0FBbkIsQ0FBWDtBQUVBLFFBQUlnQyxTQUFTdkIsV0FBV00sS0FBWCxDQUFpQmEsR0FBakIsRUFBc0JaLElBQXRCLENBQWI7QUFFQSxRQUFJaUIsZ0JBQWdCdkQsU0FBU3FCLGNBQVQsQ0FBd0IsUUFBeEIsQ0FBcEI7QUFDQWtDLGtCQUFjQyxTQUFkLEdBQTBCRixNQUExQjtBQUNELEdBeEJELENBckZxQixDQThHckI7OztBQUNBdkQsSUFBRSx3QkFBRixFQUE0QmEsS0FBNUIsQ0FBa0MsWUFBVztBQUMzQ2IsTUFBRSxNQUFGLEVBQVUwRCxXQUFWLENBQXNCLGlCQUF0QjtBQUNELEdBRkQ7QUFLRCxDQXBIUCIsImZpbGUiOiJqcy9tYWluLmpzIiwic291cmNlc0NvbnRlbnQiOlsiXCJ1c2Ugc3RyaWN0XCI7XG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgICAgIC8vc2xpY2sgc2xpZGVyIHNjcmlwdCBTVEFSVFxuICAgICAgJCgnLnNsaWRlcicpLnNsaWNrKHtcbiAgICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgICBjZW50ZXJNb2RlOiB0cnVlLFxuICAgICAgICAgIHNsaWRlc1RvU2hvdzogMyxcbiAgICAgICAgICByZXNwb25zaXZlOiBbe1xuICAgICAgICAgICAgICBicmVha3BvaW50OiA5NzAsXG4gICAgICAgICAgICAgIHNldHRpbmdzOiB7XG4gICAgICAgICAgICAgICAgc2xpZGVzVG9TaG93OiAxLFxuICAgICAgICAgICAgICAgIHNsaWRlc1RvU2Nyb2xsOiAxICxcbiAgICAgICAgICAgICAgICBpbmZpbml0ZTogdHJ1ZX1cbiAgICAgICAgICAgICAgfV1cbiAgICAgICAgICB9KTtcbiAgICAgICAgLy9hY2NvcmRpb24gc2NyaXB0IFNUQVJUXG4gICAgICAgICQoZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJChcIiNhY2NvcmRpb25cIikuYWNjb3JkaW9uKHtcbiAgICAgICAgICAgIGFuaW1hdGU6IDQwMFxuICAgICAgICAgIH0pO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL3Njcm9sbCBzY3JpcHQgU1RBUlRcbiAgICAgICAgJCgnLmdvX3RvJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgbGV0IHNjcm9sbF9lbCA9ICQodGhpcykuYXR0cignaHJlZicpO1xuXG4gICAgICAgICAgaWYgKCQoc2Nyb2xsX2VsKS5sZW5ndGggIT0gMCkge1xuICAgICAgICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICAgICAgICBzY3JvbGxUb3A6ICQoc2Nyb2xsX2VsKS5vZmZzZXQoKS50b3BcbiAgICAgICAgICAgIH0sIDUwMCk7XG4gICAgICAgICAgfVxuXG4gICAgICAgICAgcmV0dXJuIGZhbHNlO1xuICAgICAgICB9KTtcblxuICAgICAgICAvL2NhbGN1bGF0b3Igc2NyaXB0IFNUQVJUXG4gICAgICAgIGZ1bmN0aW9uIHBsdXMoKSB7XG4gICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0SWQnKTtcbiAgICAgICAgICBpZiAoZWwudmFsdWUudHJpbSgpID09PSAnJykgZWwudmFsdWUgPSAwO1xuICAgICAgICAgIGxldCB2YWwgPSBwYXJzZUludChlbC52YWx1ZSk7XG5cbiAgICAgICAgICBlbC52YWx1ZSA9IHZhbCArIDE7XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgcGx1c1NwYW4gPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnQ2xpY2tQbHVzJyk7XG5cbiAgICAgICAgcGx1c1NwYW4ub25jbGljayA9IGZ1bmN0aW9uKCkge1xuICAgICAgICAgIHBsdXMoKTtcbiAgICAgICAgfVxuXG5cbiAgICAgICAgZnVuY3Rpb24gbWludXMoKSB7XG4gICAgICAgICAgbGV0IGVsID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0SWQnKTtcbiAgICAgICAgICBpZiAoZWwudmFsdWUudHJpbSgpID09PSAnJykgZWwudmFsdWUgPSAwO1xuICAgICAgICAgIGxldCB2YWxtaW4gPSBwYXJzZUludChlbC52YWx1ZSk7XG5cbiAgICAgICAgICBpZiAodmFsbWluID09PSAwKSByZXR1cm47XG4gICAgICAgICAgZWwudmFsdWUgPSB2YWxtaW4gLSAxO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG1pbnVzU3BhbiA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdDbGlja01pbnVzJyk7XG5cbiAgICAgICAgbWludXNTcGFuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBtaW51cygpO1xuICAgICAgICB9XG5cbiAgICAgICAgbGV0IG9wdGlvbnNDYXIgPSB7XG4gICAgICAgICAgYXVkaToge1xuICAgICAgICAgICAgcHJpY2U6IDEwMDBcbiAgICAgICAgICB9LFxuICAgICAgICAgIGNhZGlsbGFjOiB7XG4gICAgICAgICAgICBwcmljZTogNTAwMFxuICAgICAgICAgIH0sXG4gICAgICAgICAgZmVycmFyaToge1xuICAgICAgICAgICAgcHJpY2U6IDkwMDBcbiAgICAgICAgICB9LFxuXG4gICAgICAgICAgY3VyOiBmYWxzZSxcblxuICAgICAgICAgIGNvdW50OiBmdW5jdGlvbihwcmljZSwgdGltZSkge1xuICAgICAgICAgICAgcmV0dXJuIHByaWNlICogdGltZTtcbiAgICAgICAgICB9XG4gICAgICAgIH1cblxuICAgICAgICBsZXQgY291dG5CdG5FbCA9IGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdjb3V0bkJ0bicpO1xuXG4gICAgICAgIGNvdXRuQnRuLm9uY2xpY2sgPSBmdW5jdGlvbigpIHtcbiAgICAgICAgICBsZXQgaW5wdXRUaW1lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ2lucHV0SWQnKTtcbiAgICAgICAgICBsZXQgY2hlY2tib3hlcyA9IGRvY3VtZW50LnF1ZXJ5U2VsZWN0b3JBbGwoJy5jaGVja2JveCcpO1xuICAgICAgICAgIGxldCBwcmljZUFyciA9IFtdO1xuXG4gICAgICAgICAgZm9yIChsZXQgaSA9IDA7IGkgPCBjaGVja2JveGVzLmxlbmd0aDsgaSsrKSB7XG4gICAgICAgICAgICBpZiAoY2hlY2tib3hlc1tpXS5jaGVja2VkKSB7XG4gICAgICAgICAgICAgIGxldCBuYW1lQ2FyID0gY2hlY2tib3hlc1tpXS5uYW1lO1xuICAgICAgICAgICAgICBwcmljZUFyci5wdXNoKG9wdGlvbnNDYXJbbmFtZUNhcl0ucHJpY2UpO1xuICAgICAgICAgICAgfVxuICAgICAgICAgIH1cblxuICAgICAgICAgIGlmIChwcmljZUFyci5sZW5ndGggPT09IDApIHJldHVybjtcblxuICAgICAgICAgIGxldCBzdW0gPSBwcmljZUFyci5yZWR1Y2UoKHByZXZpb3VzVmFsdWUsIGN1cnJlbnRWYWx1ZSkgPT4ge1xuICAgICAgICAgICAgcmV0dXJuIHByZXZpb3VzVmFsdWUgKyBjdXJyZW50VmFsdWU7XG4gICAgICAgICAgfSk7XG5cbiAgICAgICAgICBsZXQgdGltZSA9IHBhcnNlSW50KGlucHV0VGltZS52YWx1ZSk7XG5cbiAgICAgICAgICBsZXQgcmVzdWx0ID0gb3B0aW9uc0Nhci5jb3VudChzdW0sIHRpbWUpO1xuXG4gICAgICAgICAgbGV0IHJlc3VsdEVsZW1lbnQgPSBkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgncmVzdWx0Jyk7XG4gICAgICAgICAgcmVzdWx0RWxlbWVudC5pbm5lckhUTUwgPSByZXN1bHQ7XG4gICAgICAgIH1cbiAgICAgICAgLy9oZWFkZXIgYnVyZ2VyIHNjcmlwdCBTVEFSVFxuICAgICAgICAkKCcuaGVhZGVyLWJ1cmdlciwgLmNsb3NlJykuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICAgJCgnYm9keScpLnRvZ2dsZUNsYXNzKCdhY3RpdmF0aW9uLW1lbnUnKTtcbiAgICAgICAgfSk7XG5cblxuICAgICAgfSk7XG4iXX0=
