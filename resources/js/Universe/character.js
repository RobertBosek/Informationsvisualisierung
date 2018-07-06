/* eslint-env browser */
/* global UniverseAdministration*/

UniverseAdministration.character = function() {
  "use strict";

  var that = {},
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
  vehicles,
  starships,
  planets;

  function init(data){
    let tid = data.url.split("/");
    id = tid[tid.length-2];
    name = data.name;
    birth_year = data.birth_year;
    homeworld = data.homeworld;
    gender = data.gender;
    mass = data.mass;
    size = data.size;
    skin_color = data.skin_color;
    hair_color = data.hair_color;
    eye_color = data.eye_color;

    species = _processURLs(data.species);
    vehicles = _processURLs(data.vehicles);
    starships = _processURLs(data.starships);
    planets = _processURLs(data.planets);
  }

  function _processURLs(urls) {
    let toreturn = [];
    for (let url in urls) {
      let tid = url.split("/");
      let id = tid[tid.length-2];
      toreturn.push(id);
    }
  }

  function getId(){
    return id;
  }

  that.init = init;
  that.getId = getId;
  return that;
};
