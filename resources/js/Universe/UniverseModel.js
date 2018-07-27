/* eslint-env browser */
/* global UniverseAdministration*/

var UniverseAdministration = UniverseAdministration || {};

UniverseAdministration.UniverseModel = function() {
  "use strict";

  var that = {},
  onDataReadyCallback,

  filmsLoaded,
  planetsLoaded,
  charactersLoaded,
  starshipsLoaded,
  vehiclesLoaded,

  filmsById,
  filmsList,

  planetsById,
  planetsList,

  charactersById,
  charactersList,

  starshipsById,
  starshipsList,

  vehiclesById,
  vehiclesList;

  function setOnDataReadyListener(callback) {
    onDataReadyCallback = callback;
  }

  function connectData() {
    _connectFilms();
/*
    var planetList = film.getPlanetIds();
    for (let i = 0, i <= planetList.length; i++) {
      let planetId = planetList[i];
      let planet = planetsById[planetId]
      film.addPlanet(planet);
      planet.addFilm
    }
  */
  }

  function _connectFilms(){
    for (let i in films){
      let film = films[i];
      let filmPlanets = film.getPlanetIds();
      for (let j in filmPlanets){
        let planetId = filmPlanets[j];
        let planet = planetsById[planetId];
        film.addPlanet(planet)
      }
    }
  }

  function checkDataLoaded() {
    if (filmsLoaded && planetsLoaded && charactersLoaded && starshipsLoaded && vehiclesLoaded) {
//      connectData();
      onDataReadyCallback(filmsList, planetsList, charactersList, starshipsList, vehiclesList);
    }
  }

  function getData() {
    _getFilms();
    _getPlanets();
    _getCharacters();
    _getStarships();
    _getVehicles();
  }

  function _getFilms() {
    d3.json("/data/database/films.json").then(_processFilmData);
  }

  function _getPlanets() {
    d3.json("/data/database/planets.json").then(_processPlanetData);
  }

  function _getCharacters() {
    d3.json("/data/database/people.json").then(_processCharacterData);
  }

  function _getStarships() {
    d3.json("/data/database/starships.json").then(_processStarshipData);
  }

  function _getVehicles() {
    d3.json("/data/database/vehicles.json").then(_processVehiclesData);
  }

  function _processVehiclesData(data){
    vehiclesLoaded = false;
    vehiclesById = {};
    vehiclesList = [];
    for (let i=0; i < data.length; i++) {
      let currentVehicle = new UniverseAdministration.starship();
      currentVehicle.init(data[i]);
      vehiclesById[currentVehicle.getId()] = currentVehicle;
      vehiclesList.push(currentVehicle);
    }
    vehiclesList.sort(function(a,b) {
      return a.getId() - b.getId();
    })
    vehiclesLoaded = true;
    checkDataLoaded();
  }

  function _processStarshipData(data){
    starshipsLoaded = false;
    starshipsById = {};
    starshipsList = [];
    for (let i=0; i < data.length; i++) {
      let currentStarship = new UniverseAdministration.starship();
      currentStarship.init(data[i]);
      starshipsById[currentStarship.getId()] = currentStarship;
      starshipsList.push(currentStarship);
    }
    starshipsList.sort(function(a,b) {
      return a.getId() - b.getId();
    })
    starshipsLoaded = true;
    checkDataLoaded();
  }

  function _processCharacterData(data) {
    charactersLoaded = false;
    charactersById = {};
    charactersList = [];
    for (let i=0; i < data.length; i++) {
      let currentChar = new UniverseAdministration.character();
      currentChar.init(data[i]);
      charactersById[currentChar.getId()] = currentChar;
      charactersList.push(currentChar);
    }
    charactersList.sort(function(a,b) {
      return a.getId() - b.getId();
    })
    charactersLoaded = true;
    checkDataLoaded();
  }

  function _processPlanetData(data) {
    planetsLoaded = false;
    planetsById = {};
    planetsList = [];
    for (let i=0; i < data.length; i++) {
      let currentPlanet = new UniverseAdministration.planet();
      currentPlanet.init(data[i]);
      planetsById[currentPlanet.getId()] = currentPlanet;
      planetsList.push(currentPlanet);
    }
    planetsList.sort(function(a,b) {
      return a.getId() - b.getId();
    })
    planetsLoaded = true;
    checkDataLoaded();
  }

  function _processFilmData(data) {
    filmsLoaded = false;
    filmsById = {};
    filmsList = [];
    for (let i = 0; i < data.length; i++) {
      let currentFilm = new UniverseAdministration.film();
      currentFilm.init(data[i]);
      filmsById[currentFilm.getId()] = currentFilm;
      filmsList.push(currentFilm);
    }
    filmsList.sort(function(a,b) {
      return a.getOrder() - b.getOrder();
    })
    filmsLoaded = true;
    checkDataLoaded();
  }

  that.setOnDataReadyListener = setOnDataReadyListener;
  that.getData = getData;
  return that;
};
