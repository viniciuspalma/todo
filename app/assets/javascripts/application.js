//= require jquery-1.10.2.min

(function (window) {

  var defaults = {
    'host': 'http://localhost:3000',
    'namespace': '',
    'resource': ''
  };

  function customizeOptions(options) {
    var prop;
    for (prop in defaults) {
      if (!options.hasOwnProperty(prop)) {
        options[prop] = defaults[prop];
      }
    }
    return options;
  }

  var Storage = function Storage(options, data) {
    this.options = customizeOptions(options || {});

    this.host = this.options.host;
    this.namespace = this.options.namespace;
    this.resource = this.options.resource;

    this.url = this.host + this.namespace + this.resource;

    this.data = data || [];

    this.populate();
  }

  Storage.prototype.populate = function() {
    console.log(this.url)
    $.ajax({
      type: "GET",
      url: this.url
    })
    .done(function( res ) {
      console.log( res );
    });

    return this;
  };

  Storage.prototype.save = function(data) {
    console.log(this.url)
    $.ajax({
      type: "POST",
      url: this.url,
      data: data
    })
    .done(function( res ) {
      console.log( res );
    });

    return this;
  };

  window.Storage = Storage;

}(this));
