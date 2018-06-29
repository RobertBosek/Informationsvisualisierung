PersonApp.PersonListView = function() {
  "use strict";
  var that = {},
    createEntryTemplate,
    personList;


	//initialise PersonListView and create entry template
  function init() {
	var entryEl = document.querySelector("#person-list-entry").innerHTML;
	createEntryTemplate = _.template(entryEl);
    personList = document.querySelector(".person-menu .person-list");
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
