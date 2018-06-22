/* eslint-env browser */
/* global UniverseAdministration*/

var UniverseAdministration = UniverseAdministration || {};

UniverseAdministration.UniverseModel = function(films, planets, people) {
  "use strict";

  var that = {},
  currentFilms = films,
  currentPlanets = planets,
  currentPeople = people;

  function getCurrentFilms() {
    return currentFilms;
  }

  function getCurrentPlanets() {
    return currentPlanets;
  }

  function getCurrentPeople() {
    return currentPeople;
  }

  that.getCurrentFilms = getCurrentFilms;
  that.getCurrentPlanets = getCurrentPlanets;
  that.getCurrentPeople = getCurrentPeople;
  return that;
};
