BirdingApp.BirdListView = function() {
  "use strict";
  var that = {},
    createEntryTemplate,
    birdList;


  function init() {
	var entryEl = document.querySelector("#bird-list-entry").innerHTML;
	//console.log(entryEl);
	createEntryTemplate = _.template(entryEl);
    birdList = document.querySelector(".bird-gallery .bird-list");
    return that;
  }

  function addListEntry(bird) {
    var nodeEntry = document.createElement("div");
    nodeEntry.innerHTML = createEntryTemplate(bird);
    birdList.appendChild(nodeEntry.children[0]);
  }

  function deleteBirdList() {
    while (birdList.firstChild) {
      birdList.removeChild(birdList.firstChild);
    }
  }

  that.init = init;
  that.addListEntry = addListEntry;
  that.deleteBirdList = deleteBirdList;
  return that;
};
