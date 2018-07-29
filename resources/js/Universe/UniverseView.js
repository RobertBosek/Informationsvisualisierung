/* eslint-env browser */
/* global UniverseAdministration*/

var UniverseAdministration = UniverseAdministration || {};

UniverseAdministration.UniverseView = function() {
  "use strict";

  const DEFAULT_PATH = "./data/images/",
  MAX_DIA_PLANET = 19720;
  var that = {},
  infoList,
  createTemplate;

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
    var planetSelection = parentSelection.selectAll(".icon").data(planets);
    var enterSelection = planetSelection.enter();
    enterSelection.append("div")
    .attr("class", "icon")
    .append("img")
    .attr("style", function(element, index) {
      if (isNaN(element.getSize())) {
        return "width: 50%;";
      } else if (element.getSize() === 0) {
        return "width: 40%;";
      }
       else if(element.getSize() > element.getSize(true)) {
        return "width: 100%";
      } else{
        let p = element.getSize()/element.getSize(true)*100/2+50;
        return "width: " + p + "%;";
      }

    })
    /*function(element){
      if(!element.isActive){
        return "films inactive";
      }else{
        return "films";
    }*/
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "planets/" + element.getId() + ".png";
    })
    .attr("class", "pointer centered")
    .on('click', _handlePlanetClick)
  }

  function _updateCharacters(characters) {
    var parentSelection = d3.select("#people-div");
    var characterSelection = parentSelection.selectAll(".people").data(characters);
    var enterSelection = characterSelection.enter();
    enterSelection.append("img")
    .attr("class", "icon pointer") /*function(element){
      if(!element.isActive){
        return "films inactive";
      }else{
        return "films";
    }*/
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "people/icons/" + element.getId() + ".png";
    })
    .on('click', _handlePeopleClick)
  }

  function _updateStarships(starships) {
    var parentSelection = d3.select("#starship-div");
    var starshipSelection = parentSelection.selectAll(".starship").data(starships);
    var enterSelection = starshipSelection.enter();
    enterSelection.append("img")
    .attr("class", "icon pointer") /*function(element){
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
    .attr("class", "icon pointer") /*function(element){
      if(!element.isActive){
        return "films inactive";
      }else{
        return "films";
    }*/
    .attr("src", function(element, index) {
      return DEFAULT_PATH + "vehicles/icons/" + element.getId() + ".png";
    })
    .on('click', _handleVehicleClick)
  }

  function _handleVehicleClick(el, index, domElementArray) {
      var vehicles_id = element.getId();
      var name = element.getName();
      var model = element.getModel();
      var manufacturer = element.getManufacturer();
      var vehicleClass = element.getVehicleClass();
      var consumables = element.getConsumables();
      var cargoCapacity = element.getCargoCapacity();
      var length = element.getLength();
      var maxAtmospheringSpeed = element.getMaxAtmospheringSpeed();
      var cost = element.getCost();
      
      
    var vehicle = {"name":name,"model":model,"manufacturer":manufacturer, "vehicle_class":vehicleClass,"consumables":consumables,"cargo_capacity":cargoCapacity,"length":length,"max_atmosphering_speed":maxAtmospheringSpeed,"cost_in_credits":cost};
    
    infoList = document.querySelector(".info-section .info");
    var el = document.querySelector("#vehicles").innerHTML;
    createTemplate = _.template(el);
    var nodeInfo, existingNode;
	existingNode = infoList.querySelector("[vehicles_id='" + vehicles_id + "']");
    if (existingNode !== null) {
      return;
    }
    infoList.innerHTML = "";
     nodeInfo = document.createElement("li");
     nodeInfo.innerHTML = createTemplate(vehicle);
     infoList.appendChild(nodeInfo.children[0]);
  }

  function _handleStarshipClick(element, index, domElementArray) {
          var starship_id = element.getId();
      var name = element.getName();
      var model = element.getModel();
      var manufacturer = element.getManufacturer();
      var vehicleClass = element.getStarshipClass();
      var consumables = element.getConsumables();
      var cargoCapacity = element.getCargoCapacity();
      var length = element.getLength();
      var maxAtmospheringSpeed = element.getMaxAtmospheringSpeed();
      var cost = element.getCost();
      var hyperdriveRating = getHyperdriveRating();
      var mglt = getMGLT();
      
      
    var vehicle = {"name":name,"model":model,"manufacturer":manufacturer, "vehicle_class":vehicleClass,"consumables":consumables,"cargo_capacity":cargoCapacity,"length":length,"max_atmosphering_speed":maxAtmospheringSpeed,"cost_in_credits":cost,"hyperdriveRating":hyperdrive_rating,"mglt":MGLT};
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
    _updateFilms(films);
    _updatePlanets(planets);
    _updateCharacters(characters);
    _updateStarships(starships);
    _updateVehicles(vehicles);
  }

  that.update = update;
  return that;
  };
