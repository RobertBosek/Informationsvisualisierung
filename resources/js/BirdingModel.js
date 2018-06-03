BirdingApp.BirdingModel = function(options) {
  "use strict";
  var that = {},
	jsonData,
    birdList,
    selectedBirdsID = [],
	birdID;
  
  function init() {
    jsonData = JSON.parse(document.querySelector("#bird-list").innerHTML);
    birdList = jsonData;//_.sortBy(jsonData, getBirdName);
    return that;
  }
	
  function getBirdName(){
	for(var i = 0; i<jsonData.length; i++){
		return jsonData[i].name;
	}
  }
  
  function getBirdList() {
    return birdList;
  }
  
  //get the bird list, filtered by json-Key
  function getFilteredBirdList(jsonKey, searchString) {
    return _.filter(birdList, function(bird) {
	  var lowCaseInput = searchString.toLowerCase();
	  var lowCaseBirdNames = bird[jsonKey].toLowerCase();
      return lowCaseBirdNames.indexOf(lowCaseInput) !== -1;
    });
  }
  
  function getBirdById(id) {
	var birdWithId = _.findWhere(birdList, { id: id });
    return birdWithId;
  }
  
  function getCountingList() {
    var countingList = _.filter(birdList, checkIdCountingList);
	return countingList;
  }
  
  function checkIdCountingList(bird) {
    return _.contains(selectedBirdsID, getBirdById);
  }
	
  function addBirdToCountingList(id) {
    birdID = getBirdById(id);
	//check if a bird is added more than one time
	var foundIdCountingList = _.contains(selectedBirdsID, id);
	// if (foundIdCountingList === true) {
      // return birdID;
    // }
    birdID.count = 0;
    selectedBirdsID.push(id);
    return getBirdById(id);
  }
  
  function changeBirdCounter(increment, id) {
	birdID = getBirdById(id);
  
	//var aaa = document.querySelectorAll('.bird-counter .bird-list-entry');
	
	//console.log(aaa.item(1));
	
	if(_.contains(selectedBirdsID, id)===true){
    selectedBirdsID.pop(id);

	}
	var bi = document.querySelector(".bird-counter .bird-list .bird-list-entry");
	
	// console.log(bi.childNodes);
	// bi.parentNode.removeChild(bi);
	
    return birdID;
  }
  
 
  
  that.init = init;
  that.getBirdList = getBirdList;
  that.filterBirdListByName = getFilteredBirdList.bind(this, "name");
  that.filterBirdListByLatinName = getFilteredBirdList.bind(this, "latinName");
  that.filterBirdListByAudio = getFilteredBirdList.bind(this, "audioPath");
  that.addBirdToCountingList = addBirdToCountingList;
  that.getCountingList = getCountingList;
  that.increaseBirdCount = changeBirdCounter.bind(this, 1);
  that.decreaseBirdCount = changeBirdCounter.bind(this, -1);
  return that;
};