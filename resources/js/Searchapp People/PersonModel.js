PersonApp.PersonModel = function(options) {
  "use strict";
  var that = {},
	jsonData, //the entire json content
    personList, //person list with names, that should be shown in the menu
    selectedPersonID = [], //array with filtered persons according to the search input
	personID;

  function init() {
	  
 //create http request to local opening of the json file
   var xmlhttp = new XMLHttpRequest();
   xmlhttp.onreadystatechange = function() {
    if (this.status == 200) { 
         jsonData = JSON.parse(this.responseText);
		 
	for(var i = 0; i<jsonData.length; i++){
		
		//get the values from the json file, values key is "url"
		//output of console.log(jsonUrlEl) is the value of the key with name "url"
		var jsonUrlEl = jsonData[i]["url"];
		
		//the last number or the last 2 numbers of the jsonUrlEl is the id of the person
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
		 
	//sorts the names of the persons alphabetically
	personList = _.sortBy(jsonData, function(person){
		return person.name;
		});
    }
  };
  
  
  //opens the json local file and sends the request to the server
	xmlhttp.open("GET", "data/database/people.json", false);
	xmlhttp.send();
    return that;
  }
	
  //get the name of a person
  function getPersonName(){
	for(var i = 0; i<jsonData.length; i++){
		return jsonData[i].name;
	}
  }
  
  function getPersonList() {
    return personList;
  }
  
  //get the persons entries according to the search term
  function getFilteredPersonList(jsonKey, searchString) {
    return _.filter(personList, function(person) {
	  //convert the search term to lower case
	  var lowCaseInput = searchString.toLowerCase();
	  var lowCasePersonName = person[jsonKey].toLowerCase();
	  console.log(lowCasePersonName.indexOf(lowCaseInput));
      return lowCasePersonName.indexOf(lowCaseInput) !== -1;
    });
  }
  
  //find the id of the persons, where the url is a variable from the people.html
  //(template)
  function getPersonById(iD) {
	var personWithId = _.findWhere(personList, { url: iD });
    return personWithId;
  }
	
  //add the filtered persons (who are shown in the menu according to the search term) 
  //to an array selectedPersonID
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