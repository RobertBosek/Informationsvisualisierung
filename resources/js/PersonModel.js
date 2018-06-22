PersonApp.PersonModel = function(options) {
  "use strict";
  var that = {},
	jsonData,
    personList,
    selectedPersonID = [],
	personID;
  
  function init() {
	// jsonData = JSON.parse(document.querySelector("#person-list").innerHTML);
    // personList = _.sortBy(jsonData, function(person){
		
		// return person.name;
	// });
   var xmlhttp = new XMLHttpRequest();
   xmlhttp.onreadystatechange = function() {
    if (this.readyState == 4 && this.status == 200) {
         jsonData = JSON.parse(this.responseText);
		 console.log(jsonData);
	
	// personList = _.sortBy(jsonData, function(person){
		// return person.name;
		// });
    }
  };
	xmlhttp.open("GET", "people.json", true);
	xmlhttp.send();
    return that;
  }
	
  function getPersonName(){
	for(var i = 0; i<jsonData.length; i++){
		return jsonData[i].name;
	}
  }
  
  function getPersonList() {
    return personList;
  }
  
  function getFilteredPersonList(jsonKey, searchString) {
    return _.filter(personList, function(person) {
	  var lowCaseInput = searchString.toLowerCase();
	  var lowCasePersonName = person[jsonKey].toLowerCase();
      return lowCasePersonName.indexOf(lowCaseInput) !== -1;
    });
  }
  
  function getPersonById(id) {
	var personWithId = _.findWhere(personList, { id: id });
    return personWithId;
  }
	
  function addPersonToList(id) {
    selectedPersonID.push(id);
    return getPersonById(id);
  }
  
  that.init = init;
  that.getPersonList = getPersonList;
  that.filterPersonListByName = getFilteredPersonList.bind(this, "name");
  that.addPersonToList = addPersonToList;
  return that;
};