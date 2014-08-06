/**
 * Autoloads all states and required info from the /modules directory. So /modules is a magic directory.
 */

var fs = require('fs');
var glob = require('glob');
var jade = require('jade');

module.exports = function (app) {

  app.config(function ($stateProvider, $urlRouterProvider) {

    // Default redirect.
    $urlRouterProvider.otherwise('/');

    // Load all states.js files listed in /modules.
    var stateFileList = glob.sync('modules/**/states.js');
    stateFileList.forEach(function (stateFile) {
      var stateMap = require('../'+stateFile);
      for (var stateName in stateMap) {
        parseJade(stateMap[stateName]);
        $stateProvider.state(stateName, stateMap[stateName]);
      }
    });
  });

};

// Extension function to render state templates on-the-fly with jade.
function parseJade(state) {
  if (state.jadeUrl) {
    delete state.templateUrl;
    state.template = jade.compileFile(state.jadeUrl)(state.jadeLocals);
  }
}
