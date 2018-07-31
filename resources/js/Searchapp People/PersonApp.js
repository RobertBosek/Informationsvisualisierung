var PersonApp = (function() {
	"use strict";
    var that = {},
        personModel,
        personController,
        personView,
        personListView,
		personIdJson,
		personList,
		person;
   
   //gets the personList according to the searchterm
    function getSearchInput(input) {
        if (input === "") {
            personList = personModel.getPersonList();
        } else {
            personList = personModel.filterPersonListByName(input);
        }
        personListView.removeFirstListEntry();
        for (var i = 0; i < personList.length; i++) {
            personListView.addListEntry(personList[i]);
        }
    }
	
    function addedPersonToList(personID) {
		personIdJson = parseInt(personID);
        person = personModel.addPersonToList(personIdJson);
        personView.addEntryPersonImg(person);
    }
 
    function initPersonModel() {
        personModel = (new PersonApp.PersonModel({
        })).init();
    }

    function initPersonController() {
        personController = (new PersonApp.PersonController({
        })).init();
        initPersonControllerListeners();
    }

	function initPersonControllerListeners(){
        personController.setChangedSearchInputListener(getSearchInput);
        personController.setAddedPersonListener(addedPersonToList);
	}
   
    function initPersonView() {
        personView = (new PersonApp.PersonView({
        })).init();
    }

    function initPersonListView() {
		personList = personModel.getPersonList();
        personListView = (new PersonApp.PersonListView({
        })).init();
		for (var j = 0; j < personList.length; j++) {
            personListView.addListEntry(personList[j]);
        }
    }
	
	function init() {
        initPersonModel();
        initPersonController();
        initPersonView();
        initPersonListView();
    }
	
    that.init = init;
    return that;
}());
