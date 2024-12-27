 "use strict";

/**
 * Initialize main helper object
 */
var VLTJS = {
  window: jQuery(window),
  document: jQuery(document),
  html: jQuery("html"),
  body: jQuery("body"),
  is_safari: /^((?!chrome|android).)*safari/i.test(navigator.vendor),
  is_firefox: navigator.userAgent.toLowerCase().indexOf("firefox") > -1,
  is_chrome:
    /Chrome/.test(navigator.userAgent) && /Google Inc/.test(navigator.vendor),
  is_ie10: navigator.appVersion.indexOf("MSIE 10") !== -1,
  transitionEnd:
    "transitionend webkitTransitionEnd oTransitionEnd otransitionend MSTransitionEnd",
  animIteration:
    "animationiteration webkitAnimationIteration oAnimationIteration MSAnimationIteration",
  animationEnd: "animationend webkitAnimationEnd",
};

/**
 * Detects whether user is viewing site from a mobile device
 */
VLTJS.isMobile = {
  any: function () {
    return /Mobi|Android/i.test(navigator.userAgent);
  },
};

/**
 * Debounce resize
 
var debounceResize = _.debounce(function (e) {
  if (resizeArr.length) {
    resizeArr.forEach(function (callback) {
      callback(e);
    });
  }
}, 250);

var resizeArr = [];
VLTJS.window.on("resize orientationchange", debounceResize);

VLTJS.debounceResize = function (callback) {
  if (typeof callback === "function") {
    resizeArr.push(callback);
  } else {
    window.dispatchEvent(new Event("resize"));
  }
};

VLTJS.addLedingZero = function (number) {
  return ("0" + number).slice(-2);
};*/

/**
 * Throttle scroll
 
var throttleScroll = _.throttle(function () {
  if (throttleArr.length) {
    var scrollTop = VLTJS.window.scrollTop(),
      windowHeight = VLTJS.window.height(),
      documentHeight = VLTJS.document.height(),
      scrollState = "";

    if (Math.abs(lastScrollTop - scrollTop) > delta) {
      if (scrollTop > lastScrollTop) {
        scrollState = "down";
      } else if (scrollTop < lastScrollTop) {
        scrollState = "up";
      } else {
        scrollState = "none";
      }

      if (scrollTop === 0) {
        scrollState = "start";
      } else if (scrollTop >= documentHeight - windowHeight) {
        scrollState = "end";
      }

      for (var i in throttleArr) {
        if (typeof throttleArr[i] === "function") {
          throttleArr[i](scrollState, scrollTop, lastScrollTop, VLTJS.window);
        }
      }

      lastScrollTop = scrollTop;
    }
  }
}, 250);

var throttleArr = [];
var delta = 5;
var lastScrollTop = 0;
VLTJS.window.on("scroll", throttleScroll);

VLTJS.throttleScroll = function (callback) {
  if (typeof callback === "function") {
    throttleArr.push(callback);
  }
};*/

/**
 * VAR polyfill
 */
if (!("CSS" in window && CSS.supports("color", "var(--fake-var)"))) {
  if (typeof cssVars !== "undefined") {
    cssVars({
      onlyVars: true,
    });
  }
}

/**
 * RequestAnimationFrame polyfill
 */
window.requestAnimationFrame =
  window.requestAnimationFrame ||
  window.webkitRequestAnimationFrame ||
  function (callback) {
    return setTimeout(callback, 1000 / 60);
  };
