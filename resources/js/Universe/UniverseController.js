/* eslint-env browser */
/* global UniverseAdministration*/

var UniverseAdministration = UniverseAdministration || {};

UniverseAdministration.UniverseController = function () {

  "use strict";

  var that = {},
  active,
  onActiveItemChangeListener;

  function _handleFilmClick(filmId){
    active = {
      type: 'film',
      id: filmId
    };
    onActiveItemChangeListener(active.type, active.id);
  }

  function _handlePlanetClick(planetId){
    active = {
      type: 'planet',
      id: planetId
    };
    onActiveItemChangeListener(active.type, active.id);
  }

  function _handleStarshipClick(starshipId){
    active = {
      type: 'starship',
      id: starshipId
    };
    onActiveItemChangeListener(active.type, active.id);
  }

  function _handleVehicleClick(vehicleId){
    active = {
      type: 'vehicle',
      id: vehicleId
    };
    onActiveItemChangeListener(active.type, active.id);
  }

  function _handlePeopleClick(characterId){
    active = {
      type: 'character',
      id: characterId
    };
    onActiveItemChangeListener(active.type, active.id);
  }

  function getHandleItemClickListeners() {
    return {
    "filmClickListener": _handleFilmClick,
    "planetClickListener": _handlePlanetClick,
    "starshipClickListener": _handleStarshipClick,
    "vehicleClickListener": _handleVehicleClick,
    "characterClickListener": _handlePeopleClick
    };
  }

  function setOnActiveItemChangeListener(listener){
    onActiveItemChangeListener = listener;
  }

  that.getHandleItemClickListeners = getHandleItemClickListeners;
  that.setOnActiveItemChangeListener = setOnActiveItemChangeListener;
  return that;
};
