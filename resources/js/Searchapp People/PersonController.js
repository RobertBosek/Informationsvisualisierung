PersonApp.PersonController = function() {
	
  "use strict";
  var that = {},
    addCallbacks = [], //stores the events for added person to the list
    searchInputEventListener = [], //stores the events for the search input
    personList,
    searchInput,
    personListEntry,
	personID,
	listEntry,
	personImgGallery,
	closeWindowBtn,
	selectedEntry;
	
  //listener for changed search input
  function searchInputChanged(event) {
    _.each(searchInputEventListener, function(callback) {
      callback(event.target.value);
    });
  }

  //listener for clicked person from the menu
  function clickedPersonEntryListener(event) {
	if (!event.target.parentElement.classList.contains("person-list-entry")) {
      return;
    }
    listEntry = findParentClass(event.target, "person-list-entry");
	personID = listEntry.getAttribute("person-id");
    _.each(addCallbacks, function(callback) {
      callback(personID);
    });	
	
	
	
	console.log(document.getElementsByClassName(".person-info-gender").textContent);
  }
  
   function mouseoutEvent() {
	   
	   personImgGallery = document.querySelector(".person-gallery .person-list");
	   personImgGallery.innerHTML="";
  }
  
  function mouseoverEvent(event) {
	  
	 if (!event.target.parentElement.classList.contains("person-list-entry")) {
      return;
    }
	//when the mouse is over some list entry
	//then the "mouse out"-event should be innactive (removed listener) and 
	//the element should not be clicked before
	document.querySelector('.person-menu .person-list').removeEventListener("mouseout", mouseoutEvent);
	document.querySelector('.person-menu .person-list').removeEventListener("mouseover", clickedPersonEntryListener);
	selectedEntry = event.target.parentElement;
	 
	//currSelectedEntryID is the list entry on which the mouse is over
	var currSelectedEntryID = selectedEntry.getAttribute("person-id");
	
	if (personID===currSelectedEntryID){
		selectedEntry.style.backgroundColor = "rgb(154, 143, 167)"; 
	}
  }
  
  //listener for the close button, when the close button is clicked
  //the image from the gallery of the right side of the menu should be
  //removed
   function removedPersonImg(event) {
	   closeWindowBtn = findParentClass(event.target, "person-list-entry");
	   if(event.target.className === "btn-close"){
		var menuListEntries = document.querySelector('.person-menu .person-list').childNodes;
		   for (var i = 1; i < menuListEntries.length; i++) {
			   var entryIdAttr = menuListEntries[i].getAttribute("person-id");
			   //checks which id from the list entries is the selected entry
			   if(entryIdAttr === personID){
				   //remove the background color of the menu entry when
				   //the image is closed
				    menuListEntries[i].style.backgroundColor="";
			   }
	   }
	   closeWindowBtn.parentNode.removeChild(closeWindowBtn);
	   }else{
		   return;
	   }
	personImgGallery = document.querySelector(".person-menu .person-list");
	personImgGallery.addEventListener("mouseout", mouseoutEvent);
	personList = document.querySelector(".person-menu .person-list");
	personList.addEventListener("mouseover", clickedPersonEntryListener);
  }
  
  //finds the parent class of the current target class
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
	closeWindowBtn = document.querySelector(".person-gallery .person-list");
	
	//initialise the events
	//events for: (1) search input; (2) when a list entry is clicked; (3) when the mouse over a list entry is;
	//		 (4) when the mouse out of a list entry is; (5) when an image is removed (by click on the "X" button on the 
	//		 right top corner of the image
	
    searchInput.addEventListener("input", searchInputChanged);
    personList.addEventListener("mouseover", clickedPersonEntryListener);
	personImgGallery.addEventListener("mouseout", mouseoutEvent);
	
	//the event when an entry is clicked is the same as the event when the mouse 
	//over this entry is (the color is also the same)
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