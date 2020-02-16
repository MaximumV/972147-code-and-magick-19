'use strict';

window.util = (function () {
  return {
    getRandomArrayElement: function (array) {
      return array[Math.floor(Math.random() * array.length)];
    },
    searchMaxArrayValue: function (times) {
      var maxTime = times[0];
      times.forEach(function (item) {
        if (item > maxTime) {
          maxTime = item;
        }
      });
      return maxTime;
    },
    ENTER_KEY: 'Enter',
    ESC_KEY: 'Escape',
    HIDDEN_CLASS: 'hidden'
  };
})();

