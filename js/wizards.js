'use strict';

(function () {
  var COUNT_WIZARDS = 4;

  var wizardsListElement = document.querySelector('.setup-similar-list');
  var wizardTemplate = document
    .querySelector('#similar-wizard-template')
    .content
    .querySelector('.setup-similar-item');
  var wizardsArray;

  var sortWizards = function (wizards) {
    var similarWizards = [];
    wizards.forEach(function (wizard) {
      var points = 0;
      if (wizard.colorCoat === window.colorize.coatColor) {
        points += 2;
      }
      if (wizard.colorEyes === window.colorize.eyesColor) {
        points++;
      }
      similarWizards.push({
        name: wizard.name,
        points: points,
        colorCoat: wizard.colorCoat,
        colorEyes: wizard.colorEyes
      });
    });
    similarWizards.sort(function (a, b) {
      if (a.points < b.points) {
        return 1;
      } else if (a.points > b.points) {
        return -1;
      } else {
        return 0;
      }
    });
    return similarWizards;
  };

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

  var generateWizards = function (wizards) {
    var similarWizards = sortWizards(wizards);
    var fragment = document.createDocumentFragment();
    for (var i = 0; i < COUNT_WIZARDS; i++) {
      fragment.appendChild(renderWizard(similarWizards[i]));
    }
    wizardsListElement.innerHTML = '';
    wizardsListElement.appendChild(fragment);
    wizardsArray = wizards;
  };

  window.wizards = {
    generate: function () {
      if (wizardsArray) {
        generateWizards(wizardsArray);
      } else {
        window.backend.load(generateWizards, window.util.showError);
      }
    }
  };
})();

