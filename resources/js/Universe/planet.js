/* eslint-env browser */
/* global UniverseAdministration*/

UniverseAdministration.planet = function() {
  "use strict";
  const RELATIVE_PLANET_SIZE = 10000;

  var that = {},
  state = true,
  id,
  name,
  climate,
  diameter,
  gravity,
  orbital_period,
  population,
  rotation_period,
  surface_water,
  terrain,
  films = [],
  starships= [],
  vehicles= [],
  characters= [];

  function init(data){
    let tid = data.url.split("/");
    id = tid[tid.length-2];
    name = data.name;
    climate = data.climate;
    diameter = data.diameter;
    gravity = data.gravity;
    orbital_period = data.orbital_period;
    population = data.population;
    rotation_period = data.rotation_period;
    surface_water = data.surface_water;
    terrain = data.terrain;
  }

  function getId(){
    return id;
  }

  function getSize() {
    return diameter/2;
  }

  function addFilm(obj){
    films.push(obj);
  }

  function addStarship(obj){
    starships.push(obj);
  }

  function addVehicles(obj){
    vehicles.push(obj);
  }

  function addCharacter(obj){
    characters.push(obj);
  }

  function getFilms(str){
    if (str == 'obj'){
      return films;
    }
  }

  function getStarships(str){
    if (str == 'obj'){
      return starships;
    }
  }

  function getVehicles(str){
    if (str == 'obj'){
      return vehicles;
    }
  }

  function getPeople(str){
    if (str == 'obj'){
      return characters;
    }
  }

  function setState(b) {
    state = b;
  }

  function getState(){
    return state;
  }

  function getTemplateData(){
    return {
      "name": name,
      "population": population,
      "climate": climate,
      "diameter": diameter,
      "gravity": gravity,
      "orbital_period": orbital_period,
      "rotation_period": rotation_period,
      "surface_water": surface_water,
      "terrain": terrain
    }
  }


  that.RELATIVE_PLANET_SIZE = RELATIVE_PLANET_SIZE;
  that.init = init;
  that.getId = getId;
  that.getSize = getSize;
  that.addFilm = addFilm;
  that.addStarship = addStarship;
  that.addVehicles = addVehicles;
  that.addCharacter = addCharacter;
  that.getFilms = getFilms;
  that.getStarships = getStarships;
  that.getVehicles = getVehicles;
  that.getPeople = getPeople;
  that.setState = setState;
  that.getState = getState;
  that.getTemplateData = getTemplateData;
  return that;
};
