/* eslint-env browser */
/* global UniverseAdministration*/

UniverseAdministration.starship = function() {
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
  cost;

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

  function getName(){
    return name;
  }
  that.getName = getName;
  that.init = init;
  that.getId = getId;
  return that;
};
