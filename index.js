// Forked from karma-traceur-preprocessor to load
// the compiler instead of the runtime
//
var traceur = require('traceur');

var initTraceurFramework = function(files) {
  files.unshift({pattern: traceur.RUNTIME_PATH.replace('-runtime', ''), included: true, served: true, watched: false});
};

initTraceurFramework.$inject = ['config.files'];


// PUBLISH DI MODULE
module.exports = {
  'framework:traceur-compiler-requirejs': ['factory', initTraceurFramework]
};
