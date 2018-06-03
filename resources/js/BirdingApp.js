var BirdingApp = (function() {
	"use strict";
    var that = {},
        birdingModel,
        birdingController,
        birdCounterView,
        birdListView,
		birdIdJson,
		birdList,
		bird;
   
   
   //if there is no search input, then show the list with all birds
   //otherwise filter this list, according to the user's search input
    function getSearchInput(input) {
        if (input === "") {
            birdList = birdingModel.getBirdList();
        } else {
            birdList = birdingModel.filterBirdListByName(input);
        }
        birdListView.deleteBirdList();
        for (var i = 0; i < birdList.length; i++) {
            birdListView.addListEntry(birdList[i]);
        }
    }
	
	//add the selected birds to the counting list
    function addedBird(birdID) {
		birdIdJson = parseInt(birdID);
        bird = birdingModel.addBirdToCountingList(birdIdJson);
        birdCounterView.addCounterEntry(bird);
    }

   //when the plus button of selected bird is clicked, the count number 
   //of a bird with a specific birdID should be increased 
    function countedBirds(birdID) {
		birdIdJson = parseInt(birdID);
        bird = birdingModel.increaseBirdCount(birdIdJson);
        birdCounterView.updateCounter(bird);
    }

   //when the minus button of selected bird is clicked, the count number 
   //of a bird with a specific birdID should be decreased
    function removedBird(birdID) {
		birdIdJson = parseInt(birdID);
        bird = birdingModel.decreaseBirdCount(birdIdJson);
        birdCounterView.updateCounter(bird);
    }
  
    function initBirdingModel() {
        birdingModel = (new BirdingApp.BirdingModel({
        })).init();
		
    }

    function initBirdingController() {
        birdingController = (new BirdingApp.BirdingController({
        })).init();
        initBirdingControllerListeners();
    }

	function initBirdingControllerListeners(){
        birdingController.setChangedSearchInputListener(getSearchInput);
        birdingController.setAddedBirdListener(addedBird);
        birdingController.setCountedBirdsListener(countedBirds);
        birdingController.setRemovedBirdListener(removedBird);
	}
   
    function initBirdCounterView() {
        birdCounterView = (new BirdingApp.BirdCounterView({
        })).init();
    }

    function initBirdListView() {
		birdList = birdingModel.getBirdList();
        birdListView = (new BirdingApp.BirdListView({
        })).init();
		for (var j = 0; j < birdList.length; j++) {
            birdListView.addListEntry(birdList[j]);
        }
    }
	
	function init() {
        initBirdingModel();
        initBirdingController();
        initBirdCounterView();
        initBirdListView();
    }

    that.init = init;
    return that;
}());
