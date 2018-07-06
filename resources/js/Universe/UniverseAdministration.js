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
  starshipsDOM,
  vehiclesDOM,
  peopleDOM;

  function getDomElements() {
    filmsDOM = document.getElementById("film-div");
    planetsDOM = document.getElementById("planet-div");
    starshipsDOM = document.getElementById("starship-div");
    vehiclesDOM = document.getElementById("vehicle-div");
    peopleDOM = document.getElementById("people-div");
  }

  function initView() {
    universeView.update(universeModel.getCurrentFilms(), universeModel.getCurrentPlanets());
  }

  function setListeners() {
    universeModel.setOnDataReadyListener(universeView.update);
  }

  function initModules() {
    universeModel = new UniverseAdministration.UniverseModel();
    universeView = new UniverseAdministration.UniverseView();
    universeController = new UniverseAdministration.UniverseController(universeModel, universeView);
  }

  function init(){
  //  getDomElements();
    initModules();
    setListeners();
    universeModel.getData();
  }

  init();
  return that;
}());
