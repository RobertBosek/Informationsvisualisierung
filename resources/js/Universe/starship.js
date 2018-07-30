/* eslint-env browser */
/* global UniverseAdministration*/

UniverseAdministration.starship = function() {
  "use strict";

  var that = {},
  state = true,
  id,
  name,
  model,
  manufacturer,
  starship_class,
  consumables,
  cargo_capacity,
  length,
  max_atmosphering_speed,
  MGLT,
  hyperdrive_rating,
  cost,
  films = [],
  planets = [],
  characters= [];

  function init(data){
    let tid = data.url.split("/");
    id = tid[tid.length-2];
    name = data.name;
    model = data.model;
    manufacturer = data.manufacturer;
    starship_class = data.starship_class;
    consumables = data.consumables;
    cargo_capacity = data.cargo_capacity;
    length = data.length;
    max_atmosphering_speed = data.max_atmosphering_speed;
    MGLT = data.MGLT;
    hyperdrive_rating = data.hyperdrive_rating;
    cost = data.cost;
  }

  function getId(){
    return id;
  }

  function addFilm(obj){
    films.push(obj);
  }

  function addPlanet(obj){
    planets.push(obj);
  }

  function addCharacter(obj){
    characters.push(obj);
  }

  function getFilms(str){
    if (str == 'obj'){
      return films;
    }
  }

  function getPlanets(str){
    if (str == 'obj'){
      return starships;
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






       function getName(){
    return name;
  }

  function getModel(){
    return model;
  }

  function getManufacturer(){
      return manufacturer;
  }

  function getStarshipClass(){
      return starship_class;
  }

  function getConsumables(){
      return consumables;
  }

  function getCargoCapacity(){
      return cargo_capacity;
  }

 function getLength(){
     return length;
 }

function getMaxAtmospheringSpeed(){
    return max_atmosphering_speed;
}

function getMGLT(){
    return MGLT;
}

function getHyperdriveRating(){
    return hyperdrive_rating;
}

function getCost(){
    return cost;
}

  that.getMGLT = getMGLT;
  that.getHyperdriveRating = getHyperdriveRating;
  that.getCost = getCost;
  that.getMaxAtmospheringSpeed = getMaxAtmospheringSpeed;
  that.getLength = getLength;
  that.getCargoCapacity = getCargoCapacity;
  that.getConsumables = getConsumables;
  that.getStarshipClass = getStarshipClass;
  that.getManufacturer = getManufacturer;
  that.getModel = getModel;
  that.getName = getName;


  that.init = init;
  that.getId = getId;
  that.addFilm = addFilm;
  that.addPlanet = addPlanet;
  that.addCharacter = addCharacter;
  that.getFilms = getFilms;
  that.getPlanets = getPlanets;
  that.getPeople = getPeople;
  that.setState = setState;
  that.getState = getState;
  return that;
};
