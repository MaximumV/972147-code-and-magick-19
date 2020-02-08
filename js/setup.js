'use strict';

var WIZARD_NAMES = [
  'Иван',
  'Хуан',
  'Себастьян',
  'Мария',
  'Кристоф',
  'Виктор',
  'Юлия',
  'Люпита',
  'Вашингтон'
];
var WIZARD_SURNAMES = [
  'да Марья',
  'Верон',
  'Мирабелла',
  'Вальц',
  'Онопко',
  'Топольницкая',
  'Нионго',
  'Ирвинг'
];
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
var COUNT_WIZARDS = 4;
var ENTER_KEY = 'Enter';
var ESC_KEY = 'Escape';
var HIDDEN_CLASS = 'hidden';

var setupElement = document.querySelector('.setup');
var closeSetupElement = document.querySelector('.setup-close');
var openSetupElement = document.querySelector('.setup-open');
var openSetupIconElement = openSetupElement.querySelector('.setup-open-icon');
var wizardsListElement = document.querySelector('.setup-similar-list');
var setupSimilarElement = document.querySelector('.setup-similar');
var nameInputElement = document.querySelector('.setup-user-name');
var wizardCoatElement = document.querySelector('.setup-wizard .wizard-coat');
var wizardEyesElement = document.querySelector('.setup-wizard .wizard-eyes');
var wizardFireballElement = document.querySelector('.setup-fireball-wrap');
var wizardFireballInputElement = wizardFireballElement.querySelector('input[name="fireball-color"]');
var wizardCoatInputElement = setupElement.querySelector('input[name="coat-color"]');
var wizardEyesInputElement = setupElement.querySelector('input[name="eyes-color"]');
var wizardTemplate = document
  .querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

var getRandomArrayElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomWizardData = function () {
  return {
    name: getRandomArrayElement(WIZARD_NAMES) + ' ' + getRandomArrayElement(WIZARD_SURNAMES),
    coatColor: getRandomArrayElement(WIZARD_COAT_COLORS),
    eyesColor: getRandomArrayElement(WIZARD_EYE_COLORS)
  };
};

var renderWizard = function (wizardData) {
  var wizardElement = wizardTemplate.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label')
    .textContent = wizardData.name;
  wizardElement.querySelector('.wizard-coat')
    .style.fill = wizardData.coatColor;
  wizardElement.querySelector('.wizard-eyes')
    .style.fill = wizardData.eyesColor;
  return wizardElement;
};

var generateRandomWizards = function () {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < COUNT_WIZARDS; i++) {
    fragment.appendChild(renderWizard(getRandomWizardData()));
  }
  return fragment;
};

var showSetup = function () {
  setupElement.classList.remove(HIDDEN_CLASS);
};

var showSetupByEnterKey = function (evt) {
  if (evt.key === ENTER_KEY) {
    setupElement.classList.remove(HIDDEN_CLASS);
  }
};

var showSimilarSetup = function () {
  setupSimilarElement.classList.remove(HIDDEN_CLASS);
};

var hideSetup = function () {
  setupElement.classList.add(HIDDEN_CLASS);
};

var hideSetupByEscKey = function (evt) {
  if (!setupElement.classList.contains(HIDDEN_CLASS) && evt.key === ESC_KEY
    && document.activeElement !== nameInputElement) {
    hideSetup();
  }
};

var hideSetupByEnterKey = function (evt) {
  if (!setupElement.classList.contains(HIDDEN_CLASS) && evt.key === ENTER_KEY
    && document.activeElement === closeSetupElement) {
    hideSetup();
  }
};

var changeCoatColor = function () {
  wizardCoatElement.style = 'fill: ' + getRandomArrayElement(WIZARD_COAT_COLORS);
  wizardCoatInputElement.value = wizardCoatElement.style.fill;
};

var changeEyesColor = function () {
  wizardEyesElement.style = 'fill: ' + getRandomArrayElement(WIZARD_EYE_COLORS);
  wizardEyesInputElement.value = wizardEyesElement.style.fill;
};

var changeFireballColor = function () {
  wizardFireballElement.style = 'background-color: ' + getRandomArrayElement(WIZARD_FIREBALL_COLORS);
  wizardFireballInputElement.value = wizardFireballElement.style.backgroundColor;
};

var init = function () {
  wizardsListElement.appendChild(generateRandomWizards());
  openSetupElement.addEventListener('click', showSetup);
  openSetupIconElement.addEventListener('keydown', showSetupByEnterKey);
  showSimilarSetup();
  closeSetupElement.addEventListener('click', hideSetup);
  document.addEventListener('keydown', hideSetupByEscKey);
  closeSetupElement.addEventListener('keydown', hideSetupByEnterKey);
  wizardCoatElement.addEventListener('click', changeCoatColor);
  wizardEyesElement.addEventListener('click', changeEyesColor);
  wizardFireballElement.addEventListener('click', changeFireballColor);
};

init();
