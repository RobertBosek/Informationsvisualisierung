/* eslint-env browser */

var UniverseAdministration = UniverseAdministration || {};
UniverseAdministration = (function() {
  "use strict";

  var that = {},
  universeView,
  universeController,
  universeModel,
  filmsDOM,
  planetsDOM,
  peopleDOM;

  function getDomElements() {
    filmsDOM = document.getElementById("film-div");
    planetsDOM = document.getElementById("planet-div");
    peopleDOM = document.getElementById("people-div");
  }

  function initModel() {
    universeModel = new UniverseAdministration.UniverseModel(films_data, planets_data, people_data);
  }

  function initView() {
    universeView = new UniverseAdministration.UniverseView(filmsDOM, planetsDOM, peopleDOM);
    universeView.update(universeModel.getCurrentFilms(), universeModel.getCurrentPlanets());
  }

  function initController() {
    universeController = new UniverseAdministration.UniverseController();
  }



  function init(){
    getDomElements();
    initModel();
    initView();
    initController();
  }

  init();
  return that;
}());
