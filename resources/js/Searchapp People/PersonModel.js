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
		var jsontoInt=jsonData[i]["url"];
		var lastCharJsonValueID=jsontoInt.charAt(jsontoInt.length-2);
		var preLastCharJsonValueID=jsontoInt.charAt(jsontoInt.length-3);
		var str = parseInt(preLastCharJsonValueID + lastCharJsonValueID);
	
		if(isNaN(str)){
				jsontoInt = jsontoInt.slice(jsontoInt.length-2,jsontoInt.length-1);
		}else{
				jsontoInt = jsontoInt.slice(jsontoInt.length-3,jsontoInt.length-1);
		}
		
		jsontoInt = parseInt(jsontoInt);
		jsonData[i]["url"] = jsontoInt;
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