'use strict';

(function () {
  var getRandomArrayElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };
  var searchMaxArrayValue = function (times) {
    var maxTime = times[0];
    times.forEach(function (item) {
      if (item > maxTime) {
        maxTime = item;
      }
    });
    return maxTime;
  };

  window.util = {
    ENTER_KEY: 'Enter',
    ESC_KEY: 'Escape',
    HIDDEN_CLASS: 'hidden',
    getRandomArrayElement: getRandomArrayElement,
    searchMaxArrayValue: searchMaxArrayValue
  };
})();
