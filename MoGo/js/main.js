"use strict";

$(document).ready(function () {
  // script for search field START
  $(".icon-header__search").click(function () {
    $("body").toggleClass("show-search-field");
  }); // script for modal window tabs START

  $(".tab_item").not(":first").hide();
  $(".content-block .tab").click(function () {
    $(".content-block .tab").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab_item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active"); //script for modal show START

  $(".icon-header__account, .close-modal").click(function () {
    $("body").toggleClass("show-modal-window");
  }); // script for section-what-we-do slider START

  $(".slider").slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear' // autoplay: true,
    // autoplaySpeed: 2000

  }); // $("#show-slide1").on('click', function() {
  //     // slideIndex++;
  // });
  // script for section-coments slider START

  $(".section-coments-slider").slick({
    infinite: true,
    speed: 500
  }); // script for section-what-we-do accordion START

  $("#accordion").accordion({
    heightStyle: "auto",
    icons: {
      "header": "icon-active ",
      "activeHeader": "icon-not-active"
    }
  });
  $("#accordion-resizer").resizable({
    minHeight: 0,
    minWidth: 600,
    maxHeight: 200,
    maxWidth: 600,
    resize: function resize() {
      $("#accordion").accordion("refresh");
    }
  }); // script for map START

  $(".mask-title, .close-map").click(function () {
    $("body").toggleClass("show-map");
  }); // script for map END
}); // script for map START

var MyMap;

function initMap() {
  MyMap = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 56.005476,
      lng: -4.358288
    },
    zoom: 13,
    // mapTypeId: google.maps.MapTypeId.SATELLITE,
    mapTypeId: 'satellite',
    heading: 90,
    tilt: 45
  });
  var marker = new google.maps.Marker({
    position: {
      lat: 56.008476,
      lng: -4.358299
    },
    map: MyMap,
    icon: "img/PIN_2.png"
  });
  var InfoWindow = new google.maps.InfoWindow({
    content: "<span>MoGo</span>"
  });
  InfoWindow.open(MyMap, marker);
  marker.addListener("click", function () {
    InfoWindow.open(MyMap, marker);
  });
}
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwibm90IiwiaGlkZSIsInJlbW92ZUNsYXNzIiwiZXEiLCJpbmRleCIsImFkZENsYXNzIiwiZmFkZUluIiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwiZmFkZSIsImNzc0Vhc2UiLCJhY2NvcmRpb24iLCJoZWlnaHRTdHlsZSIsImljb25zIiwicmVzaXphYmxlIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsInJlc2l6ZSIsIk15TWFwIiwiaW5pdE1hcCIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJtYXBUeXBlSWQiLCJoZWFkaW5nIiwidGlsdCIsIm1hcmtlciIsIk1hcmtlciIsInBvc2l0aW9uIiwibWFwIiwiaWNvbiIsIkluZm9XaW5kb3ciLCJjb250ZW50Iiwib3BlbiIsImFkZExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekI7QUFDQUYsSUFBRSxzQkFBRixFQUEwQkcsS0FBMUIsQ0FBZ0MsWUFBVztBQUN2Q0gsTUFBRSxNQUFGLEVBQVVJLFdBQVYsQ0FBc0IsbUJBQXRCO0FBQ0gsR0FGRCxFQUZ5QixDQU16Qjs7QUFDQUosSUFBRSxXQUFGLEVBQWVLLEdBQWYsQ0FBbUIsUUFBbkIsRUFBNkJDLElBQTdCO0FBQ0FOLElBQUUscUJBQUYsRUFBeUJHLEtBQXpCLENBQStCLFlBQVc7QUFDdENILE1BQUUscUJBQUYsRUFBeUJPLFdBQXpCLENBQXFDLFFBQXJDLEVBQStDQyxFQUEvQyxDQUFrRFIsRUFBRSxJQUFGLEVBQVFTLEtBQVIsRUFBbEQsRUFBbUVDLFFBQW5FLENBQTRFLFFBQTVFO0FBQ0FWLE1BQUUsV0FBRixFQUFlTSxJQUFmLEdBQXNCRSxFQUF0QixDQUF5QlIsRUFBRSxJQUFGLEVBQVFTLEtBQVIsRUFBekIsRUFBMENFLE1BQTFDO0FBQ0gsR0FIRCxFQUdHSCxFQUhILENBR00sQ0FITixFQUdTRSxRQUhULENBR2tCLFFBSGxCLEVBUnlCLENBYXpCOztBQUNBVixJQUFFLHFDQUFGLEVBQXlDRyxLQUF6QyxDQUErQyxZQUFXO0FBQ3RESCxNQUFFLE1BQUYsRUFBVUksV0FBVixDQUFzQixtQkFBdEI7QUFDSCxHQUZELEVBZHlCLENBa0J6Qjs7QUFDQUosSUFBRSxTQUFGLEVBQWFZLEtBQWIsQ0FBbUI7QUFDZkMsY0FBVSxJQURLO0FBRWZDLFdBQU8sR0FGUTtBQUdmQyxVQUFNLElBSFM7QUFJZkMsYUFBUyxRQUpNLENBS1g7QUFDQTs7QUFOVyxHQUFuQixFQW5CeUIsQ0EyQnpCO0FBQ0E7QUFDQTtBQUNBOztBQUNBaEIsSUFBRSx5QkFBRixFQUE2QlksS0FBN0IsQ0FBbUM7QUFDL0JDLGNBQVUsSUFEcUI7QUFFL0JDLFdBQU87QUFGd0IsR0FBbkMsRUEvQnlCLENBb0N6Qjs7QUFDQWQsSUFBRSxZQUFGLEVBQWdCaUIsU0FBaEIsQ0FBMEI7QUFDdEJDLGlCQUFhLE1BRFM7QUFFdEJDLFdBQU87QUFDSCxnQkFBVSxjQURQO0FBRUgsc0JBQWdCO0FBRmI7QUFGZSxHQUExQjtBQVFBbkIsSUFBRSxvQkFBRixFQUF3Qm9CLFNBQXhCLENBQWtDO0FBQzlCQyxlQUFXLENBRG1CO0FBRTlCQyxjQUFVLEdBRm9CO0FBRzlCQyxlQUFXLEdBSG1CO0FBSTlCQyxjQUFVLEdBSm9CO0FBSzlCQyxZQUFRLGtCQUFXO0FBQ2Z6QixRQUFFLFlBQUYsRUFBZ0JpQixTQUFoQixDQUEwQixTQUExQjtBQUNIO0FBUDZCLEdBQWxDLEVBN0N5QixDQXVEekI7O0FBQ0FqQixJQUFFLHlCQUFGLEVBQTZCRyxLQUE3QixDQUFtQyxZQUFXO0FBQzFDSCxNQUFFLE1BQUYsRUFBVUksV0FBVixDQUFzQixVQUF0QjtBQUNILEdBRkQsRUF4RHlCLENBMkR6QjtBQUVILENBN0RELEUsQ0E4REE7O0FBQ0EsSUFBSXNCLEtBQUo7O0FBRUEsU0FBU0MsT0FBVCxHQUFtQjtBQUNmRCxVQUFRLElBQUlFLE9BQU9DLElBQVAsQ0FBWUMsR0FBaEIsQ0FBb0I3QixTQUFTOEIsY0FBVCxDQUF3QixLQUF4QixDQUFwQixFQUFvRDtBQUN4REMsWUFBUTtBQUFFQyxXQUFLLFNBQVA7QUFBa0JDLFdBQUssQ0FBQztBQUF4QixLQURnRDtBQUV4REMsVUFBTSxFQUZrRDtBQUd4RDtBQUNBQyxlQUFXLFdBSjZDO0FBS3hEQyxhQUFTLEVBTCtDO0FBTXhEQyxVQUFNO0FBTmtELEdBQXBELENBQVI7QUFZQSxNQUFJQyxTQUFTLElBQUlYLE9BQU9DLElBQVAsQ0FBWVcsTUFBaEIsQ0FBdUI7QUFDaENDLGNBQVU7QUFBRVIsV0FBSyxTQUFQO0FBQWtCQyxXQUFLLENBQUM7QUFBeEIsS0FEc0I7QUFFaENRLFNBQUtoQixLQUYyQjtBQUdoQ2lCLFVBQU07QUFIMEIsR0FBdkIsQ0FBYjtBQU1BLE1BQUlDLGFBQWEsSUFBSWhCLE9BQU9DLElBQVAsQ0FBWWUsVUFBaEIsQ0FBMkI7QUFDeENDLGFBQVM7QUFEK0IsR0FBM0IsQ0FBakI7QUFJQUQsYUFBV0UsSUFBWCxDQUFnQnBCLEtBQWhCLEVBQXVCYSxNQUF2QjtBQUVBQSxTQUFPUSxXQUFQLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDbkNILGVBQVdFLElBQVgsQ0FBZ0JwQixLQUFoQixFQUF1QmEsTUFBdkI7QUFDSCxHQUZEO0FBR0giLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gc2NyaXB0IGZvciBzZWFyY2ggZmllbGQgU1RBUlRcbiAgICAkKFwiLmljb24taGVhZGVyX19zZWFyY2hcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwic2hvdy1zZWFyY2gtZmllbGRcIik7XG4gICAgfSk7XG5cbiAgICAvLyBzY3JpcHQgZm9yIG1vZGFsIHdpbmRvdyB0YWJzIFNUQVJUXG4gICAgJChcIi50YWJfaXRlbVwiKS5ub3QoXCI6Zmlyc3RcIikuaGlkZSgpO1xuICAgICQoXCIuY29udGVudC1ibG9jayAudGFiXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiLmNvbnRlbnQtYmxvY2sgLnRhYlwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5lcSgkKHRoaXMpLmluZGV4KCkpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICAgICAkKFwiLnRhYl9pdGVtXCIpLmhpZGUoKS5lcSgkKHRoaXMpLmluZGV4KCkpLmZhZGVJbigpXG4gICAgfSkuZXEoMCkuYWRkQ2xhc3MoXCJhY3RpdmVcIik7XG5cbiAgICAvL3NjcmlwdCBmb3IgbW9kYWwgc2hvdyBTVEFSVFxuICAgICQoXCIuaWNvbi1oZWFkZXJfX2FjY291bnQsIC5jbG9zZS1tb2RhbFwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaG93LW1vZGFsLXdpbmRvd1wiKTtcbiAgICB9KTtcblxuICAgIC8vIHNjcmlwdCBmb3Igc2VjdGlvbi13aGF0LXdlLWRvIHNsaWRlciBTVEFSVFxuICAgICQoXCIuc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInXG4gICAgICAgICAgICAvLyBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgICAgIC8vIGF1dG9wbGF5U3BlZWQ6IDIwMDBcbiAgICB9KTtcbiAgICAvLyAkKFwiI3Nob3ctc2xpZGUxXCIpLm9uKCdjbGljaycsIGZ1bmN0aW9uKCkge1xuICAgIC8vICAgICAvLyBzbGlkZUluZGV4Kys7XG4gICAgLy8gfSk7XG4gICAgLy8gc2NyaXB0IGZvciBzZWN0aW9uLWNvbWVudHMgc2xpZGVyIFNUQVJUXG4gICAgJChcIi5zZWN0aW9uLWNvbWVudHMtc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA1MDBcbiAgICB9KTtcblxuICAgIC8vIHNjcmlwdCBmb3Igc2VjdGlvbi13aGF0LXdlLWRvIGFjY29yZGlvbiBTVEFSVFxuICAgICQoXCIjYWNjb3JkaW9uXCIpLmFjY29yZGlvbih7XG4gICAgICAgIGhlaWdodFN0eWxlOiBcImF1dG9cIixcbiAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgIFwiaGVhZGVyXCI6IFwiaWNvbi1hY3RpdmUgXCIsXG4gICAgICAgICAgICBcImFjdGl2ZUhlYWRlclwiOiBcImljb24tbm90LWFjdGl2ZVwiXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIjYWNjb3JkaW9uLXJlc2l6ZXJcIikucmVzaXphYmxlKHtcbiAgICAgICAgbWluSGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogNjAwLFxuICAgICAgICBtYXhIZWlnaHQ6IDIwMCxcbiAgICAgICAgbWF4V2lkdGg6IDYwMCxcbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIjYWNjb3JkaW9uXCIpLmFjY29yZGlvbihcInJlZnJlc2hcIik7XG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgIC8vIHNjcmlwdCBmb3IgbWFwIFNUQVJUXG4gICAgJChcIi5tYXNrLXRpdGxlLCAuY2xvc2UtbWFwXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcInNob3ctbWFwXCIpO1xuICAgIH0pO1xuICAgIC8vIHNjcmlwdCBmb3IgbWFwIEVORFxuXG59KTtcbi8vIHNjcmlwdCBmb3IgbWFwIFNUQVJUXG52YXIgTXlNYXA7XG5cbmZ1bmN0aW9uIGluaXRNYXAoKSB7XG4gICAgTXlNYXAgPSBuZXcgZ29vZ2xlLm1hcHMuTWFwKGRvY3VtZW50LmdldEVsZW1lbnRCeUlkKCdtYXAnKSwge1xuICAgICAgICBjZW50ZXI6IHsgbGF0OiA1Ni4wMDU0NzYsIGxuZzogLTQuMzU4Mjg4IH0sXG4gICAgICAgIHpvb206IDEzLFxuICAgICAgICAvLyBtYXBUeXBlSWQ6IGdvb2dsZS5tYXBzLk1hcFR5cGVJZC5TQVRFTExJVEUsXG4gICAgICAgIG1hcFR5cGVJZDogJ3NhdGVsbGl0ZScsXG4gICAgICAgIGhlYWRpbmc6IDkwLFxuICAgICAgICB0aWx0OiA0NVxuXG4gICAgfSk7XG5cblxuXG4gICAgdmFyIG1hcmtlciA9IG5ldyBnb29nbGUubWFwcy5NYXJrZXIoe1xuICAgICAgICBwb3NpdGlvbjogeyBsYXQ6IDU2LjAwODQ3NiwgbG5nOiAtNC4zNTgyOTkgfSxcbiAgICAgICAgbWFwOiBNeU1hcCxcbiAgICAgICAgaWNvbjogXCJpbWcvUElOXzIucG5nXCJcbiAgICB9KVxuXG4gICAgdmFyIEluZm9XaW5kb3cgPSBuZXcgZ29vZ2xlLm1hcHMuSW5mb1dpbmRvdyh7XG4gICAgICAgIGNvbnRlbnQ6IFwiPHNwYW4+TW9Hbzwvc3Bhbj5cIlxuICAgIH0pXG5cbiAgICBJbmZvV2luZG93Lm9wZW4oTXlNYXAsIG1hcmtlcilcblxuICAgIG1hcmtlci5hZGRMaXN0ZW5lcihcImNsaWNrXCIsIGZ1bmN0aW9uKCkge1xuICAgICAgICBJbmZvV2luZG93Lm9wZW4oTXlNYXAsIG1hcmtlcik7XG4gICAgfSlcbn0iXX0=
