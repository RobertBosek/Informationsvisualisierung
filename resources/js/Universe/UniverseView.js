/* eslint-env browser */
/* global UniverseAdministration*/

var UniverseAdministration = UniverseAdministration || {};

UniverseAdministration.UniverseView = function() {
  "use strict";

  const DEFAULT_PATH = "./data/images/";
  var that = {},
    filmSelection,
    planetSelection,
    starshipSelection,
    vehicleSelection,
    characterSelection,
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
        return "width: 40%;";
      } else if (element.getSize() === 0) {
        return "width: 25%;";
      }
       else if(element.getSize() > element.RELATIVE_PLANET_SIZE) {
        return "width: 100%";
      } else{
        let p = element.getSize()/element.RELATIVE_PLANET_SIZE*100/2+50;
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
    characterSelection = parentSelection.selectAll(".icon").data(characters);
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
    starshipSelection = parentSelection.selectAll(".icon").data(starships);
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
    vehicleSelection = parentSelection.selectAll(".icon").data(vehicles);
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

  function _handleVehicleClick(element, index, domElementArray) {
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
      console.log(vehicle);

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
      var hyperdriveRating = element.getHyperdriveRating();
      var mglt = element.getMGLT();


    var starship = {"name":name,"model":model,"manufacturer":manufacturer, "vehicle_class":vehicleClass,"consumables":consumables,"cargo_capacity":cargoCapacity,"length":length,"max_atmosphering_speed":maxAtmospheringSpeed,"cost_in_credits":cost,"hyperdriveRating":hyperdrive_rating,"mglt":MGLT};
      console.log(starship);
  }

  function _handlePeopleClick(element, index, domElementArray) {
     var people_id = element.getId();
      var name = element.getName();
      var size = element.getSize();
      var birthYear = element.getBirthYear();
      var gender = element.getGender();
      var mass = element.getMass();
      var skinColor = element.getSkinColor();
      var hairColor = element.getHairColor();
      var eyeColor = element.getEyeColor();

      var people = {"name":name,"size":height,"birthYear":birth_year, "gender":gender,"mass":mass,"skinColor":skin_color,"hairColor":hair_color,"eyeColor":eye_color};
      console.log(people);
  }

  function _handlePlanetClick(element, index, domElementArray) {
    var planet_id = element.getId();
      var name = element.getName();
      var climate = element.getClimate();
      var diameter = element.getDiameter();
      var gravity = element.getGravity();
      var orbitalPeriod = element.getOrbitalPeriod();
      var population = element.getPopulation();
      var rotationPeriod = element.getRotationPeriod();
      var surfaceWater = element.getSurfaceWater();
      var terrain = element.getTerrain();

      var planet = {"name":name,"climate":climate,"diameter":diameter, "gravity":gravity,"orbitalPeriod":orbital_period,"population":population,"rotationPeriod":rotation_period,"surfaceWater":surface_water,"terrain":terrain};
      console.log(planet);
  }

  function _handleFilmClick(element, index, domElementArray){
    var episoden_id = element.getId();
      var title = element.getTitle();
      var director = element.getDirector();
      var producer = element.getProducer();
      var releaseDate = element.getReleaseDate();

      var episoden = {"title":title,"director":director,"producer":producer, "releaseDate":release_date};
      console.log(episoden);
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
