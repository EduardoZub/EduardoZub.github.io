"use strict";

window.onload = function () {
  // script for window border
  var pageBorder = document.querySelector('.page-border ');
  pageBorder.classList.add('opacity'); // script for head animate

  var headBlock = document.querySelector('.section-heading');
  headBlock.classList.add('animate'); // script for about block animate

  var aboutSection = document.getElementById('about');
  var sucAboutBlock = aboutSection.querySelector('.suc-about-block');
  sucAboutBlock.addEventListener('transitionend', function () {
    aboutSection.classList.add('animate-to');
  });
  var elementsId = ['about', 'gallery', 'services', 'testimonials', 'pricing'];
  var elementsPosition = [];

  function getElementsPosition(arr) {
    arr.forEach(function (item) {
      var element = document.getElementById(item);
      elementsPosition.push(Object.assign({
        name: item
      }, getPosition(element).targetElementPosition));
    });
  }

  getElementsPosition(elementsId);
  var createTextCount = 0;

  function scrollHandler(scrollYValue) {
    elementsPosition.forEach(function (item, i) {
      var element = document.getElementById(item.name);
      var minusScrollVal = 500;
      var top = item.top - minusScrollVal;
      var bottom = item.bottom;

      if (scrollYValue >= top && scrollYValue <= bottom) {
        element.classList.add('animate');
      }
    });
    var serviceTop = Math.round(elementsPosition[2].top - 500);
    var serviceBottom = Math.round(elementsPosition[2].bottom);

    if (scrollYValue >= serviceTop && scrollYValue <= serviceBottom && createTextCount <= 0) {
      setTimeout(createSpanText, 2000);
      createTextCount += 1;
    }
  } // script for head image animate


  function headImageParalax() {
    var scrollVal = arguments.length > 0 && arguments[0] !== undefined ? arguments[0] : 0;
    var positionYValue = scrollVal / 2.1 + "px";
    var testNym = Math.round(scrollVal / 4 - 540);
    var banerHeadBlock = document.querySelector('#banner');
    var dancerImage = document.querySelector('#dancer');
    dancerImage.style.transform = 'translate(' + testNym + 'px)';
    banerHeadBlock.style.backgroundPositionY = positionYValue;
  }

  var headerElement = document.querySelector('#header'); // script for scroll event init

  window.addEventListener('scroll', function () {
    // script for header
    var scrollY = window.pageYOffset || document.documentElement.scrollTop;
    var maxScrollValue = 650;

    if (scrollY >= maxScrollValue) {
      headerElement.classList.add('fixed');
    } else {
      headerElement.classList.remove('fixed');
    }

    headImageParalax(scrollY);
    scrollHandler(scrollY);
  }); // script for get element position

  function getPosition(targetElement) {
    var targetElementPosition = {
      top: window.pageYOffset + targetElement.getBoundingClientRect().top,
      left: window.pageXOffset + targetElement.getBoundingClientRect().left,
      right: window.pageXOffset + targetElement.getBoundingClientRect().right,
      bottom: window.pageYOffset + targetElement.getBoundingClientRect().bottom
    };
    return {
      targetElementPosition: targetElementPosition
    };
  }

  var subscribeOneBlock = document.querySelector('.section-subscribe-one');
  var innerSubscribeOneBlock = subscribeOneBlock.querySelector('p');
  var str = 'Sed ut perspiciatis unde omnis iste natus error sit voluptatem accusantium doloremque laudantium, totam rem aperiam, eaque ipsa quae ab illo inventore veritatis et quasi architecto beatae vitae dicta sunt explicabo.';
  var j = 0;

  function createSpanText() {
    var spanHtml = document.createElement('span');
    spanHtml.className = 'animated';
    spanHtml.innerHTML = str[j];

    if (spanHtml.innerHTML === ' ') {
      spanHtml.style.width = 5 + 'px';
    }

    innerSubscribeOneBlock.append(spanHtml);

    if (j <= str.length - 2) {
      j++;
      setTimeout(createSpanText, 50);
    } else {
      setTimeout(endBlink, 3000);
    }
  }

  function endBlink() {
    subscribeOneBlock.classList.add('carriage-none');
  }

  var pricingBlock = document.querySelectorAll('.pricing-block');

  var _loop = function _loop(i) {
    pricingBlock[i].addEventListener('mouseenter', function () {
      showBlackLight(pricingBlock[i]);
    });
    pricingBlock[i].addEventListener('mouseleave', function () {
      remove(pricingBlock[i]);
    });
  };

  for (var i = 0; i < pricingBlock.length; i++) {
    _loop(i);
  }

  var prev;
  var current;
  var pricingSection = document.querySelector('#pricing');

  function showBlackLight(element) {
    current = element.getAttribute('data-num-element');

    if (prev) {
      if (prev > current) {
        prev = current;
        element.classList.add('to-left');
        pricingSection.classList.add('left');
      } else if (prev < current) {
        prev = current;
        element.classList.add('to-right');
        pricingSection.classList.add('right');
      } else {
        prev = current;
        element.classList.add('to-right');
        pricingSection.classList.add('hover');
      }
    } else {
      prev = current;
      element.classList.add('to-right');
      pricingSection.classList.add('hover');
    }

    console.log(prev);
  }

  function remove(elem) {
    elem.classList.remove('to-right');
    elem.classList.remove('to-left');
    pricingSection.classList.remove('left');
    pricingSection.classList.remove('right');
    pricingSection.classList.remove('hover');
  }

  var triggerBurger = document.querySelector('.nav-trigger-burger');
  var mobilMenu = document.querySelector('#nav-main');
  triggerBurger.addEventListener('click', function () {
    if (mobilMenu.classList.contains('open-menu')) {
      mobilMenu.classList.remove('open-menu');
    } else {
      mobilMenu.classList.add('open-menu');
    }
  });
};