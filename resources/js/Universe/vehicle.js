/* eslint-env browser */
/* global UniverseAdministration*/

UniverseAdministration.vehicle = function() {
  "use strict";

  var that = {},
    id,
    name,
    model,
    manufacturer,
    vehicle_class,
    consumables,
    cargo_capacity,
    length,
    max_atmosphering_speed,
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
    vehicle_class = data.vehicle_class;
    consumables = data.consumables;
    cargo_capacity = data.cargo_capacity;
    length = data.length;
    max_atmosphering_speed = data.max_atmosphering_speed;
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

  that.init = init;
  that.getId = getId;
  that.addFilm = addFilm;
  that.addPlanet = addPlanet;
  that.addCharacter = addCharacter;
  return that;
};
