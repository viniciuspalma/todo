(function (window) {
  var customizeOptions = function(options, defaults) {
    var prop;

    for (prop in defaults) {
      if (!options.hasOwnProperty(prop)) {
        options[prop] = defaults[prop];
      }
    }
    return options;
  };

  window.customizeOptions = customizeOptions;
}(this));
