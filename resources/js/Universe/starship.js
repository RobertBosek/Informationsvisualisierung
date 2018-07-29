/* eslint-env browser */
/* global UniverseAdministration*/

UniverseAdministration.starship = function() {
  "use strict";

  var that = {},
  id,
  name,
  model,
  manufacturer,
  starship_class,
  consumables,
  cargo_capacity,
  length,
  max_atmosphering_speed,
  MGLT,
  hyperdrive_rating,
  cost;

  function init(data){
    let tid = data.url.split("/");
    id = tid[tid.length-2];
    name = data.name;
    model = data.model;
    manufacturer = data.manufacturer;
    starship_class = data.starship_class;
    consumables = data.consumables;
    cargo_capacity = data.cargo_capacity;
    length = data.length;
    max_atmosphering_speed = data.max_atmosphering_speed;
    MGLT = data.MGLT;
    hyperdrive_rating = data.hyperdrive_rating;
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
    
  function getStarshipClass(){
      return starship_class;
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
    
function getMGLT(){
    return MGLT;
}

function getHyperdriveRating(){
    return hyperdrive_rating;
}
    
function getCost(){
    return cost;
}
    
  that.getMGLT = getMGLT;
  that.getHyperdriveRating = getHyperdriveRating;
  that.getCost = getCost;    
  that.getMaxAtmospheringSpeed = getMaxAtmospheringSpeed; 
  that.getLength = getLength;    
  that.getCargoCapacity = getCargoCapacity; 
  that.getConsumables = getConsumables;
  that.getStarshipClass = getStarshipClass;
  that.getManufacturer = getManufacturer;  
  that.getModel = getModel;
  that.getName = getName;
  that.init = init;
  that.getId = getId;
  return that;
};
