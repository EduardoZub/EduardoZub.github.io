"use strict";

$(document).ready(function () {
  // script for search field START
  $(".icon-header__search").click(function () {
    $("body").toggleClass("show-search-field");
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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwiZmFkZSIsImNzc0Vhc2UiLCJhY2NvcmRpb24iLCJoZWlnaHRTdHlsZSIsImljb25zIiwicmVzaXphYmxlIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsInJlc2l6ZSIsIk15TWFwIiwiaW5pdE1hcCIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJtYXBUeXBlSWQiLCJoZWFkaW5nIiwidGlsdCIsIm1hcmtlciIsIk1hcmtlciIsInBvc2l0aW9uIiwibWFwIiwiaWNvbiIsIkluZm9XaW5kb3ciLCJjb250ZW50Iiwib3BlbiIsImFkZExpc3RlbmVyIl0sIm1hcHBpbmdzIjoiQUFBQTs7QUFDQUEsRUFBRUMsUUFBRixFQUFZQyxLQUFaLENBQWtCLFlBQVc7QUFDekI7QUFDQUYsSUFBRSxzQkFBRixFQUEwQkcsS0FBMUIsQ0FBZ0MsWUFBVztBQUN2Q0gsTUFBRSxNQUFGLEVBQVVJLFdBQVYsQ0FBc0IsbUJBQXRCO0FBQ0gsR0FGRCxFQUZ5QixDQU16Qjs7QUFDQUosSUFBRSxTQUFGLEVBQWFLLEtBQWIsQ0FBbUI7QUFDZkMsY0FBVSxJQURLO0FBRWZDLFdBQU8sR0FGUTtBQUdmQyxVQUFNLElBSFM7QUFJZkMsYUFBUyxRQUpNLENBS1g7QUFDQTs7QUFOVyxHQUFuQixFQVB5QixDQWV6QjtBQUNBO0FBQ0E7QUFDQTs7QUFDQVQsSUFBRSx5QkFBRixFQUE2QkssS0FBN0IsQ0FBbUM7QUFDL0JDLGNBQVUsSUFEcUI7QUFFL0JDLFdBQU87QUFGd0IsR0FBbkMsRUFuQnlCLENBd0J6Qjs7QUFDQVAsSUFBRSxZQUFGLEVBQWdCVSxTQUFoQixDQUEwQjtBQUN0QkMsaUJBQWEsTUFEUztBQUV0QkMsV0FBTztBQUNILGdCQUFVLGNBRFA7QUFFSCxzQkFBZ0I7QUFGYjtBQUZlLEdBQTFCO0FBUUFaLElBQUUsb0JBQUYsRUFBd0JhLFNBQXhCLENBQWtDO0FBQzlCQyxlQUFXLENBRG1CO0FBRTlCQyxjQUFVLEdBRm9CO0FBRzlCQyxlQUFXLEdBSG1CO0FBSTlCQyxjQUFVLEdBSm9CO0FBSzlCQyxZQUFRLGtCQUFXO0FBQ2ZsQixRQUFFLFlBQUYsRUFBZ0JVLFNBQWhCLENBQTBCLFNBQTFCO0FBQ0g7QUFQNkIsR0FBbEMsRUFqQ3lCLENBMkN6Qjs7QUFDQVYsSUFBRSx5QkFBRixFQUE2QkcsS0FBN0IsQ0FBbUMsWUFBVztBQUMxQ0gsTUFBRSxNQUFGLEVBQVVJLFdBQVYsQ0FBc0IsVUFBdEI7QUFDSCxHQUZELEVBNUN5QixDQStDekI7QUFFSCxDQWpERCxFLENBa0RBOztBQUNBLElBQUllLEtBQUo7O0FBRUEsU0FBU0MsT0FBVCxHQUFtQjtBQUNmRCxVQUFRLElBQUlFLE9BQU9DLElBQVAsQ0FBWUMsR0FBaEIsQ0FBb0J0QixTQUFTdUIsY0FBVCxDQUF3QixLQUF4QixDQUFwQixFQUFvRDtBQUN4REMsWUFBUTtBQUFFQyxXQUFLLFNBQVA7QUFBa0JDLFdBQUssQ0FBQztBQUF4QixLQURnRDtBQUV4REMsVUFBTSxFQUZrRDtBQUd4RDtBQUNBQyxlQUFXLFdBSjZDO0FBS3hEQyxhQUFTLEVBTCtDO0FBTXhEQyxVQUFNO0FBTmtELEdBQXBELENBQVI7QUFZQSxNQUFJQyxTQUFTLElBQUlYLE9BQU9DLElBQVAsQ0FBWVcsTUFBaEIsQ0FBdUI7QUFDaENDLGNBQVU7QUFBRVIsV0FBSyxTQUFQO0FBQWtCQyxXQUFLLENBQUM7QUFBeEIsS0FEc0I7QUFFaENRLFNBQUtoQixLQUYyQjtBQUdoQ2lCLFVBQU07QUFIMEIsR0FBdkIsQ0FBYjtBQU1BLE1BQUlDLGFBQWEsSUFBSWhCLE9BQU9DLElBQVAsQ0FBWWUsVUFBaEIsQ0FBMkI7QUFDeENDLGFBQVM7QUFEK0IsR0FBM0IsQ0FBakI7QUFJQUQsYUFBV0UsSUFBWCxDQUFnQnBCLEtBQWhCLEVBQXVCYSxNQUF2QjtBQUVBQSxTQUFPUSxXQUFQLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDbkNILGVBQVdFLElBQVgsQ0FBZ0JwQixLQUFoQixFQUF1QmEsTUFBdkI7QUFDSCxHQUZEO0FBR0giLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gc2NyaXB0IGZvciBzZWFyY2ggZmllbGQgU1RBUlRcbiAgICAkKFwiLmljb24taGVhZGVyX19zZWFyY2hcIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICAgICAgICQoXCJib2R5XCIpLnRvZ2dsZUNsYXNzKFwic2hvdy1zZWFyY2gtZmllbGRcIik7XG4gICAgfSk7XG5cbiAgICAvLyBzY3JpcHQgZm9yIHNlY3Rpb24td2hhdC13ZS1kbyBzbGlkZXIgU1RBUlRcbiAgICAkKFwiLnNsaWRlclwiKS5zbGljayh7XG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogNTAwLFxuICAgICAgICBmYWRlOiB0cnVlLFxuICAgICAgICBjc3NFYXNlOiAnbGluZWFyJ1xuICAgICAgICAgICAgLy8gYXV0b3BsYXk6IHRydWUsXG4gICAgICAgICAgICAvLyBhdXRvcGxheVNwZWVkOiAyMDAwXG4gICAgfSk7XG4gICAgLy8gJChcIiNzaG93LXNsaWRlMVwiKS5vbignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICAvLyAgICAgLy8gc2xpZGVJbmRleCsrO1xuICAgIC8vIH0pO1xuICAgIC8vIHNjcmlwdCBmb3Igc2VjdGlvbi1jb21lbnRzIHNsaWRlciBTVEFSVFxuICAgICQoXCIuc2VjdGlvbi1jb21lbnRzLXNsaWRlclwiKS5zbGljayh7XG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogNTAwXG4gICAgfSk7XG5cbiAgICAvLyBzY3JpcHQgZm9yIHNlY3Rpb24td2hhdC13ZS1kbyBhY2NvcmRpb24gU1RBUlRcbiAgICAkKFwiI2FjY29yZGlvblwiKS5hY2NvcmRpb24oe1xuICAgICAgICBoZWlnaHRTdHlsZTogXCJhdXRvXCIsXG4gICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICBcImhlYWRlclwiOiBcImljb24tYWN0aXZlIFwiLFxuICAgICAgICAgICAgXCJhY3RpdmVIZWFkZXJcIjogXCJpY29uLW5vdC1hY3RpdmVcIlxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiI2FjY29yZGlvbi1yZXNpemVyXCIpLnJlc2l6YWJsZSh7XG4gICAgICAgIG1pbkhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6IDYwMCxcbiAgICAgICAgbWF4SGVpZ2h0OiAyMDAsXG4gICAgICAgIG1heFdpZHRoOiA2MDAsXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiI2FjY29yZGlvblwiKS5hY2NvcmRpb24oXCJyZWZyZXNoXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAvLyBzY3JpcHQgZm9yIG1hcCBTVEFSVFxuICAgICQoXCIubWFzay10aXRsZSwgLmNsb3NlLW1hcFwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaG93LW1hcFwiKTtcbiAgICB9KTtcbiAgICAvLyBzY3JpcHQgZm9yIG1hcCBFTkRcblxufSk7XG4vLyBzY3JpcHQgZm9yIG1hcCBTVEFSVFxudmFyIE15TWFwO1xuXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICAgIE15TWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICAgICAgY2VudGVyOiB7IGxhdDogNTYuMDA1NDc2LCBsbmc6IC00LjM1ODI4OCB9LFxuICAgICAgICB6b29tOiAxMyxcbiAgICAgICAgLy8gbWFwVHlwZUlkOiBnb29nbGUubWFwcy5NYXBUeXBlSWQuU0FURUxMSVRFLFxuICAgICAgICBtYXBUeXBlSWQ6ICdzYXRlbGxpdGUnLFxuICAgICAgICBoZWFkaW5nOiA5MCxcbiAgICAgICAgdGlsdDogNDVcblxuICAgIH0pO1xuXG5cblxuICAgIHZhciBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICAgICAgcG9zaXRpb246IHsgbGF0OiA1Ni4wMDg0NzYsIGxuZzogLTQuMzU4Mjk5IH0sXG4gICAgICAgIG1hcDogTXlNYXAsXG4gICAgICAgIGljb246IFwiaW1nL1BJTl8yLnBuZ1wiXG4gICAgfSlcblxuICAgIHZhciBJbmZvV2luZG93ID0gbmV3IGdvb2dsZS5tYXBzLkluZm9XaW5kb3coe1xuICAgICAgICBjb250ZW50OiBcIjxzcGFuPk1vR288L3NwYW4+XCJcbiAgICB9KVxuXG4gICAgSW5mb1dpbmRvdy5vcGVuKE15TWFwLCBtYXJrZXIpXG5cbiAgICBtYXJrZXIuYWRkTGlzdGVuZXIoXCJjbGlja1wiLCBmdW5jdGlvbigpIHtcbiAgICAgICAgSW5mb1dpbmRvdy5vcGVuKE15TWFwLCBtYXJrZXIpO1xuICAgIH0pXG59Il19
