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
<<<<<<< HEAD
    showVehicleData(element);
    onVehicleClickListener(element.getId());
  }

  function showStarshipData(element){
    console.log(element);
  }
=======
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
>>>>>>> 28d08b591804ec057a240e677d32b56e5518c7a0

  function _handleStarshipClick(element, index, domElementArray) {
    showStarshipData(element);
    onStarshipClickListener(element.getId());
  }

<<<<<<< HEAD
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
=======
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
>>>>>>> 28d08b591804ec057a240e677d32b56e5518c7a0
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
