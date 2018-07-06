/* eslint-env browser */
/* global UniverseAdministration*/

UniverseAdministration.film = function() {
  "use strict";

  var that = {},
  order,
  title,
  director,
  producer,
  release_date,
  opening_crawl,
  id,
  planets,
  starships,
  vehicles,
  characters;

  function init(data){
    order = data.episode_id;
    title = data.title;
    director = data.director;
    producer = data.producer;
    release_date = data.release_date;
    opening_crawl = data.opening_crawl;

    let tid = data.url.split("/");
    id = tid[tid.length-2];
    planets = _processURLs(data.planets);
    starships = _processURLs(data.starships);
    vehicles = _processURLs(data.vehicles);
    characters = _processURLs(data.characters);
  }

  function _processURLs(urls) {
    let toreturn = [];
    for (let url in urls) {
      let tid = url.split("/");
      let id = tid[tid.length-2];
      toreturn.push(id);
    }
  }

  function getOrder(){
    return order;
  }

  function getId(){
    return id;
  }

  that.init = init;
  that.getId = getId;
  that.getOrder = getOrder;
  return that;
};
