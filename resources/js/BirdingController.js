
var countEntry;

BirdingApp.BirdingController = function() {
	
  "use strict";
  var that = {},
    countEventListener = [],
    removedEventListener = [],
    addCallbacks = [],
    searchInputEventListener = [],
    birdList,
    searchInput,
    counterList,
	birdID,
	listEntry;

  function searchInputChanged(event) {
    _.each(searchInputEventListener, function(callback) {
      callback(event.target.value);
    });
  }

  function addedBirdListener(event) {
    if (!event.target.parentElement.classList.contains("add-bird-button")) {
      return;
    }
    listEntry = findParentClass(event.target, "bird-list-entry");
    
	birdID = listEntry.getAttribute("bird-id");
    _.each(addCallbacks, function(callback) {
      callback(birdID);
    });
  }
  function birdClickedListener(event) {
    if (!event.target.classList.contains("button")) {
      return;
    }
    countEntry = findParentClass(event.target, "bird-list-entry");
    countEntry.parentNode.removeChild(countEntry);
	console.log(countEntry);
	
	birdID = countEntry.getAttribute("bird-id");
    if (event.target.classList.contains("increase")) {
      _.each(countEventListener, function(callback) {
        callback(birdID);
      });
    } 
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
	searchInput = document.querySelector(".bird-search");
    birdList = document.querySelector(".bird-gallery .bird-list");
    counterList = document.querySelector(".bird-counter .bird-list");
			
    searchInput.addEventListener("input", searchInputChanged);
    birdList.addEventListener("click", addedBirdListener);
    counterList.addEventListener("click", birdClickedListener);
    return that;
  }
  
  //store the events in arrays
  function setChangedSearchInputListener(callback) {
    searchInputEventListener.push(callback);
  }

  function setAddedBirdListener(callback) {
    addCallbacks.push(callback);
  }

  function setCountedBirdsListener(callback) {
    countEventListener.push(callback);
  }

  function setRemovedBirdListener(callback) {
    removedEventListener.push(callback);
  }

  that.init = init;
  that.setChangedSearchInputListener = setChangedSearchInputListener;
  that.setCountedBirdsListener = setCountedBirdsListener;
  that.setAddedBirdListener = setAddedBirdListener;
  that.setRemovedBirdListener = setRemovedBirdListener;
  return that;
};
