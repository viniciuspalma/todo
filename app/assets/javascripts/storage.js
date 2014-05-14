(function (window) {

  var defaults = {
    'host': 'http://localhost:3000',
    'namespace': '',
    'resource': '',
    'template': '',
    'context': 'body'
  };

  var Storage = function Storage(options, data) {
    this.options = window.customizeOptions(options || {}, defaults);

    this.host = this.options.host;
    this.namespace = this.options.namespace;
    this.resource = this.options.resource;
    this.template = this.options.template;
    this.context = this.options.context;

    this.url = this.host + this.namespace + "/" + this.resource;

    this.data = data || {};
    this.data[this.resource] = [];

    this.populate();
  };

  Storage.prototype.populate = function() {
    var that = this;

    $.ajax({
      type: "GET",
      url: this.url
    })
    .done(function(res) {
      that.initializeView(res);
    });

    return this;
  };

  Storage.prototype.save = function(data) {
    var that = this;

    $.ajax({
      type: "POST",
      url: this.url,
      data: data
    })
    .done(function(res) {
      that.data[this.resource].push(res);
    });

    return this;
  };

  Storage.prototype.initializeView = function(res) {

    var source = $(this.template).html()
      , template = Handlebars.compile(source);

    for(var i=0; i<res.length; i++) {
        this.data[this.resource].push(res[i]);
    }

    console.log(this.data)
    $(this.context).html(template(this.data));
    return this;
  };

  window.Storage = Storage;

}(this));
