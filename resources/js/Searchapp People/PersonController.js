

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
	closeWindowBtn,
	selectedEntry;
	
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
  }
  
  function mouseoverEvent(event) {
	 if (!event.target.parentElement.classList.contains("person-list-entry")) {
      return;
    }
	
	//when the mouse is over an list entry, then remove the event listener for 
	//then the mouse out should be innactive (removed listener) and 
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
  
   function removedPersonImg(event) {
	   closeWindowBtn = findParentClass(event.target, "person-list-entry");
	   if(event.target.className === "btn-close"){
		 
		var menuListEntries = document.querySelector('.person-menu .person-list').childNodes;
		   for (var i = 1; i < menuListEntries.length; i++) {
			   var entryIdAttr = menuListEntries[i].getAttribute("person-id");
			   
			   //checks which id from the list entries is the selected entry
			   if(entryIdAttr === personID){
				    menuListEntries[i].style.backgroundColor="white";
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
  
  //finds the parent class of the current target
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
	  
	//initialise the events
	//events for: search input; when a list entry is clicked; when the mouse over a list entry is;
	//		 when the mouse out of a list entry is; when a image is removed (by click on the "X" button on the 
	//		 right top corner of the image
	searchInput = document.querySelector(".person-search");
    personList = document.querySelector(".person-menu .person-list");
	personImgGallery = document.querySelector(".person-menu .person-list");
	
    personListEntry = document.querySelector(".person-menu .person-list");
	closeWindowBtn = document.querySelector(".person-gallery .person-list");
	
    searchInput.addEventListener("input", searchInputChanged);
    personList.addEventListener("mouseover", clickedPersonEntryListener);
	
	personImgGallery.addEventListener("mouseout", mouseoutEvent);
	
	//the event when an entry is clicked is the same as the event when the mouse over this entry is
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