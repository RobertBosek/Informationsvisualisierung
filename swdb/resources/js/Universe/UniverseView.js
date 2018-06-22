/* eslint-env browser */
/* global UniverseAdministration*/

var UniverseAdministration = UniverseAdministration || {};

UniverseAdministration.UniverseView = function(filmsView, planetsView, peopleView) {
  "use strict";

  const DEFAULT_PATH = "./data/images/",
  MAX_DIA_PLANET = 19720;
  var that = {},
  templateFilm = filmsView.getElementsByClassName("films")[0],
  templatePlanet = planetsView.getElementsByClassName("planet-container")[0],
  templatePeople = peopleView.getElementsByClassName("people")[0];

  function updateFilms(currentFilms) {
    filmsView.innerHTML = "";
    let ids = [];
    for (let i in currentFilms){
      let splitStr = currentFilms[i]["url"].split("/")
      ids.push(splitStr[splitStr.length-2]);
    }
    ids.sort();
    for (let i in ids) {
      let path = DEFAULT_PATH + "films/" + ids[i] + ".jpg";
      let child = templateFilm.cloneNode(true);
      child.src = path;
      filmsView.appendChild(child);
    }
  }

  function updatePlanets(currentPlanets) {
    planetsView.innerHTML = "";
    let ids = [];
    for (let i in currentPlanets){
      let splitStr = currentPlanets[i]["url"].split("/")
      ids.push(splitStr[splitStr.length-2]);
    }
    ids.sort();
    for (let i in ids) {
      let path = DEFAULT_PATH + "planets/" + ids[i] + ".png";
      let child = templatePlanet.cloneNode(true);
      let img = child.getElementsByClassName("planets")[0];
      img.src = path;
      planetsView.appendChild(child);
    }
  }

  function update(currentFilms, currentPlanets) {
    updateFilms(currentFilms);
    updatePlanets(currentPlanets);

  }

  that.update = update;
  return that;
  };
