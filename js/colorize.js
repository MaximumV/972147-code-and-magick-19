'use strict';

(function () {
  var setupElement = document.querySelector('.setup');
  var wizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
  var wizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
  var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
  var wizardFireballInputElement = wizardFireballElement.querySelector('input[name="fireball-color"]');
  var wizardCoatInputElement = setupElement.querySelector('input[name="coat-color"]');
  var wizardEyesInputElement = setupElement.querySelector('input[name="eyes-color"]');
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

  var changeCoatColor = function () {
    wizardCoatElement.style = 'fill: ' + window.util.getRandomArrayElement(WIZARD_COAT_COLORS);
    wizardCoatInputElement.value = wizardCoatElement.style.fill;
  };

  var changeEyesColor = function () {
    wizardEyesElement.style = 'fill: ' + window.util.getRandomArrayElement(WIZARD_EYE_COLORS);
    wizardEyesInputElement.value = wizardEyesElement.style.fill;
  };

  var changeFireballColor = function () {
    wizardFireballElement.style = 'background-color: ' + window.util.getRandomArrayElement(WIZARD_FIREBALL_COLORS);
    wizardFireballInputElement.value = wizardFireballElement.style.backgroundColor;
  };
  wizardCoatElement.addEventListener('click', changeCoatColor);
  wizardEyesElement.addEventListener('click', changeEyesColor);
  wizardFireballElement.addEventListener('click', changeFireballColor);
})();
