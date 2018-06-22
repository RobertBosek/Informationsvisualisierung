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

  function initModel() {
    universeModel = new UniverseAdministration.UniverseModel(films_data, planets_data, starships_data, vehicles_data, people_data);
    for (let i in starships_data) {
      let ppl = starships_data[i];
      console.log(ppl["name"] + ": " + ppl["url"]);
    }
  }

  function initView() {
    universeView = new UniverseAdministration.UniverseView(filmsDOM, planetsDOM, starshipsDOM, vehiclesDOM, peopleDOM);
    universeView.update(universeModel.getCurrentFilms(), universeModel.getCurrentPlanets());
  }

  function initController() {
    universeController = new UniverseAdministration.UniverseController(universeModel, universeView);
  }



  function init(){
    initController();
    getDomElements();
    initModel();
    initView();
  }

  init();
  return that;
}());
