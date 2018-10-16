"use strict";

$(document).ready(function () {
  // script for search field START
  $(".icon-header-search").click(function () {
    $("body").toggleClass("show-search-field");
  }); // script for section-what-we-do slider START

  $(".slider").slick({
    infinite: true,
    speed: 500,
    fade: true,
    cssEase: 'linear',
    autoplay: true,
    autoplaySpeed: 2000
  }); // script for section-coments slider START

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
//# sourceMappingURL=data:application/json;charset=utf8;base64,eyJ2ZXJzaW9uIjozLCJzb3VyY2VzIjpbImpzL21haW4uanMiXSwibmFtZXMiOlsiJCIsImRvY3VtZW50IiwicmVhZHkiLCJjbGljayIsInRvZ2dsZUNsYXNzIiwic2xpY2siLCJpbmZpbml0ZSIsInNwZWVkIiwiZmFkZSIsImNzc0Vhc2UiLCJhdXRvcGxheSIsImF1dG9wbGF5U3BlZWQiLCJhY2NvcmRpb24iLCJoZWlnaHRTdHlsZSIsImljb25zIiwicmVzaXphYmxlIiwibWluSGVpZ2h0IiwibWluV2lkdGgiLCJtYXhIZWlnaHQiLCJtYXhXaWR0aCIsInJlc2l6ZSJdLCJtYXBwaW5ncyI6IkFBQUE7O0FBQ0FBLEVBQUVDLFFBQUYsRUFBWUMsS0FBWixDQUFrQixZQUFXO0FBQ3pCO0FBQ0FGLElBQUUscUJBQUYsRUFBeUJHLEtBQXpCLENBQStCLFlBQVc7QUFDdENILE1BQUUsTUFBRixFQUFVSSxXQUFWLENBQXNCLG1CQUF0QjtBQUNILEdBRkQsRUFGeUIsQ0FNekI7O0FBQ0FKLElBQUUsU0FBRixFQUFhSyxLQUFiLENBQW1CO0FBQ2ZDLGNBQVUsSUFESztBQUVmQyxXQUFPLEdBRlE7QUFHZkMsVUFBTSxJQUhTO0FBSWZDLGFBQVMsUUFKTTtBQUtmQyxjQUFVLElBTEs7QUFNZkMsbUJBQWU7QUFOQSxHQUFuQixFQVB5QixDQWV6Qjs7QUFDQVgsSUFBRSx5QkFBRixFQUE2QkssS0FBN0IsQ0FBbUM7QUFDL0JDLGNBQVUsSUFEcUI7QUFFL0JDLFdBQU87QUFGd0IsR0FBbkMsRUFoQnlCLENBcUJ6QjtBQUNBOztBQUNBUCxJQUFFLFlBQUYsRUFBZ0JZLFNBQWhCLENBQTBCO0FBQ3RCQyxpQkFBYSxNQURTO0FBRXRCQyxXQUFPO0FBQ0gsZ0JBQVUsY0FEUDtBQUVILHNCQUFnQjtBQUZiO0FBRmUsR0FBMUI7QUFRQWQsSUFBRSxvQkFBRixFQUF3QmUsU0FBeEIsQ0FBa0M7QUFDOUJDLGVBQVcsQ0FEbUI7QUFFOUJDLGNBQVUsR0FGb0I7QUFHOUJDLGVBQVcsR0FIbUI7QUFJOUJDLGNBQVUsR0FKb0I7QUFLOUJDLFlBQVEsa0JBQVc7QUFDZnBCLFFBQUUsWUFBRixFQUFnQlksU0FBaEIsQ0FBMEIsU0FBMUI7QUFDSDtBQVA2QixHQUFsQyxFQS9CeUIsQ0F3Q3pCO0FBQ0gsQ0F6Q0QiLCJmaWxlIjoianMvbWFpbi5qcyIsInNvdXJjZXNDb250ZW50IjpbIlwidXNlIHN0cmljdFwiO1xuJChkb2N1bWVudCkucmVhZHkoZnVuY3Rpb24oKSB7XG4gICAgLy8gc2NyaXB0IGZvciBzZWFyY2ggZmllbGQgU1RBUlRcbiAgICAkKFwiLmljb24taGVhZGVyLXNlYXJjaFwiKS5jbGljayhmdW5jdGlvbigpIHtcbiAgICAgICAgJChcImJvZHlcIikudG9nZ2xlQ2xhc3MoXCJzaG93LXNlYXJjaC1maWVsZFwiKTtcbiAgICB9KTtcblxuICAgIC8vIHNjcmlwdCBmb3Igc2VjdGlvbi13aGF0LXdlLWRvIHNsaWRlciBTVEFSVFxuICAgICQoXCIuc2xpZGVyXCIpLnNsaWNrKHtcbiAgICAgICAgaW5maW5pdGU6IHRydWUsXG4gICAgICAgIHNwZWVkOiA1MDAsXG4gICAgICAgIGZhZGU6IHRydWUsXG4gICAgICAgIGNzc0Vhc2U6ICdsaW5lYXInLFxuICAgICAgICBhdXRvcGxheTogdHJ1ZSxcbiAgICAgICAgYXV0b3BsYXlTcGVlZDogMjAwMFxuICAgIH0pO1xuICAgIC8vIHNjcmlwdCBmb3Igc2VjdGlvbi1jb21lbnRzIHNsaWRlciBTVEFSVFxuICAgICQoXCIuc2VjdGlvbi1jb21lbnRzLXNsaWRlclwiKS5zbGljayh7XG4gICAgICAgIGluZmluaXRlOiB0cnVlLFxuICAgICAgICBzcGVlZDogNTAwXG4gICAgfSk7XG5cbiAgICAvLyBzY3JpcHQgZm9yIHNlY3Rpb24td2hhdC13ZS1kbyBhY2NvcmRpb24gU1RBUlRcbiAgICAvLyAkKGZ1bmN0aW9uKCkge1xuICAgICQoXCIjYWNjb3JkaW9uXCIpLmFjY29yZGlvbih7XG4gICAgICAgIGhlaWdodFN0eWxlOiBcImF1dG9cIixcbiAgICAgICAgaWNvbnM6IHtcbiAgICAgICAgICAgIFwiaGVhZGVyXCI6IFwiaWNvbi1hY3RpdmUgXCIsXG4gICAgICAgICAgICBcImFjdGl2ZUhlYWRlclwiOiBcImljb24tbm90LWFjdGl2ZVwiXG4gICAgICAgIH1cbiAgICB9KTtcblxuICAgICQoXCIjYWNjb3JkaW9uLXJlc2l6ZXJcIikucmVzaXphYmxlKHtcbiAgICAgICAgbWluSGVpZ2h0OiAwLFxuICAgICAgICBtaW5XaWR0aDogNjAwLFxuICAgICAgICBtYXhIZWlnaHQ6IDIwMCxcbiAgICAgICAgbWF4V2lkdGg6IDYwMCxcbiAgICAgICAgcmVzaXplOiBmdW5jdGlvbigpIHtcbiAgICAgICAgICAgICQoXCIjYWNjb3JkaW9uXCIpLmFjY29yZGlvbihcInJlZnJlc2hcIik7XG4gICAgICAgIH1cbiAgICB9KTtcbiAgICAvLyB9KTtcbn0pOyJdfQ==
