'use strict';

(function () {
  var errorElement = document.createElement('div');
  var lastTimeout;
  var getRandomArrayElement = function (array) {
    return array[Math.floor(Math.random() * array.length)];
  };
  var shuffleArray = function (array) {
    var currentIndex = array.length;
    var temporaryValue;
    var randomIndex;

    while (currentIndex !== 0) {

      randomIndex = Math.floor(Math.random() * currentIndex);
      currentIndex -= 1;

      temporaryValue = array[currentIndex];
      array[currentIndex] = array[randomIndex];
      array[randomIndex] = temporaryValue;
    }

    return array;
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
  var showError = function (error) {
    errorElement.style.position = 'absolute';
    errorElement.style.left = '0';
    errorElement.style.right = '0';
    errorElement.style = 'padding: 10px 0; z-index: 5; text-align: center; background-color: red; color: white';
    errorElement.style.fontSize = '20px';
    errorElement.textContent = error;
    errorElement.style.display = 'block';
    document.body.insertAdjacentElement('afterbegin', errorElement);
  };
  var hideError = function () {
    errorElement.style.display = 'none';
  };
  var debounce = function (cb, timeout) {
    if (lastTimeout) {
      window.clearTimeout(lastTimeout);
    }
    lastTimeout = window.setTimeout(cb, timeout);
  };

  window.util = {
    ENTER_KEY: 'Enter',
    ESC_KEY: 'Escape',
    HIDDEN_CLASS: 'hidden',
    getRandomArrayElement: getRandomArrayElement,
    shuffleArray: shuffleArray,
    searchMaxArrayValue: searchMaxArrayValue,
    showError: showError,
    hideError: hideError,
    debounce: debounce
  };
})();
