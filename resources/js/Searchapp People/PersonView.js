PersonApp.PersonView = function() {
  "use strict";
  var that = {},
    createEntryTemplate,
    personList;

  function init() {
	personList = document.querySelector(".person-gallery .person-list");
	var el = document.querySelector("#person-entry").innerHTML;
    createEntryTemplate = _.template(el);
    return that;
  }
 

  function addEntryPersonImg(person) {
	  
    var nodeEntry, existingNode;
	existingNode = personList.querySelector("[person-id='" + person.url + "']");
    if (existingNode !== null) {
      return;
    }
	 personList.innerHTML="";
     nodeEntry = document.createElement("div");
     nodeEntry.innerHTML = createEntryTemplate(person);
     personList.appendChild(nodeEntry.children[0]);
  }

  that.init = init;
  that.addEntryPersonImg = addEntryPersonImg;
  return that;
};
