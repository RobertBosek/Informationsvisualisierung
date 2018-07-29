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

  function getModel(){
    return model;
  }
  
  function getManufacturer(){
      return manufacturer;
  }
    
  function getVehicleClass(){
      return vehicle_class;
  }
    
  function getConsumables(){
      return consumables;
  }
    
  function getCargoCapacity(){
      return cargo_capacity;
  }
    
 function getLength(){
     return length;
 }
    
function getMaxAtmospheringSpeed(){
    return max_atmosphering_speed;
}
    
function getCost(){
    return cost;
}
    
  that.getCost = getCost;    
  that.getMaxAtmospheringSpeed = getMaxAtmospheringSpeed; 
  that.getLength = getLength;    
  that.getCargoCapacity = getCargoCapacity; 
  that.getConsumables = getConsumables;
  that.getVehicleClass = getVehicleClass;
  that.getManufacturer = getManufacturer;  
  that.getModel = getModel;
  that.getName = getName;
  that.init = init;
  that.getId = getId;
  return that;
};
