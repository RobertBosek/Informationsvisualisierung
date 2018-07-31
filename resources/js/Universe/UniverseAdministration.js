/* eslint-env browser */

var UniverseAdministration = UniverseAdministration || {};
UniverseAdministration = (function() {
  "use strict";

  var that = {},
  universeView,
  universeController,
  universeModel;

  function setListeners() {
    universeModel.setOnDataReadyListener(universeView.update);
    universeController.setOnActiveItemChangeListener(universeModel.activeItemChanged);
    universeView.setOnItemClickListeners(universeController.getHandleItemClickListeners());
  }

  function initModules() {
    universeModel = new UniverseAdministration.UniverseModel();
    universeView = new UniverseAdministration.UniverseView();
    universeController = new UniverseAdministration.UniverseController();
  }

  function init(){
    initModules();
    setListeners();
    universeModel.getData();
  }

  init();
  return that;
}());
