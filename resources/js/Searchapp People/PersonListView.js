PersonApp.PersonListView = function() {
  "use strict";
  var that = {},
    createEntryTemplate,
    personList;


  //initialises PersonListView and creates an entry template
  function init() {
	var entryEl = document.querySelector("#person-list-entry").innerHTML;
	createEntryTemplate = _.template(entryEl);
    personList = document.querySelector(".person-menu .person-list");
    console.log(personList.firstChild);
	return that;
  }

  function addListEntry(person) {
    var nodeEntry = document.createElement("div");
    nodeEntry.innerHTML = createEntryTemplate(person);
    personList.appendChild(nodeEntry.children[0]);
  }

  function removeFirstListEntry() {
    while (personList.firstChild) {
      personList.removeChild(personList.firstChild);
    }
  }

  that.init = init;
  that.addListEntry = addListEntry;
  that.removeFirstListEntry = removeFirstListEntry;
  return that;
};