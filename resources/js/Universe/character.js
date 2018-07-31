/* eslint-env browser */
/* global UniverseAdministration*/

UniverseAdministration.character = function() {
  "use strict";

  var that = {},
  state = true,
  id,
  name,
  birth_year,
  homeworld,
  gender,
  mass,
  size,
  skin_color,
  hair_color,
  eye_color,

  species,
  vehicleIds,
  starshipIds,
  planetIds,
  films = [],
  planets = [],
  starships= [],
  vehicles= [];

  function init(data){

    let tid = data.url.split("/");
    id = tid[tid.length-2];
    name = data.name;
    birth_year = data.birth_year;
    homeworld = data.homeworld;
    gender = data.gender;
    mass = data.mass;
    size = data.height;
    skin_color = data.skin_color;
    hair_color = data.hair_color;
    eye_color = data.eye_color;
    species = _processURLs(data.species);
    vehicleIds = _processURLs(data.vehicles);
    starshipIds = _processURLs(data.starships);
    planetIds = _processURLs([data.homeworld]);
  }

  function _processURLs(urls) {
    let toreturn = [];
    for (let i = 0; i < urls.length; i++) {
      let url = urls[i];
      let tid = url.split("/");
      let id = tid[tid.length-2];
      toreturn.push(id);
    }
    return toreturn;
  }

  function getId(){
    return id;
  }

  function getFilms(str){
    if (str == 'obj'){
      return films;
    }
  }

  function getPlanets(str){
    if (str == 'ids'){
      return planetIds;
    } else if (str == 'obj'){
      return planets;
    }
  }

  function getStarships(str){
    if (str == 'ids'){
      return starshipIds;
    } else if (str == 'obj'){
      return starships;
    }
  }

  function getVehicles(str){
    if (str == 'ids'){
      return vehicleIds;
    } else if (str == 'obj'){
      return vehicles;
    }
  }

  function addFilm(obj){
    films.push(obj);
  }

  function addPlanet(obj){
    planets.push(obj);
  }

  function addStarship(obj){
    starships.push(obj);
  }

  function addVehicle(obj){
    vehicles.push(obj);
  }

  function setState(b) {
    state = b;
  }

  function getState(){
    return state;
  }

  function getTemplateData() {
    return {
      "id" : id,
      "name" : name,
      "birth_year" : birth_year,
      "gender" : gender,
      "mass" : mass,
      "height" : size,
      "skin_color" : skin_color,
      "hair_color" : hair_color,
      "eye_color" : eye_color
    };
  }

  that.init = init;
  that.getId = getId;
  that.getFilms = getFilms;
  that.getPlanets = getPlanets;
  that.getStarships = getStarships;
  that.getVehicles = getVehicles;
  that.addFilm = addFilm;
  that.addPlanet = addPlanet;
  that.addStarship = addStarship;
  that.addVehicle = addVehicle;
  that.setState = setState;
  that.getState = getState;
  that.getTemplateData = getTemplateData;
  return that;
};
