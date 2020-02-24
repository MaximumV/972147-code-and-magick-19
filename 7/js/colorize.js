'use strict';

(function () {
  var WIZARD_COAT_COLORS = [
    'rgb(101, 137, 164)',
    'rgb(241, 43, 107)',
    'rgb(146, 100, 161)',
    'rgb(56, 159, 117)',
    'rgb(215, 210, 55)',
    'rgb(0, 0, 0)'
  ];
  var WIZARD_EYE_COLORS = [
    'black',
    'red',
    'blue',
    'yellow',
    'green'
  ];
  var WIZARD_FIREBALL_COLORS = [
    '#ee4830',
    '#30a8ee',
    '#5ce6c0',
    '#e848d5',
    '#e6e848'
  ];
  var DELAY_TIME = 500;
  var setupElement = document.querySelector('.setup');
  var wizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInputElement = wizardFireballElement.querySelector('input[name="fireball-color"]');
  var wizardCoatInputElement = setupElement.querySelector('input[name="coat-color"]');
  var wizardEyesInputElement = setupElement.querySelector('input[name="eyes-color"]');

  var changeCoatColor = function () {
    wizardCoatElement.style = 'fill: ' + window.util.getRandomArrayElement(WIZARD_COAT_COLORS);
    wizardCoatInputElement.value = wizardCoatElement.style.fill;
    window.colorize.coatColor = wizardCoatInputElement.value;
    window.util.debounce(window.wizards.generate, DELAY_TIME);
  };

  var changeEyesColor = function () {
    wizardEyesElement.style = 'fill: ' + window.util.getRandomArrayElement(WIZARD_EYE_COLORS);
    wizardEyesInputElement.value = wizardEyesElement.style.fill;
    window.colorize.eyesColor = wizardEyesInputElement.value;
    window.util.debounce(window.wizards.generate, DELAY_TIME);
  };

  var changeFireballColor = function () {
    wizardFireballElement.style = 'background-color: ' + window.util.getRandomArrayElement(WIZARD_FIREBALL_COLORS);
    wizardFireballInputElement.value = wizardFireballElement.style.backgroundColor;
  };

  wizardCoatElement.addEventListener('click', changeCoatColor);
  wizardEyesElement.addEventListener('click', changeEyesColor);
  wizardFireballElement.addEventListener('click', changeFireballColor);

  window.colorize = {
    coatColor: wizardCoatInputElement.value,
    eyesColor: wizardEyesInputElement.value
  };
})();
