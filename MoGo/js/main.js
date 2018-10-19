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
  // $(function() {

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
  }); // });
});
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwiZmFkZSIsImNzc0Vhc2UiLCJhY2NvcmRpb24iLCJoZWlnaHRTdHlsZSIsImljb25zIiwicmVzaXphYmxlIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsInJlc2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCO0FBQ0FGLElBQUUsc0JBQUYsRUFBMEJHLEtBQTFCLENBQWdDLFlBQVc7QUFDdkNILE1BQUUsTUFBRixFQUFVSSxXQUFWLENBQXNCLG1CQUF0QjtBQUNILEdBRkQsRUFGeUIsQ0FNekI7O0FBQ0FKLElBQUUsU0FBRixFQUFhSyxLQUFiLENBQW1CO0FBQ2ZDLGNBQVUsSUFESztBQUVmQyxXQUFPLEdBRlE7QUFHZkMsVUFBTSxJQUhTO0FBSWZDLGFBQVMsUUFKTSxDQUtYO0FBQ0E7O0FBTlcsR0FBbkIsRUFQeUIsQ0FlekI7QUFDQTtBQUNBO0FBQ0E7O0FBQ0FULElBQUUseUJBQUYsRUFBNkJLLEtBQTdCLENBQW1DO0FBQy9CQyxjQUFVLElBRHFCO0FBRS9CQyxXQUFPO0FBRndCLEdBQW5DLEVBbkJ5QixDQXdCekI7QUFDQTs7QUFDQVAsSUFBRSxZQUFGLEVBQWdCVSxTQUFoQixDQUEwQjtBQUN0QkMsaUJBQWEsTUFEUztBQUV0QkMsV0FBTztBQUNILGdCQUFVLGNBRFA7QUFFSCxzQkFBZ0I7QUFGYjtBQUZlLEdBQTFCO0FBUUFaLElBQUUsb0JBQUYsRUFBd0JhLFNBQXhCLENBQWtDO0FBQzlCQyxlQUFXLENBRG1CO0FBRTlCQyxjQUFVLEdBRm9CO0FBRzlCQyxlQUFXLEdBSG1CO0FBSTlCQyxjQUFVLEdBSm9CO0FBSzlCQyxZQUFRLGtCQUFXO0FBQ2ZsQixRQUFFLFlBQUYsRUFBZ0JVLFNBQWhCLENBQTBCLFNBQTFCO0FBQ0g7QUFQNkIsR0FBbEMsRUFsQ3lCLENBMkN6QjtBQUNILENBNUNEIiwiZmlsZSI6ImpzL21haW4uanMiLCJzb3VyY2VzQ29udGVudCI6WyJcInVzZSBzdHJpY3RcIjtcbiQoZG9jdW1lbnQpLnJlYWR5KGZ1bmN0aW9uKCkge1xuICAgIC8vIHNjcmlwdCBmb3Igc2VhcmNoIGZpZWxkIFNUQVJUXG4gICAgJChcIi5pY29uLWhlYWRlcl9fc2VhcmNoXCIpLmNsaWNrKGZ1bmN0aW9uKCkge1xuICAgICAgICAkKFwiYm9keVwiKS50b2dnbGVDbGFzcyhcInNob3ctc2VhcmNoLWZpZWxkXCIpO1xuICAgIH0pO1xuXG4gICAgLy8gc2NyaXB0IGZvciBzZWN0aW9uLXdoYXQtd2UtZG8gc2xpZGVyIFNUQVJUXG4gICAgJChcIi5zbGlkZXJcIikuc2xpY2soe1xuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDUwMCxcbiAgICAgICAgZmFkZTogdHJ1ZSxcbiAgICAgICAgY3NzRWFzZTogJ2xpbmVhcidcbiAgICAgICAgICAgIC8vIGF1dG9wbGF5OiB0cnVlLFxuICAgICAgICAgICAgLy8gYXV0b3BsYXlTcGVlZDogMjAwMFxuICAgIH0pO1xuICAgIC8vICQoXCIjc2hvdy1zbGlkZTFcIikub24oJ2NsaWNrJywgZnVuY3Rpb24oKSB7XG4gICAgLy8gICAgIC8vIHNsaWRlSW5kZXgrKztcbiAgICAvLyB9KTtcbiAgICAvLyBzY3JpcHQgZm9yIHNlY3Rpb24tY29tZW50cyBzbGlkZXIgU1RBUlRcbiAgICAkKFwiLnNlY3Rpb24tY29tZW50cy1zbGlkZXJcIikuc2xpY2soe1xuICAgICAgICBpbmZpbml0ZTogdHJ1ZSxcbiAgICAgICAgc3BlZWQ6IDUwMFxuICAgIH0pO1xuXG4gICAgLy8gc2NyaXB0IGZvciBzZWN0aW9uLXdoYXQtd2UtZG8gYWNjb3JkaW9uIFNUQVJUXG4gICAgLy8gJChmdW5jdGlvbigpIHtcbiAgICAkKFwiI2FjY29yZGlvblwiKS5hY2NvcmRpb24oe1xuICAgICAgICBoZWlnaHRTdHlsZTogXCJhdXRvXCIsXG4gICAgICAgIGljb25zOiB7XG4gICAgICAgICAgICBcImhlYWRlclwiOiBcImljb24tYWN0aXZlIFwiLFxuICAgICAgICAgICAgXCJhY3RpdmVIZWFkZXJcIjogXCJpY29uLW5vdC1hY3RpdmVcIlxuICAgICAgICB9XG4gICAgfSk7XG5cbiAgICAkKFwiI2FjY29yZGlvbi1yZXNpemVyXCIpLnJlc2l6YWJsZSh7XG4gICAgICAgIG1pbkhlaWdodDogMCxcbiAgICAgICAgbWluV2lkdGg6IDYwMCxcbiAgICAgICAgbWF4SGVpZ2h0OiAyMDAsXG4gICAgICAgIG1heFdpZHRoOiA2MDAsXG4gICAgICAgIHJlc2l6ZTogZnVuY3Rpb24oKSB7XG4gICAgICAgICAgICAkKFwiI2FjY29yZGlvblwiKS5hY2NvcmRpb24oXCJyZWZyZXNoXCIpO1xuICAgICAgICB9XG4gICAgfSk7XG4gICAgLy8gfSk7XG59KTsiXX0=
