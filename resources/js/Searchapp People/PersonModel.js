PersonApp.PersonModel = function(options) {
  "use strict";
  var that = {},
	jsonData,
    personList,
    selectedPersonID = [],
	personID;

  function init() {
 
   var xmlhttp = new XMLHttpRequest();
   xmlhttp.onreadystatechange = function() {
    if (this.status == 200) { 
         jsonData = JSON.parse(this.responseText);
		 
	for(var i = 0; i<jsonData.length; i++){
		
		//get the values from the json file, values key is "url"
		var jsonUrlEl = jsonData[i]["url"];
		
		//the last number or the last 2 numbers of the jsonUrlEl is the id of the element
		var lastCharJsonValueID = jsonUrlEl.charAt(jsonUrlEl.length-2);
		var preLastCharJsonValueID = jsonUrlEl.charAt(jsonUrlEl.length-3);
		
		var str = parseInt(preLastCharJsonValueID + lastCharJsonValueID);
		if(isNaN(str)){
				jsonUrlEl = jsonUrlEl.slice(jsonUrlEl.length-2,jsonUrlEl.length-1);
		}else{
				jsonUrlEl = jsonUrlEl.slice(jsonUrlEl.length-3,jsonUrlEl.length-1);
		}
		jsonUrlEl = parseInt(jsonUrlEl);
		jsonData[i]["url"] = jsonUrlEl;
	}
		 
	personList = _.sortBy(jsonData, function(person){
		return person.name;
		});
    }
  };
  
	xmlhttp.open("GET", "data/database/people.json", false);
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
  
  function getPersonById(iD) {
	var personWithId = _.findWhere(personList, { url: iD });
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