'use strict';

(function () {
  var COUNT_WIZARDS = 4;

  var wizardsListElement = document.querySelector('.setup-similar-list');
  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');

  var renderWizard = function (wizardData) {
    var wizardElement = wizardTemplate.cloneNode(true);
    wizardElement.querySelector('.setup-similar-label')
      .textContent = wizardData.name;
    wizardElement.querySelector('.wizard-coat')
      .style.fill = wizardData.colorCoat;
    wizardElement.querySelector('.wizard-eyes')
      .style.fill = wizardData.colorEyes;
    return wizardElement;
  };

  var generateWizards = function (wizardsData) {
    var wizards = window.util.shuffleArray(wizardsData);
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < COUNT_WIZARDS; i++) {
      fragment.appendChild(renderWizard(wizards[i]));
    }
    wizardsListElement.appendChild(fragment);
  };

  //window.backend.load(generateWizards, window.util.showError);
})();

