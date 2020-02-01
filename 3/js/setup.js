'use strict';

var setup = document.querySelector('.setup');
var setupCloseBtn = document.querySelector('.setup-close');
var wizardsList = document.querySelector('.setup-similar-list');
var setupSimilar = document.querySelector('.setup-similar');
var WIZARD_TEMPLATE = document
  .querySelector('#similar-wizard-template')
  .content
  .querySelector('.setup-similar-item');

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

var arrayRandElement = function (array) {
  return array[Math.floor(Math.random() * array.length)];
};

var getRandomWizardData = function () {
  return {
    name: arrayRandElement(WIZARD_NAMES) + ' ' + arrayRandElement(WIZARD_SURNAMES),
    coatColor: arrayRandElement(WIZARD_COAT_COLORS),
    eyesColor: arrayRandElement(WIZARD_EYE_COLORS)
  };
};

var renderWizard = function (wizardData) {
  var wizardElement = WIZARD_TEMPLATE.cloneNode(true);
  wizardElement.querySelector('.setup-similar-label')
    .textContent = wizardData.name;
  wizardElement.querySelector('.wizard-coat')
    .style.fill = wizardData.coatColor;
  wizardElement.querySelector('.wizard-eyes')
    .style.fill = wizardData.eyesColor;
  return wizardElement;
};

var generateRandomWizards = function (countWizards) {
  var fragment = document.createDocumentFragment();
  for (var i = 0; i < countWizards; i++) {
    fragment.appendChild(renderWizard(getRandomWizardData()));
  }
  return fragment;
};

wizardsList.appendChild(generateRandomWizards(4));

setup.classList.remove('hidden');
setupSimilar.classList.remove('hidden');
setupCloseBtn.addEventListener('click', function () {
  setup.classList.add('hidden');
});
