/* eslint-env browser */
/* global UniverseAdministration*/

UniverseAdministration.film = function() {
  "use strict";

  var that = {},
  state = true,
  order,
  title,
  director,
  producer,
  release_date,
  opening_crawl,
  id,
  planetIds,
  starshipIds,
  vehicleIds,
  characterIds,
  planets = [],
  starships= [],
  vehicles= [],
  characters= [];

  function init(data){
    order = data.episode_id;
    title = data.title;
    director = data.director;
    producer = data.producer;
    release_date = data.release_date;
    opening_crawl = data.opening_crawl;

    let tid = data.url.split("/");
    id = tid[tid.length-2];
    planetIds = _processURLs(data.planets);
    starshipIds = _processURLs(data.starships);
    vehicleIds = _processURLs(data.vehicles);
    characterIds = _processURLs(data.characters);
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

  function getOrder(){
    return order;
  }

  function getId(){
    return id;
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

  function getPeople(str){
    if (str == 'ids'){
      return characterIds;
    } else if (str == 'obj'){
      return characters;
    }
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

  function addCharacter(obj){
    characters.push(obj);
  }

  function setState(b) {
    state = b;
  }

  function getState(){
    return state;
  }

  function getTemplateData() {
    return {
      "title": title,
      "director": director,
      "producer": producer,
      "release_date": release_date,
      "opening_crawl": opening_crawl
    }
  }

  that.init = init;
  that.getId = getId;
  that.getOrder = getOrder;
  that.getPlanets = getPlanets;
  that.getStarships = getStarships;
  that.getVehicles = getVehicles;
  that.getPeople = getPeople;
  that.addPlanet = addPlanet;
  that.addStarship = addStarship;
  that.addVehicle = addVehicle;
  that.addCharacter = addCharacter;
  that.setState = setState;
  that.getState = getState;
  that.getTemplateData = getTemplateData;
  return that;
};
