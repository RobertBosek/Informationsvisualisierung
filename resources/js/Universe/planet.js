/* eslint-env browser */
/* global UniverseAdministration*/

UniverseAdministration.planet = function() {
  "use strict";
  const RELATIVE_PLANET_SIZE = 10000;

  var that = {},
  id,
  name,
  climate,
  diameter,
  gravity,
  orbital_period,
  population,
  rotation_period,
  surface_water,
  terrain;

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

  function getSize(b) {
    if(b){
      return RELATIVE_PLANET_SIZE;
    }
    return diameter/2;
  }

  that.init = init;
  that.getId = getId;
  that.getSize = getSize;
  return that;
};
