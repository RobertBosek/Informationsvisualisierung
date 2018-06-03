BirdingApp.BirdCounterView = function() {
  "use strict";
  var that = {},
    createEntryTemplate,
    birdList;

  function init() {
	birdList = document.querySelector(".bird-counter .bird-list");
	var el = document.querySelector("#bird-counter-entry").innerHTML;
    createEntryTemplate = _.template(el);
    return that;
  }
 
 //create new nodes, when a bird is selected 
  function addCounterEntry(bird) {
	  
    var nodeEntry, existingNode;
	existingNode = birdList.querySelector("[bird-id='" + bird.id +
      "']");
    if (existingNode !== null) {
      return;
    }
     nodeEntry = document.createElement("div");
     nodeEntry.innerHTML = createEntryTemplate(bird);
     birdList.appendChild(nodeEntry.children[0]);
  }

  //update the count number
  function updateCounter(bird) {
    var birdCounterNode = birdList.querySelector("[bird-id='" + bird.id + "'] .bird-current-max");
    //birdCounterNode.innerHTML = bird.count;
  }
	
  that.init = init;
  that.addCounterEntry = addCounterEntry;
  that.updateCounter = updateCounter;
  return that;
};
