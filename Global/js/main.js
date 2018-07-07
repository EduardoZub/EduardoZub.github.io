"use strict";

$(document).ready(function() {
  // slick slider script START
  $('.selected-work-slider').slick({
    infinite: true,
    centerMode: true,
    centerPadding: '0px',
    slidesToShow: 3,
    speed: 1000,
    autoplay: true,
    autoplaySpeed: 1000,
    responsive: [{
      breakpoint: 900,
      settings: {
        slidesToShow: 1
      }
    }]
  }); // tabs script START

  $(".tab__item").not(":first").hide();
  $(".tabs-block .tab-title").click(function() {
    $(".tabs-block .tab-title").removeClass("active").eq($(this).index()).addClass("active");
    $(".tab__item").hide().eq($(this).index()).fadeIn();
  }).eq(0).addClass("active");
}); //script for chexkbox START

$(".checkbox-btn").click(function() {
  $(this).toggleClass("checkbox-ective");
}); //script for map START

function initMap() {
  var Mymap;
  Mymap = new google.maps.Map(document.getElementById('map'), {
    center: {
      lat: 50.0646501,
      lng: 19.9449799
    },
    zoom: 4,
    // scrollwheel:  false,
    styles: [{
      "elementType": "geometry",
      "stylers": [{
        "color": "#212121"
      }]
    }, {
      "elementType": "labels.icon",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#212121"
      }]
    }, {
      "featureType": "administrative",
      "elementType": "geometry",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "administrative.country",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#9e9e9e"
      }]
    }, {
      "featureType": "administrative.land_parcel",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "administrative.locality",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#bdbdbd"
      }]
    }, {
      "featureType": "poi",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "geometry",
      "stylers": [{
        "color": "#181818"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "poi.park",
      "elementType": "labels.text.stroke",
      "stylers": [{
        "color": "#1b1b1b"
      }]
    }, {
      "featureType": "road",
      "elementType": "geometry.fill",
      "stylers": [{
        "color": "#2c2c2c"
      }]
    }, {
      "featureType": "road",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#8a8a8a"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "geometry",
      "stylers": [{
        "color": "#373737"
      }]
    }, {
      "featureType": "road.arterial",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "geometry",
      "stylers": [{
        "color": "#3c3c3c"
      }]
    }, {
      "featureType": "road.highway",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.highway.controlled_access",
      "elementType": "geometry",
      "stylers": [{
        "color": "#4e4e4e"
      }]
    }, {
      "featureType": "road.local",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels",
      "stylers": [{
        "visibility": "off"
      }]
    }, {
      "featureType": "road.local",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#616161"
      }]
    }, {
      "featureType": "transit",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#757575"
      }]
    }, {
      "featureType": "water",
      "elementType": "geometry",
      "stylers": [{
        "color": "#000000"
      }]
    }, {
      "featureType": "water",
      "elementType": "labels.text.fill",
      "stylers": [{
        "color": "#3d3d3d"
      }]
    }]
  });
  var marker;
  marker = new google.maps.Marker({
    position: {
      lat: 50.049683,
      lng: 19.944544
    },
    map: Mymap,
    icon: "img/marker.png"
  }); // $.getJSON("../lib/map-style.json", function(data) {
  //   Mymap.setOptions({styles: data});
  // });

  var InfoWindow;
  InfoWindow = new google.maps.InfoWindow({
    content: '<h1>Global</h1>'
  });
  InfoWindow.open(Mymap, marker);
  marker.addListener('click', function() {
    InfoWindow.open(Mymap, marker);
  }); //script parallax START

  var scene = document.getElementById('scene');
  var parallaxInstance = new Parallax(scene);

  //script pagePiling START

  function checkSize() {
    if (window.outerWidth > 1024 || window.innerWidth > 1024) {
      $('body').removeClass('no-overflow');
      $('.MAIN').attr('id', 'pagepiling');
      $('#pagepiling').pagepiling({
        menu: '#main-menu',
        anchors: ['section1', 'section2', 'section3', 'section4', 'section5'],
        normalScrollElements: '#map'
      });
      localStorage.setItem('reloaded', 'd');
    } else {
      $('body').addClass('no-overflow');
    }
  }

  checkSize();

  function reloadPage() {
    var reload = localStorage.getItem('reloaded');

    if (reload === 'd') {
      if (window.outerWidth < 1024 || window.innerWidth < 1024) {
        localStorage.setItem('reloaded', 'm');
        location.reload();
      }
    } else {
      checkSize();
    }
  }

  $('.go_to').click(function() {
    if (window.outerWidth > 1024 || window.innerWidth > 1024) return ;
    var scroll_el = $(this).attr('href');

    if ($(scroll_el).length != 0) {
      $('html, body').animate({
        scrollTop: $(scroll_el).offset().top
      }, 500);
      $('body').toggleClass('activation-menu');
    }

    return false;
  });
  reloadPage();
  window.addEventListener('resize', reloadPage); //scruipt for menu START

  $('.header-burger,.menu-switch, .menu-text__wrap-text').click(function() {
    $('body').toggleClass('activation-menu');
  });
}

; //
//
//
//
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJzbGljayIsImluZmluaXRlIiwiY2VudGVyTW9kZSIsImNlbnRlclBhZGRpbmciLCJzbGlkZXNUb1Nob3ciLCJzcGVlZCIsImF1dG9wbGF5U3BlZWQiLCJyZXNwb25zaXZlIiwiYnJlYWtwb2ludCIsInNldHRpbmdzIiwibm90IiwiaGlkZSIsImNsaWNrIiwicmVtb3ZlQ2xhc3MiLCJlcSIsImluZGV4IiwiYWRkQ2xhc3MiLCJmYWRlSW4iLCJ0b2dnbGVDbGFzcyIsImluaXRNYXAiLCJNeW1hcCIsImdvb2dsZSIsIm1hcHMiLCJNYXAiLCJnZXRFbGVtZW50QnlJZCIsImNlbnRlciIsImxhdCIsImxuZyIsInpvb20iLCJzdHlsZXMiLCJtYXJrZXIiLCJNYXJrZXIiLCJwb3NpdGlvbiIsIm1hcCIsImljb24iLCJJbmZvV2luZG93IiwiY29udGVudCIsIm9wZW4iLCJhZGRMaXN0ZW5lciIsInNjZW5lIiwicGFyYWxsYXhJbnN0YW5jZSIsIlBhcmFsbGF4IiwiY2hlY2tTaXplIiwid2luZG93Iiwib3V0ZXJXaWR0aCIsImlubmVyV2lkdGgiLCJhdHRyIiwicGFnZXBpbGluZyIsIm5vcm1hbFNjcm9sbEVsZW1lbnRzIiwibG9jYWxTdG9yYWdlIiwic2V0SXRlbSIsInJlbG9hZFBhZ2UiLCJyZWxvYWQiLCJnZXRJdGVtIiwibG9jYXRpb24iLCJzY3JvbGxfZWwiLCJsZW5ndGgiLCJhbmltYXRlIiwic2Nyb2xsVG9wIiwib2Zmc2V0IiwidG9wIiwiYWRkRXZlbnRMaXN0ZW5lciJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBRUFBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFXO0FBQzNCO0FBQ0FGLElBQUUsdUJBQUYsRUFBMkJHLEtBQTNCLENBQWlDO0FBQy9CQyxjQUFVLElBRHFCO0FBRS9CQyxnQkFBWSxJQUZtQjtBQUcvQkMsbUJBQWUsS0FIZ0I7QUFJL0JDLGtCQUFjLENBSmlCO0FBSy9CQyxXQUFPLElBTHdCO0FBTS9CO0FBQ0FDLG1CQUFlLElBUGdCO0FBUS9CQyxnQkFBWSxDQUFDO0FBQ1hDLGtCQUFZLEdBREQ7QUFFWEMsZ0JBQVU7QUFDUkwsc0JBQWM7QUFETjtBQUZDLEtBQUQ7QUFSbUIsR0FBakMsRUFGMkIsQ0FrQjNCOztBQUVBUCxJQUFFLFlBQUYsRUFBZ0JhLEdBQWhCLENBQW9CLFFBQXBCLEVBQThCQyxJQUE5QjtBQUNBZCxJQUFFLHdCQUFGLEVBQTRCZSxLQUE1QixDQUFrQyxZQUFXO0FBQzNDZixNQUFFLHdCQUFGLEVBQTRCZ0IsV0FBNUIsQ0FBd0MsUUFBeEMsRUFBa0RDLEVBQWxELENBQXFEakIsRUFBRSxJQUFGLEVBQVFrQixLQUFSLEVBQXJELEVBQXNFQyxRQUF0RSxDQUErRSxRQUEvRTtBQUNBbkIsTUFBRSxZQUFGLEVBQWdCYyxJQUFoQixHQUF1QkcsRUFBdkIsQ0FBMEJqQixFQUFFLElBQUYsRUFBUWtCLEtBQVIsRUFBMUIsRUFBMkNFLE1BQTNDO0FBQ0QsR0FIRCxFQUdHSCxFQUhILENBR00sQ0FITixFQUdTRSxRQUhULENBR2tCLFFBSGxCO0FBSUQsQ0F6QkQsRSxDQTJCQTs7QUFDQW5CLEVBQUUsZUFBRixFQUFtQmUsS0FBbkIsQ0FBeUIsWUFBVztBQUNsQ2YsSUFBRSxJQUFGLEVBQVFxQixXQUFSLENBQW9CLGlCQUFwQjtBQUNELENBRkQsRSxDQUlBOztBQUVBLFNBQVNDLE9BQVQsR0FBbUI7QUFDakIsTUFBSUMsS0FBSjtBQUNBQSxVQUFRLElBQUlDLE9BQU9DLElBQVAsQ0FBWUMsR0FBaEIsQ0FBb0J6QixTQUFTMEIsY0FBVCxDQUF3QixLQUF4QixDQUFwQixFQUFvRDtBQUMxREMsWUFBUTtBQUNOQyxXQUFLLFVBREM7QUFFTkMsV0FBSztBQUZDLEtBRGtEO0FBSzFEQyxVQUFNLENBTG9EO0FBTTFEO0FBQ0FDLFlBQVEsQ0FBQztBQUNMLHFCQUFlLFVBRFY7QUFFTCxpQkFBVyxDQUFDO0FBQ1YsaUJBQVM7QUFEQyxPQUFEO0FBRk4sS0FBRCxFQU1OO0FBQ0UscUJBQWUsYUFEakI7QUFFRSxpQkFBVyxDQUFDO0FBQ1Ysc0JBQWM7QUFESixPQUFEO0FBRmIsS0FOTSxFQVlOO0FBQ0UscUJBQWUsa0JBRGpCO0FBRUUsaUJBQVcsQ0FBQztBQUNWLGlCQUFTO0FBREMsT0FBRDtBQUZiLEtBWk0sRUFrQk47QUFDRSxxQkFBZSxvQkFEakI7QUFFRSxpQkFBVyxDQUFDO0FBQ1YsaUJBQVM7QUFEQyxPQUFEO0FBRmIsS0FsQk0sRUF3Qk47QUFDRSxxQkFBZSxnQkFEakI7QUFFRSxxQkFBZSxVQUZqQjtBQUdFLGlCQUFXLENBQUM7QUFDVixpQkFBUztBQURDLE9BQUQ7QUFIYixLQXhCTSxFQStCTjtBQUNFLHFCQUFlLHdCQURqQjtBQUVFLHFCQUFlLGtCQUZqQjtBQUdFLGlCQUFXLENBQUM7QUFDVixpQkFBUztBQURDLE9BQUQ7QUFIYixLQS9CTSxFQXNDTjtBQUNFLHFCQUFlLDRCQURqQjtBQUVFLHFCQUFlLFFBRmpCO0FBR0UsaUJBQVcsQ0FBQztBQUNWLHNCQUFjO0FBREosT0FBRDtBQUhiLEtBdENNLEVBNkNOO0FBQ0UscUJBQWUseUJBRGpCO0FBRUUscUJBQWUsa0JBRmpCO0FBR0UsaUJBQVcsQ0FBQztBQUNWLGlCQUFTO0FBREMsT0FBRDtBQUhiLEtBN0NNLEVBb0ROO0FBQ0UscUJBQWUsS0FEakI7QUFFRSxxQkFBZSxrQkFGakI7QUFHRSxpQkFBVyxDQUFDO0FBQ1YsaUJBQVM7QUFEQyxPQUFEO0FBSGIsS0FwRE0sRUEyRE47QUFDRSxxQkFBZSxVQURqQjtBQUVFLHFCQUFlLFVBRmpCO0FBR0UsaUJBQVcsQ0FBQztBQUNWLGlCQUFTO0FBREMsT0FBRDtBQUhiLEtBM0RNLEVBa0VOO0FBQ0UscUJBQWUsVUFEakI7QUFFRSxxQkFBZSxrQkFGakI7QUFHRSxpQkFBVyxDQUFDO0FBQ1YsaUJBQVM7QUFEQyxPQUFEO0FBSGIsS0FsRU0sRUF5RU47QUFDRSxxQkFBZSxVQURqQjtBQUVFLHFCQUFlLG9CQUZqQjtBQUdFLGlCQUFXLENBQUM7QUFDVixpQkFBUztBQURDLE9BQUQ7QUFIYixLQXpFTSxFQWdGTjtBQUNFLHFCQUFlLE1BRGpCO0FBRUUscUJBQWUsZUFGakI7QUFHRSxpQkFBVyxDQUFDO0FBQ1YsaUJBQVM7QUFEQyxPQUFEO0FBSGIsS0FoRk0sRUF1Rk47QUFDRSxxQkFBZSxNQURqQjtBQUVFLHFCQUFlLGtCQUZqQjtBQUdFLGlCQUFXLENBQUM7QUFDVixpQkFBUztBQURDLE9BQUQ7QUFIYixLQXZGTSxFQThGTjtBQUNFLHFCQUFlLGVBRGpCO0FBRUUscUJBQWUsVUFGakI7QUFHRSxpQkFBVyxDQUFDO0FBQ1YsaUJBQVM7QUFEQyxPQUFEO0FBSGIsS0E5Rk0sRUFxR047QUFDRSxxQkFBZSxlQURqQjtBQUVFLHFCQUFlLFFBRmpCO0FBR0UsaUJBQVcsQ0FBQztBQUNWLHNCQUFjO0FBREosT0FBRDtBQUhiLEtBckdNLEVBNEdOO0FBQ0UscUJBQWUsY0FEakI7QUFFRSxxQkFBZSxVQUZqQjtBQUdFLGlCQUFXLENBQUM7QUFDVixpQkFBUztBQURDLE9BQUQ7QUFIYixLQTVHTSxFQW1ITjtBQUNFLHFCQUFlLGNBRGpCO0FBRUUscUJBQWUsUUFGakI7QUFHRSxpQkFBVyxDQUFDO0FBQ1Ysc0JBQWM7QUFESixPQUFEO0FBSGIsS0FuSE0sRUEwSE47QUFDRSxxQkFBZSxnQ0FEakI7QUFFRSxxQkFBZSxVQUZqQjtBQUdFLGlCQUFXLENBQUM7QUFDVixpQkFBUztBQURDLE9BQUQ7QUFIYixLQTFITSxFQWlJTjtBQUNFLHFCQUFlLFlBRGpCO0FBRUUsaUJBQVcsQ0FBQztBQUNWLHNCQUFjO0FBREosT0FBRDtBQUZiLEtBaklNLEVBdUlOO0FBQ0UscUJBQWUsWUFEakI7QUFFRSxxQkFBZSxRQUZqQjtBQUdFLGlCQUFXLENBQUM7QUFDVixzQkFBYztBQURKLE9BQUQ7QUFIYixLQXZJTSxFQThJTjtBQUNFLHFCQUFlLFlBRGpCO0FBRUUscUJBQWUsa0JBRmpCO0FBR0UsaUJBQVcsQ0FBQztBQUNWLGlCQUFTO0FBREMsT0FBRDtBQUhiLEtBOUlNLEVBcUpOO0FBQ0UscUJBQWUsU0FEakI7QUFFRSxxQkFBZSxrQkFGakI7QUFHRSxpQkFBVyxDQUFDO0FBQ1YsaUJBQVM7QUFEQyxPQUFEO0FBSGIsS0FySk0sRUE0Sk47QUFDRSxxQkFBZSxPQURqQjtBQUVFLHFCQUFlLFVBRmpCO0FBR0UsaUJBQVcsQ0FBQztBQUNWLGlCQUFTO0FBREMsT0FBRDtBQUhiLEtBNUpNLEVBbUtOO0FBQ0UscUJBQWUsT0FEakI7QUFFRSxxQkFBZSxrQkFGakI7QUFHRSxpQkFBVyxDQUFDO0FBQ1YsaUJBQVM7QUFEQyxPQUFEO0FBSGIsS0FuS007QUFQa0QsR0FBcEQsQ0FBUjtBQXFMQSxNQUFJQyxNQUFKO0FBQ0FBLFdBQVMsSUFBSVQsT0FBT0MsSUFBUCxDQUFZUyxNQUFoQixDQUF1QjtBQUM5QkMsY0FBVTtBQUNSTixXQUFLLFNBREc7QUFFUkMsV0FBSztBQUZHLEtBRG9CO0FBSzlCTSxTQUFLYixLQUx5QjtBQU05QmMsVUFBTTtBQU53QixHQUF2QixDQUFULENBeExpQixDQWtNakI7QUFDQTtBQUNBOztBQUVBLE1BQUlDLFVBQUo7QUFDQUEsZUFBYSxJQUFJZCxPQUFPQyxJQUFQLENBQVlhLFVBQWhCLENBQTJCO0FBQ3RDQyxhQUFTO0FBRDZCLEdBQTNCLENBQWI7QUFHQUQsYUFBV0UsSUFBWCxDQUFnQmpCLEtBQWhCLEVBQXVCVSxNQUF2QjtBQUVBQSxTQUFPUSxXQUFQLENBQW1CLE9BQW5CLEVBQTRCLFlBQVc7QUFDckNILGVBQVdFLElBQVgsQ0FBZ0JqQixLQUFoQixFQUF1QlUsTUFBdkI7QUFDRCxHQUZELEVBNU1pQixDQWlOakI7O0FBQ0EsTUFBSVMsUUFBUXpDLFNBQVMwQixjQUFULENBQXdCLE9BQXhCLENBQVo7QUFDQSxNQUFJZ0IsbUJBQW1CLElBQUlDLFFBQUosQ0FBYUYsS0FBYixDQUF2QixDQW5OaUIsQ0FzTmpCOztBQUNBLFdBQVNHLFNBQVQsR0FBcUI7QUFDbkIsUUFBSUMsT0FBT0MsVUFBUCxHQUFvQixJQUFwQixJQUE0QkQsT0FBT0UsVUFBUCxHQUFvQixJQUFwRCxFQUEwRDtBQUN4RGhELFFBQUUsTUFBRixFQUFVZ0IsV0FBVixDQUFzQixhQUF0QjtBQUNBaEIsUUFBRSxPQUFGLEVBQVdpRCxJQUFYLENBQWdCLElBQWhCLEVBQXNCLFlBQXRCO0FBQ0FqRCxRQUFFLGFBQUYsRUFBaUJrRCxVQUFqQixDQUE0QjtBQUMxQkMsOEJBQXNCO0FBREksT0FBNUI7QUFHQUMsbUJBQWFDLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUMsR0FBakM7QUFDRCxLQVBELE1BT087QUFDTHJELFFBQUUsTUFBRixFQUFVbUIsUUFBVixDQUFtQixhQUFuQjtBQUNEO0FBQ0Y7O0FBRUQwQjs7QUFFQSxXQUFTUyxVQUFULEdBQXNCO0FBQ3BCLFFBQUlDLFNBQVNILGFBQWFJLE9BQWIsQ0FBcUIsVUFBckIsQ0FBYjs7QUFDQSxRQUFJRCxXQUFXLEdBQWYsRUFBb0I7QUFDbEIsVUFBSVQsT0FBT0MsVUFBUCxHQUFvQixJQUFwQixJQUE0QkQsT0FBT0UsVUFBUCxHQUFvQixJQUFwRCxFQUEwRDtBQUN4REkscUJBQWFDLE9BQWIsQ0FBcUIsVUFBckIsRUFBaUMsR0FBakM7QUFDQUksaUJBQVNGLE1BQVQ7QUFDRDtBQUNGLEtBTEQsTUFLTztBQUNMVjtBQUNEO0FBQ0Y7O0FBRUQ3QyxJQUFFLFFBQUYsRUFBWWUsS0FBWixDQUFrQixZQUFXO0FBQzNCLFFBQUcrQixPQUFPQyxVQUFQLEdBQW9CLElBQXBCLElBQTRCRCxPQUFPRSxVQUFQLEdBQW9CLElBQW5ELEVBQXlELE9BQU8sS0FBUDtBQUN6RCxRQUFJVSxZQUFZMUQsRUFBRSxJQUFGLEVBQVFpRCxJQUFSLENBQWEsTUFBYixDQUFoQjs7QUFDQSxRQUFJakQsRUFBRTBELFNBQUYsRUFBYUMsTUFBYixJQUF1QixDQUEzQixFQUE4QjtBQUM1QjNELFFBQUUsWUFBRixFQUFnQjRELE9BQWhCLENBQXdCO0FBQ3RCQyxtQkFBVzdELEVBQUUwRCxTQUFGLEVBQWFJLE1BQWIsR0FBc0JDO0FBRFgsT0FBeEIsRUFFRyxHQUZIO0FBR0EvRCxRQUFFLE1BQUYsRUFBVXFCLFdBQVYsQ0FBc0IsaUJBQXRCO0FBQ0Q7O0FBQ0QsV0FBTyxLQUFQO0FBQ0QsR0FWRDtBQVlBaUM7QUFDQVIsU0FBT2tCLGdCQUFQLENBQXdCLFFBQXhCLEVBQWtDVixVQUFsQyxFQS9QaUIsQ0FpUWpCOztBQUNBdEQsSUFBRSw2QkFBRixFQUFpQ2UsS0FBakMsQ0FBdUMsWUFBVztBQUNoRGYsTUFBRSxNQUFGLEVBQVVxQixXQUFWLENBQXNCLGlCQUF0QjtBQUNELEdBRkQ7QUFJRDs7QUFBQSxDLENBRUQ7QUFDQTtBQUNBO0FBQ0EiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuXG4kKGRvY3VtZW50KS5yZWFkeShmdW5jdGlvbigpIHtcbiAgLy8gc2xpY2sgc2xpZGVyIHNjcmlwdCBTVEFSVFxuICAkKCcuc2VsZWN0ZWQtd29yay1zbGlkZXInKS5zbGljayh7XG4gICAgaW5maW5pdGU6IHRydWUsXG4gICAgY2VudGVyTW9kZTogdHJ1ZSxcbiAgICBjZW50ZXJQYWRkaW5nOiAnMHB4JyxcbiAgICBzbGlkZXNUb1Nob3c6IDMsXG4gICAgc3BlZWQ6IDEwMDAsXG4gICAgLy8gYXV0b3BsYXk6IHRydWUsXG4gICAgYXV0b3BsYXlTcGVlZDogMTAwMCxcbiAgICByZXNwb25zaXZlOiBbe1xuICAgICAgYnJlYWtwb2ludDogOTAwLFxuICAgICAgc2V0dGluZ3M6IHtcbiAgICAgICAgc2xpZGVzVG9TaG93OiAxXG4gICAgICB9XG4gICAgfV1cbiAgfSk7XG5cbiAgLy8gdGFicyBzY3JpcHQgU1RBUlRcblxuICAkKFwiLnRhYl9faXRlbVwiKS5ub3QoXCI6Zmlyc3RcIikuaGlkZSgpO1xuICAkKFwiLnRhYnMtYmxvY2sgLnRhYi10aXRsZVwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKFwiLnRhYnMtYmxvY2sgLnRhYi10aXRsZVwiKS5yZW1vdmVDbGFzcyhcImFjdGl2ZVwiKS5lcSgkKHRoaXMpLmluZGV4KCkpLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xuICAgICQoXCIudGFiX19pdGVtXCIpLmhpZGUoKS5lcSgkKHRoaXMpLmluZGV4KCkpLmZhZGVJbigpXG4gIH0pLmVxKDApLmFkZENsYXNzKFwiYWN0aXZlXCIpO1xufSk7XG5cbi8vc2NyaXB0IGZvciBjaGV4a2JveCBTVEFSVFxuJChcIi5jaGVja2JveC1idG5cIikuY2xpY2soZnVuY3Rpb24oKSB7XG4gICQodGhpcykudG9nZ2xlQ2xhc3MoXCJjaGVja2JveC1lY3RpdmVcIik7XG59KTtcblxuLy9zY3JpcHQgZm9yIG1hcCBTVEFSVFxuXG5mdW5jdGlvbiBpbml0TWFwKCkge1xuICBsZXQgTXltYXA7XG4gIE15bWFwID0gbmV3IGdvb2dsZS5tYXBzLk1hcChkb2N1bWVudC5nZXRFbGVtZW50QnlJZCgnbWFwJyksIHtcbiAgICBjZW50ZXI6IHtcbiAgICAgIGxhdDogNTAuMDY0NjUwMSxcbiAgICAgIGxuZzogMTkuOTQ0OTc5OVxuICAgIH0sXG4gICAgem9vbTogNCxcbiAgICAvLyBzY3JvbGx3aGVlbDogIGZhbHNlLFxuICAgIHN0eWxlczogW3tcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjMjEyMTIxXCJcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMuaWNvblwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiM3NTc1NzVcIlxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzIxMjEyMVwiXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmVcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjNzU3NTc1XCJcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5jb3VudHJ5XCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJsYWJlbHMudGV4dC5maWxsXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjOWU5ZTllXCJcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJhZG1pbmlzdHJhdGl2ZS5sYW5kX3BhcmNlbFwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwiYWRtaW5pc3RyYXRpdmUubG9jYWxpdHlcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiNiZGJkYmRcIlxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInBvaVwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzc1NzU3NVwiXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImdlb21ldHJ5XCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICAgIFwiY29sb3JcIjogXCIjMTgxODE4XCJcbiAgICAgICAgfV1cbiAgICAgIH0sXG4gICAgICB7XG4gICAgICAgIFwiZmVhdHVyZVR5cGVcIjogXCJwb2kucGFya1wiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzYxNjE2MVwiXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicG9pLnBhcmtcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LnN0cm9rZVwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzFiMWIxYlwiXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnkuZmlsbFwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzJjMmMyY1wiXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZFwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzLnRleHQuZmlsbFwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzhhOGE4YVwiXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5hcnRlcmlhbFwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiMzNzM3MzdcIlxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuYXJ0ZXJpYWxcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwiZ2VvbWV0cnlcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiMzYzNjM2NcIlxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQuaGlnaHdheVwiLFxuICAgICAgICBcImVsZW1lbnRUeXBlXCI6IFwibGFiZWxzXCIsXG4gICAgICAgIFwic3R5bGVyc1wiOiBbe1xuICAgICAgICAgIFwidmlzaWJpbGl0eVwiOiBcIm9mZlwiXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5oaWdod2F5LmNvbnRyb2xsZWRfYWNjZXNzXCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzRlNGU0ZVwiXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwicm9hZC5sb2NhbFwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVsc1wiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcInZpc2liaWxpdHlcIjogXCJvZmZcIlxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInJvYWQubG9jYWxcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiM2MTYxNjFcIlxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcInRyYW5zaXRcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiM3NTc1NzVcIlxuICAgICAgICB9XVxuICAgICAgfSxcbiAgICAgIHtcbiAgICAgICAgXCJmZWF0dXJlVHlwZVwiOiBcIndhdGVyXCIsXG4gICAgICAgIFwiZWxlbWVudFR5cGVcIjogXCJnZW9tZXRyeVwiLFxuICAgICAgICBcInN0eWxlcnNcIjogW3tcbiAgICAgICAgICBcImNvbG9yXCI6IFwiIzAwMDAwMFwiXG4gICAgICAgIH1dXG4gICAgICB9LFxuICAgICAge1xuICAgICAgICBcImZlYXR1cmVUeXBlXCI6IFwid2F0ZXJcIixcbiAgICAgICAgXCJlbGVtZW50VHlwZVwiOiBcImxhYmVscy50ZXh0LmZpbGxcIixcbiAgICAgICAgXCJzdHlsZXJzXCI6IFt7XG4gICAgICAgICAgXCJjb2xvclwiOiBcIiMzZDNkM2RcIlxuICAgICAgICB9XVxuICAgICAgfVxuICAgIF1cblxuICB9KTtcblxuICBsZXQgbWFya2VyO1xuICBtYXJrZXIgPSBuZXcgZ29vZ2xlLm1hcHMuTWFya2VyKHtcbiAgICBwb3NpdGlvbjoge1xuICAgICAgbGF0OiA1MC4wNDk2ODMsXG4gICAgICBsbmc6IDE5Ljk0NDU0NFxuICAgIH0sXG4gICAgbWFwOiBNeW1hcCxcbiAgICBpY29uOiBcImltZy9tYXJrZXIucG5nXCJcblxuICB9KTtcblxuICAvLyAkLmdldEpTT04oXCIuLi9saWIvbWFwLXN0eWxlLmpzb25cIiwgZnVuY3Rpb24oZGF0YSkge1xuICAvLyAgIE15bWFwLnNldE9wdGlvbnMoe3N0eWxlczogZGF0YX0pO1xuICAvLyB9KTtcblxuICBsZXQgSW5mb1dpbmRvdztcbiAgSW5mb1dpbmRvdyA9IG5ldyBnb29nbGUubWFwcy5JbmZvV2luZG93KHtcbiAgICBjb250ZW50OiAnPGgxPkdsb2JhbDwvaDE+J1xuICB9KTtcbiAgSW5mb1dpbmRvdy5vcGVuKE15bWFwLCBtYXJrZXIpO1xuXG4gIG1hcmtlci5hZGRMaXN0ZW5lcignY2xpY2snLCBmdW5jdGlvbigpIHtcbiAgICBJbmZvV2luZG93Lm9wZW4oTXltYXAsIG1hcmtlcik7XG4gIH0pO1xuXG5cbiAgLy9zY3JpcHQgcGFyYWxsYXggU1RBUlRcbiAgdmFyIHNjZW5lID0gZG9jdW1lbnQuZ2V0RWxlbWVudEJ5SWQoJ3NjZW5lJyk7XG4gIHZhciBwYXJhbGxheEluc3RhbmNlID0gbmV3IFBhcmFsbGF4KHNjZW5lKTtcblxuXG4gIC8vc2NyaXB0IHBhZ2VQaWxpbmcgU1RBUlRcbiAgZnVuY3Rpb24gY2hlY2tTaXplKCkge1xuICAgIGlmICh3aW5kb3cub3V0ZXJXaWR0aCA+IDEwMjQgfHwgd2luZG93LmlubmVyV2lkdGggPiAxMDI0KSB7XG4gICAgICAkKCdib2R5JykucmVtb3ZlQ2xhc3MoJ25vLW92ZXJmbG93Jyk7XG4gICAgICAkKCcuTUFJTicpLmF0dHIoJ2lkJywgJ3BhZ2VwaWxpbmcnKTtcbiAgICAgICQoJyNwYWdlcGlsaW5nJykucGFnZXBpbGluZyh7XG4gICAgICAgIG5vcm1hbFNjcm9sbEVsZW1lbnRzOiAnI21hcCdcbiAgICAgIH0pO1xuICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlbG9hZGVkJywgJ2QnKTtcbiAgICB9IGVsc2Uge1xuICAgICAgJCgnYm9keScpLmFkZENsYXNzKCduby1vdmVyZmxvdycpO1xuICAgIH1cbiAgfVxuXG4gIGNoZWNrU2l6ZSgpO1xuXG4gIGZ1bmN0aW9uIHJlbG9hZFBhZ2UoKSB7XG4gICAgbGV0IHJlbG9hZCA9IGxvY2FsU3RvcmFnZS5nZXRJdGVtKCdyZWxvYWRlZCcpO1xuICAgIGlmIChyZWxvYWQgPT09ICdkJykge1xuICAgICAgaWYgKHdpbmRvdy5vdXRlcldpZHRoIDwgMTAyNCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA8IDEwMjQpIHtcbiAgICAgICAgbG9jYWxTdG9yYWdlLnNldEl0ZW0oJ3JlbG9hZGVkJywgJ20nKTtcbiAgICAgICAgbG9jYXRpb24ucmVsb2FkKCk7XG4gICAgICB9XG4gICAgfSBlbHNlIHtcbiAgICAgIGNoZWNrU2l6ZSgpO1xuICAgIH1cbiAgfVxuXG4gICQoJy5nb190bycpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgIGlmKHdpbmRvdy5vdXRlcldpZHRoID4gMTAyNCB8fCB3aW5kb3cuaW5uZXJXaWR0aCA+IDEwMjQpIHJldHVybiBmYWxzZTtcbiAgICB2YXIgc2Nyb2xsX2VsID0gJCh0aGlzKS5hdHRyKCdocmVmJyk7XG4gICAgaWYgKCQoc2Nyb2xsX2VsKS5sZW5ndGggIT0gMCkge1xuICAgICAgJCgnaHRtbCwgYm9keScpLmFuaW1hdGUoe1xuICAgICAgICBzY3JvbGxUb3A6ICQoc2Nyb2xsX2VsKS5vZmZzZXQoKS50b3BcbiAgICAgIH0sIDUwMCk7XG4gICAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2FjdGl2YXRpb24tbWVudScpO1xuICAgIH1cbiAgICByZXR1cm4gZmFsc2U7XG4gIH0pO1xuXG4gIHJlbG9hZFBhZ2UoKTtcbiAgd2luZG93LmFkZEV2ZW50TGlzdGVuZXIoJ3Jlc2l6ZScsIHJlbG9hZFBhZ2UpO1xuXG4gIC8vc2NydWlwdCBmb3IgbWVudSBTVEFSVFxuICAkKCcuaGVhZGVyLWJ1cmdlciwubWVudS1zd2l0Y2gnKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAkKCdib2R5JykudG9nZ2xlQ2xhc3MoJ2FjdGl2YXRpb24tbWVudScpO1xuICB9KTtcblxufTtcblxuLy9cbi8vXG4vL1xuLy9cbiJdfQ==
