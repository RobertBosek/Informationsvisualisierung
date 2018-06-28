

PersonApp.PersonController = function() {
	
  "use strict";
  var that = {},
    removedEventListener = [],
    addCallbacks = [],
    searchInputEventListener = [],
    personList,
    searchInput,
    personListEntry,
	personID,
	listEntry,
	personImgGallery,
	closeWindowBtn;
	
  function searchInputChanged(event) {
    _.each(searchInputEventListener, function(callback) {
      callback(event.target.value);
    });
  }

  function clickedPersonEntryListener(event) {
    if (!event.target.parentElement.classList.contains("person-list-entry")) {
      return;
    }
	
    listEntry = findParentClass(event.target, "person-list-entry");
	personID = listEntry.getAttribute("person-id");
    _.each(addCallbacks, function(callback) {
      callback(personID);
    });
  }
  
   function mouseoutEvent() {
	   
	   personImgGallery = document.querySelector(".person-gallery .person-list");
	   personImgGallery.innerHTML="";
    // if (!event.target.parentElement.classList.contains("person-list-entry")) {
      // return;
    // }
  }
  
  var selectedEntry;
  function mouseoverEvent(event) {
	
	document.querySelector('.person-menu .person-list').removeEventListener("mouseout", mouseoutEvent);
	document.querySelector('.person-menu .person-list').removeEventListener("mouseover", clickedPersonEntryListener);
	selectedEntry = event.target.parentElement;
	
	//get the id of the current selected entry
	var currSelectedEntryID = selectedEntry.getAttribute("person-id");
	
	//compare if the id of the current selected entry is equal to the id of the
	//entry that is already selected
	if (personID===currSelectedEntryID){
		selectedEntry.style.backgroundColor = "rgb(154, 143, 167)"; 	
	}
  }
   function removedPersonImg(event) {
	
	personImgGallery = document.querySelector(".person-menu .person-list");
	personList = document.querySelector(".person-menu .person-list");

    var y = personList.getElementsByTagName("li");
    var i;
    for (i = 0; i < y.length; i++) {
        y[i].style.backgroundColor = "rgb(255, 255, 255)";
    }
	
    closeWindowBtn = findParentClass(event.target, "person-list-entry");
    closeWindowBtn.parentNode.removeChild(closeWindowBtn);
	
	personList.addEventListener("mouseover", clickedPersonEntryListener);

	personImgGallery.addEventListener("mouseout", mouseoutEvent);
  }
  function findParentClass(child, targetClass) {
    var parent = child.parentElement;
    while (!parent.classList.contains(targetClass)) {
      parent = parent.parentElement;
      if (parent === undefined) {
        break;
      }
    }
    return parent;
  }
 
  function init() {
	searchInput = document.querySelector(".person-search");
    personList = document.querySelector(".person-menu .person-list");
	personImgGallery = document.querySelector(".person-menu .person-list");
	
    personListEntry = document.querySelector(".person-menu .person-list");
	closeWindowBtn = 	document.querySelector(".person-gallery .person-list");
    searchInput.addEventListener("input", searchInputChanged);
    personList.addEventListener("mouseover", clickedPersonEntryListener);
	
	
	personImgGallery.addEventListener("mouseout", mouseoutEvent);
    personListEntry.addEventListener("click", mouseoverEvent);
	closeWindowBtn.addEventListener("click", removedPersonImg);
    return that;
  }
  
  
  function setChangedSearchInputListener(callback) {
    searchInputEventListener.push(callback);
  }

  function setAddedPersonListener(callback) {
    addCallbacks.push(callback);
  }
  
  that.init = init;
  that.setChangedSearchInputListener = setChangedSearchInputListener;
  that.setAddedPersonListener = setAddedPersonListener;
  return that;
};
