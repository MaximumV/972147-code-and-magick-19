'use strict';

(function () {
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
  var COUNT_WIZARDS = 4;

  var wizardsListElement = document.querySelector('.setup-similar-list');
  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var getRandomWizardData = function () {
    return {
      name: window.util.getRandomArrayElement(WIZARD_NAMES) + ' ' + window.util.getRandomArrayElement(WIZARD_SURNAMES),
      coatColor: window.util.getRandomArrayElement(WIZARD_COAT_COLORS),
      eyesColor: window.util.getRandomArrayElement(WIZARD_EYE_COLORS)
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

  wizardsListElement.appendChild(generateRandomWizards());
})();

