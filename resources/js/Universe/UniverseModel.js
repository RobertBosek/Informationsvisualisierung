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
    _connectPeople();
  }

  function _connectPeople(){
    var j;
    for (let i = 0; i < charactersList.length; i++){
      let currentCharacter = charactersList[i];

      let currentCharactersPlanets = currentCharacter.getPlanets('ids');
      for (j = 0; j < currentCharactersPlanets.length; j++){
        let planetId = currentCharactersPlanets[j];
        let currentPlanet = planetsById[planetId];
        currentCharacter.addPlanet(currentPlanet);
        currentPlanet.addCharacter(currentCharacter);
      }
      let currentCharactersStarships = currentCharacter.getStarships('ids');
      for (j = 0; j < currentCharactersStarships.length; j++){
        let starshipId = currentCharactersStarships[j];
        let currentStarship = starshipsById[starshipId];
        currentCharacter.addStarship(currentStarship);
        currentStarship.addCharacter(currentCharacter);
      }
      let currentCharactersVehicles = currentCharacter.getVehicles('ids');
      for (j = 0; j < currentCharactersVehicles.length; j++) {
        let vehicleId = currentCharactersVehicles[j];
        let currentVehicle = vehiclesById[vehicleId];
        currentCharacter.addVehicle(currentVehicle);
        currentVehicle.addCharacter(currentCharacter);
      }
    }
  }

  function _connectFilms(){
    var j;
    for (let i = 0; i < filmsList.length; i++){
      let currentFilm = filmsList[i];
      let currentFilmsPlanets = currentFilm.getPlanets('ids');
      for (j = 0; j < currentFilmsPlanets.length; j++){

        let planetId = currentFilmsPlanets[j]
        let currentPlanet = planetsById[planetId];
        currentFilm.addPlanet(currentPlanet);
        currentPlanet.addFilm(currentFilm);
      }
      let currentFilmsStarships = currentFilm.getStarships('ids');
      for (j = 0; j < currentFilmsStarships.length; j++){
        let starshipId = currentFilmsStarships[j]
        let currentStarship = starshipsById[starshipId];
        currentFilm.addStarship(currentStarship);
        currentStarship.addFilm(currentFilm);
      }
      let currentFilmsVehicles = currentFilm.getVehicles('ids');
      for (j = 0; j < currentFilmsVehicles.length; j++){
        let vehicleId = currentFilmsVehicles[j];
        let currentVehicle = vehiclesById[vehicleId];
        currentFilm.addVehicle(currentVehicle);
        currentVehicle.addFilm(currentFilm);
      }
      let currentFilmsCharacters = currentFilm.getPeople('ids');
      for (j = 0; j < currentFilmsCharacters.length; j++){
        let characterId = currentFilmsCharacters[j]
        let currentCharacter = charactersById[characterId];
        currentFilm.addCharacter(currentCharacter);
        currentCharacter.addFilm(currentFilm);
      }
    }
  }

  function checkDataLoaded() {
    if (filmsLoaded && planetsLoaded && charactersLoaded && starshipsLoaded && vehiclesLoaded) {
      connectData();
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
    for (let i = 0; i < data.length; i++) {
      let currentVehicle = new UniverseAdministration.vehicle();
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

  function setAllInactive(){
    let i;
    for (i = 0; i < filmsList.length; i++) {
      filmsList[i].setState(false);
    }
    for (i = 0; i < planetsList.length; i++) {
      planetsList[i].setState(false);
    }
    for (i = 0; i < starshipsList.length; i++) {
      starshipsList[i].setState(false);
    }
    for (i = 0; i < vehiclesList.length; i++) {
      vehiclesList[i].setState(false);
    }
    for (i = 0; i < charactersList.length; i++) {
      charactersList[i].setState(false);
    }
  }

  function activeItemChanged(type, id){
    setAllInactive();
    var clickedItem;
    if (type == 'film') {
      clickedItem = filmsById[id]
    } else if (type == 'planet') {
      clickedItem = planetsById[id]
    } else if (type == 'starship') {
      clickedItem = starshipsById[id];
    } else if (type == 'vehicle') {
      clickedItem = vehiclesById[id];
    } else if (type == 'character') {
      clickedItem = charactersById[id];
    }
    clickedItem.setState(true);
    let i;
    if (type != 'film'){
      let connectedFilms = clickedItem.getFilms('obj');
      for (i = 0; i < connectedFilms.length; i++) {
        connectedFilms[i].setState(true);
      }
    }
    if (type != 'planet'){
      let connectedPlanets = clickedItem.getPlanets('obj');
      for (i = 0; i < connectedPlanets.length; i++) {
        connectedPlanets[i].setState(true);
      }
    }
    if (type != 'starship' && type != 'vehicle'){
      let connectedStarships = clickedItem.getStarships('obj');
      for (i = 0; i < connectedStarships.length; i++) {
        connectedStarships[i].setState(true);
      }
    }
    if (type != 'vehicle' && type != 'starship'){
      let connectedVehicles = clickedItem.getVehicles('obj');
      for (i = 0; i < connectedVehicles.length; i++) {
        connectedVehicles[i].setState(true);
      }
    }
    if (type != 'character') {
      let connectedCharacters = clickedItem.getPeople('obj');
      for (i = 0; i < connectedCharacters.length; i++) {
        connectedCharacters[i].setState(true);
      }
    }
    onDataReadyCallback(filmsList, planetsList, charactersList, starshipsList, vehiclesList);
  }

  that.setOnDataReadyListener = setOnDataReadyListener;
  that.getData = getData;
  that.activeItemChanged = activeItemChanged;
  return that;
};
