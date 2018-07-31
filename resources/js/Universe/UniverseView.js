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
    filmTemplate = document.querySelector("#episode-template").innerHTML,
    planetTemplate = document.querySelector("#planets-template").innerHTML,
    starshipTemplate = document.querySelector("#starships-template").innerHTML,
    vehicleTemplate = document.querySelector("#vehicles-template").innerHTML,
    characterTemplate = document.querySelector("#people-template").innerHTML,
    details = document.querySelector(".info-section .info"),
    tooltip = d3.select("body").append("div")
      .attr("class", "tooltip")
      .style("opacity", 0);

  function setOnItemClickListeners(lArray){
    onFilmClickListener = lArray["filmClickListener"];
    onPlanetClickListener = lArray["planetClickListener"];
    onStarshipClickListener = lArray["starshipClickListener"];
    onVehicleClickListener = lArray["vehicleClickListener"];
    onCharacterClickListener = lArray["characterClickListener"];
  }

  function _updateFilms(films) {
/*
    var chartDiv = document.querySelector("#film-chart");
    chartDiv.innerHTML = "";
    let counter = 0;
    for (let i=0; i < films.length; i++) {
      if (films[i].getState()) {
        counter += 1;
      }
    }
    var childDiv = document.createElement("div");
    childDiv.setAttribute("style", function() {
      let percentage = counter/films.length*100
      return "width: " + percentage + "%;";
    })
    childDiv.innerHTML = counter;
    chartDiv.appendChild(childDiv);
*/
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
    .on("mouseover", function(element) {
            tooltip.transition()
                .duration(100)
                .style("opacity", .9);
            tooltip.html(_insertData(element.getTemplateData(), _.template(filmTemplate)).innerHTML)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
            })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
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
    .on("mouseover", function(element) {
            tooltip.transition()
                .duration(100)
                .style("opacity", .9);
            tooltip.html(_insertData(element.getTemplateData(), _.template(planetTemplate)).innerHTML)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
            })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
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

    .on("mouseover", function(element) {
            tooltip.transition()
                .duration(100)
                .style("opacity", .9);
            tooltip.html(_insertData(element.getTemplateData(), _.template(characterTemplate)).innerHTML)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
            })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
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
    .on("mouseover", function(element) {
            tooltip.transition()
                .duration(100)
                .style("opacity", .9);
            tooltip.html(_insertData(element.getTemplateData(), _.template(starshipTemplate)).innerHTML)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
            })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
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
    .on("mouseover", function(element) {
            tooltip.transition()
                .duration(100)
                .style("opacity", .9);
            tooltip.html(_insertData(element.getTemplateData(), _.template(vehicleTemplate)).innerHTML)
                .style("left", (d3.event.pageX) + "px")
                .style("top", (d3.event.pageY - 28) + "px");
            })
        .on("mouseout", function(d) {
            tooltip.transition()
                .duration(500)
                .style("opacity", 0);
        });
  }

  function _handleVehicleClick(element, index, domElementArray) {
    let info = _insertData(element.getTemplateData(), _.template(vehicleTemplate));
    details.innerHTML = "";
    details.appendChild(info);
    onVehicleClickListener(element.getId());
  }

  function _handleStarshipClick(element, index, domElementArray) {
    let info = _insertData(element.getTemplateData(), _.template(starshipTemplate));
    details.innerHTML = "";
    details.appendChild(info);
    onStarshipClickListener(element.getId());
  }

  function _handlePeopleClick(element, index, domElementArray) {
    let info = _insertData(element.getTemplateData(), _.template(characterTemplate));
    details.innerHTML = "";
    details.appendChild(info);
    onCharacterClickListener(element.getId());
  }

  function _handlePlanetClick(element, index, domElementArray) {
    let info = _insertData(element.getTemplateData(), _.template(planetTemplate));
    details.innerHTML = "";
    details.appendChild(info);
    onPlanetClickListener(element.getId());
  }

  function _handleFilmClick(element, index, domElementArray){
    let info = _insertData(element.getTemplateData(), _.template(filmTemplate));
    details.innerHTML = "";
    details.appendChild(info);
    onFilmClickListener(element.getId());
  }

  function _insertData(obj, createTemplate) {
    var nodeInfo = document.createElement("div");
    nodeInfo.innerHTML = createTemplate(obj);
    console.log(nodeInfo.children[0]);
    return nodeInfo.children[0];
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
