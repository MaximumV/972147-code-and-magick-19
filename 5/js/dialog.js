'use strict';

(function () {
  var setupElement = document.querySelector('.setup');
  var closeSetupElement = document.querySelector('.setup-close');
  var openSetupElement = document.querySelector('.setup-open');
  var openSetupIconElement = openSetupElement.querySelector('.setup-open-icon');
  var setupSimilarElement = document.querySelector('.setup-similar');
  var nameInputElement = document.querySelector('.setup-user-name');
  var dialogDragElement = document.querySelector('.upload');
  var StartCoors = {
    x: window.getComputedStyle(setupElement).getPropertyValue('top'),
    y: window.getComputedStyle(setupElement).getPropertyValue('left')
  };

  var showSetup = function () {
    setupElement.classList.remove(window.util.HIDDEN_CLASS);
    setupElement.style.top = StartCoors.x;
    setupElement.style.left = StartCoors.y;
  };

  var showSetupByEnterKey = function (evt) {
    if (evt.key === window.util.ENTER_KEY) {
      showSetup();
    }
  };

  var showSimilarSetup = function () {
    setupSimilarElement.classList.remove(window.util.HIDDEN_CLASS);
  };

  var hideSetup = function () {
    setupElement.classList.add(window.util.HIDDEN_CLASS);
  };

  var hideSetupByEscKey = function (evt) {
    if (!setupElement.classList.contains(window.util.HIDDEN_CLASS) && evt.key === window.util.ESC_KEY
      && document.activeElement !== nameInputElement) {
      hideSetup();
    }
  };

  var hideSetupByEnterKey = function (evt) {
    if (!setupElement.classList.contains(window.util.HIDDEN_CLASS) && evt.key === window.util.ENTER_KEY
      && document.activeElement === closeSetupElement) {
      hideSetup();
    }
  };

  var onDragSetup = function (evt) {
    evt.preventDefault();
    var coors = {
      x: evt.clientX,
      y: evt.clientY
    };
    var dragged = false;

    var onMouseMove = function (moveEvt) {
      moveEvt.preventDefault();
      dragged = true;
      var shift = {
        x: coors.x - moveEvt.clientX,
        y: coors.y - moveEvt.clientY
      };

      coors = {
        x: moveEvt.clientX,
        y: moveEvt.clientY
      };

      setupElement.style.top = (setupElement.offsetTop - shift.y) + 'px';
      setupElement.style.left = (setupElement.offsetLeft - shift.x) + 'px';
    };

    var onMouseUp = function (upEvt) {
      upEvt.preventDefault();

      document.removeEventListener('mousemove', onMouseMove);
      document.removeEventListener('mouseup', onMouseUp);
      if (dragged) {
        var onClickPreventDefault = function (clickEvt) {
          clickEvt.preventDefault();
          dialogDragElement.removeEventListener('click', onClickPreventDefault);
        };
        dialogDragElement.addEventListener('click', onClickPreventDefault);
      }
    };

    document.addEventListener('mousemove', onMouseMove);
    document.addEventListener('mouseup', onMouseUp);
  };


  openSetupElement.addEventListener('click', showSetup);
  openSetupIconElement.addEventListener('keydown', showSetupByEnterKey);
  showSimilarSetup();
  closeSetupElement.addEventListener('click', hideSetup);
  dialogDragElement.addEventListener('mousedown', onDragSetup);
  document.addEventListener('keydown', hideSetupByEscKey);
  closeSetupElement.addEventListener('keydown', hideSetupByEnterKey);
})();
