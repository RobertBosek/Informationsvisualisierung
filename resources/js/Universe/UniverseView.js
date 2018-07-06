/* eslint-env browser */
/* global UniverseAdministration*/

var UniverseAdministration = UniverseAdministration || {};

UniverseAdministration.UniverseView = function() {
  "use strict";

  const DEFAULT_PATH = "./data/images/",
  MAX_DIA_PLANET = 19720;
  var that = {};

  /*
  templateFilm = filmsView.getElementsByClassName("films")[0],
  templatePlanet = planetsView.getElementsByClassName("planet-container")[0],
  templatePeople = peopleView.getElementsByClassName("people")[0];
  */
/*
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


  function _updatePlanets(currentPlanets) {
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
*/
  function _updateFilms(films) {
    var parentSelection = d3.select("#film-div");
    var filmSelection = parentSelection.selectAll(".films").data(films);
    var enterSelection = filmSelection.enter();
    enterSelection.append("img")
    .attr("class", "films") /*function(element){
      if(!element.isActive){
        return "films inactive";
      }else{
        return "films";
    }*/
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "films/" + element.getId() + ".jpg";
    })
    .on('click', _handleFilmClick)
  }

  function _updatePlanets(planets) {
    var parentSelection = d3.select("#planet-div");
    var planetSelection = parentSelection.selectAll(".planets").data(planets);
    var enterSelection = planetSelection.enter();
    enterSelection.append("img")
    .attr("class", "icon") /*function(element){
      if(!element.isActive){
        return "films inactive";
      }else{
        return "films";
    }*/
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "planets/" + element.getId() + ".png";
    })
    .on('click', _handlePlanetClick)
  }

  function _updateCharacters(characters) {
    var parentSelection = d3.select("#people-div");
    var characterSelection = parentSelection.selectAll(".people").data(characters);
    var enterSelection = characterSelection.enter();
    enterSelection.append("img")
    .attr("class", "icon") /*function(element){
      if(!element.isActive){
        return "films inactive";
      }else{
        return "films";
    }*/
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "people/icon/" + element.getId() + ".png";
    })
    .on('click', _handlePeopleClick)
  }

  function _updateStarships(starships) {
    var parentSelection = d3.select("#starship-div");
    var starshipSelection = parentSelection.selectAll(".starship").data(starships);
    var enterSelection = starshipSelection.enter();
    enterSelection.append("img")
    .attr("class", "icon") /*function(element){
      if(!element.isActive){
        return "films inactive";
      }else{
        return "films";
    }*/
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "spaceships/icons/" + element.getId() + ".png";
    })
    .on('click', _handleStarshipClick)
  }

  function _updateVehicles(vehicles) {
    var parentSelection = d3.select("#vehicle-div");
    var vehicleSelection = parentSelection.selectAll(".vehicle").data(vehicles);
    var enterSelection = vehicleSelection.enter();
    enterSelection.append("img")
    .attr("class", "icon") /*function(element){
      if(!element.isActive){
        return "films inactive";
      }else{
        return "films";
    }*/
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "spaceships/" + element.getId() + ".jpg";
    })
    .on('click', _handleVehicleClick)
  }

  function _handleVehicleClick(element, index, domElementArray) {
    console.log(element, index, domElementArray);
  }

  function _handleStarshipClick(element, index, domElementArray) {
    console.log(element, index, domElementArray);
  }

  function _handlePeopleClick(element, index, domElementArray) {
    console.log(element, index, domElementArray);
  }

  function _handlePlanetClick(element, index, domElementArray) {
    console.log(element, index, domElementArray);
  }

  function _handleFilmClick(element, index, domElementArray){
    console.log(element, index, domElementArray);
  }

  function update(films, planets, characters, starships, vehicles) {
    console.log(vehicles.length);
    _updateFilms(films);
    _updatePlanets(planets);
    _updateCharacters(characters);
    _updateStarships(starships);
//    _updateVehicles(vehicles);
  }


  that.update = update;
  return that;
  };
