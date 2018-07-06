/* eslint-env browser */
/* global UniverseAdministration*/

UniverseAdministration.planet = function() {
  "use strict";

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

  that.init = init;
  that.getId = getId;
  return that;
};
