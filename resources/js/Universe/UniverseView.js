/* eslint-env browser */
/* global UniverseAdministration*/

var UniverseAdministration = UniverseAdministration || {};

UniverseAdministration.UniverseView = function() {
  "use strict";

  const DEFAULT_PATH = "./data/images/";
  var that = {},
    onFilmClickListener,
    onPlanetClickListener,
    onStarshipClickListener,
    onVehicleClickListener,
    onCharacterClickListener,
    infoList = document.querySelector(".info-section .info");
/*
  var tooltip = d3.select("body").append("div")
    .attr("class", "tooltip")
    .style("opacity", 0);
*/
  function setOnItemClickListeners(lArray){
    onFilmClickListener = lArray["filmClickListener"];
    onPlanetClickListener = lArray["planetClickListener"];
    onStarshipClickListener = lArray["starshipClickListener"];
    onVehicleClickListener = lArray["vehicleClickListener"];
    onCharacterClickListener = lArray["characterClickListener"];
  }

  function _updateFilms(films) {
    var parentSelection = d3.select("#film-div");
    var filmSelection = parentSelection.selectAll(".films").data(films);
    var enterSelection = filmSelection.enter();

    enterSelection.append("img").attr("class", "films");

    filmSelection = filmSelection.merge(enterSelection);

    parentSelection.selectAll(".films")
    .attr("class", function(element){
          if(element.getState()){
            return "films pointer";
          }else{
            return "films pointer inactive";
        }})
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "films/" + element.getId() + ".jpg";
    })
    .on('click', _handleFilmClick)
/*
    .on("mouseover", function(element) {
            tooltip.transition()
                .duration(100)
                .style("opacity", .9);
            tooltip.html(element.getId())
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
            })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
*/
  }

  function _updatePlanets(planets) {
    var parentSelection = d3.select("#planet-div");
    var planetSelection = parentSelection.selectAll(".icon").data(planets);
    var enterSelection = planetSelection.enter();

    enterSelection.append("div")
    .attr("class", "icon")
    .append("img");

    planetSelection = planetSelection.merge(enterSelection);

    parentSelection.selectAll(".icon img")
    .attr("style", function(element, index) {
      if (isNaN(element.getSize())) {
        return "width: 40%; height: 40%;";
      } else if (element.getSize() === 0) {
        return "width: 25%; height: 25%;";
      }
       else if(element.getSize() > element.RELATIVE_PLANET_SIZE) {
        return "width: 100%; height: 100%;";
      } else{
        let p = element.getSize()/element.RELATIVE_PLANET_SIZE*100/2+50;
        return "width: " + p + "%; height: " + p + "%;";
      }
    })
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "planets/" + element.getId() + ".png";
    })
    .attr("class", function(element){
          if(element.getState()){
            return "pointer";
          }else{
            return "pointer inactive";
        }})
    .on('click', _handlePlanetClick)
  }

  function _updateCharacters(characters) {
    var parentSelection = d3.select("#people-div");
    var characterSelection = parentSelection.selectAll(".icon").data(characters);
    var enterSelection = characterSelection.enter();

    enterSelection.append("img").attr("class", "icon");

    characterSelection = characterSelection.merge(enterSelection);


    parentSelection.selectAll(".icon")
    .attr("class", function(element){
          if(element.getState()){
            return "icon pointer";
          }else{
            return "icon pointer inactive";
        }})
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "people/icons/" + element.getId() + ".png";
    })
    .on('click', _handlePeopleClick)
  }

  function _updateStarships(starships) {
    var parentSelection = d3.select("#starship-div");
    var starshipSelection = parentSelection.selectAll(".icon").data(starships);
    var enterSelection = starshipSelection.enter();
    enterSelection.append("img").attr("class", "icon");

    starshipSelection = starshipSelection.merge(enterSelection);

    parentSelection.selectAll("img.icon")
    .attr("class", function(element){
          if(element.getState()){
            return "icon pointer";
          }else{
            return "icon pointer inactive";
        }})
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "spaceships/icons/" + element.getId() + ".png";
    })
    .on('click', _handleStarshipClick)
  }

  function _updateVehicles(vehicles) {
    var parentSelection = d3.select("#vehicle-div");
    var vehicleSelection = parentSelection.selectAll(".icon").data(vehicles);
    var enterSelection = vehicleSelection.enter();
    enterSelection.append("img").attr("class", "icon");

    vehicleSelection = vehicleSelection.merge(enterSelection);


    parentSelection.selectAll("img.icon")
    .attr("class", function(element){
          if(element.getState()){
            return "icon pointer";
          }else{
            return "icon pointer inactive";
        }})
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "vehicles/icons/" + element.getId() + ".png";
    })
    .on('click', _handleVehicleClick)
  }


  function showVehicleData(element){
    console.log(element);
  }

  function _handleVehicleClick(element, index, domElementArray) {
    showVehicleData(element);
    onVehicleClickListener(element.getId());
  }

  function showStarshipData(element){
    console.log(element);
  }

  function _handleStarshipClick(element, index, domElementArray) {
    showStarshipData(element);
    onStarshipClickListener(element.getId());
  }

  function showCharacterData(element){
    console.log(element);
  }

  function _handlePeopleClick(element, index, domElementArray) {
    showCharacterData(element);
    onCharacterClickListener(element.getId());
  }

  function showPlanetData(element){
    console.log(element);
  }

  function _handlePlanetClick(element, index, domElementArray) {
    showPlanetData(element);
    onPlanetClickListener(element.getId());
  }

  function showFilmData(element){
    console.log(element);
  }

  function _handleFilmClick(element, index, domElementArray){
    showFilmData(element);
    onFilmClickListener(element.getId());
  }

  function update(films, planets, characters, starships, vehicles) {
    _updateFilms(films);
    _updatePlanets(planets);
    _updateCharacters(characters);
    _updateStarships(starships);
    _updateVehicles(vehicles);
  }

  that.update = update;
  that.setOnItemClickListeners = setOnItemClickListeners;
  return that;
  };
