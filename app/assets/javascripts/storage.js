(function (window) {

  'use strict';

  var defaults = {
    'host': 'http://localhost:3000',
    'namespace': '',
    'resource': '',
    'template': '',
    'context': 'body'
  };

  var Storage = function Storage(options, data, cb) {
    this.options = window.customizeOptions(options || {}, defaults);

    this.host = this.options.host;
    this.namespace = this.options.namespace;
    this.resource = this.options.resource;
    this.template = this.options.template;
    this.context = this.options.context;

    this.url = this.host + this.namespace + "/" + this.resource;

    this.data = data || {};
    this.data[this.resource] = [];

    this.populate(cb);
  };

  Storage.prototype.populate = function(cb) {
    var that = this;

    $.ajax({
      type: "GET",
      url: that.url
    })
    .done(function(res) {
      that.initializeView(res, cb);
    });

    return this;
  };

  Storage.prototype.save = function(data, cb) {
    var that = this;

    $.ajax({
      type: "POST",
      url: that.url,
      data: data
    })
    .done(function(res) {
      that.data[that.resource].push(res);
      that.updateView(cb);
    });

    return this;
  };

  Storage.prototype.delete = function(id, cb) {
    var that = this;

    $.ajax({
      type: "DELETE",
      url: that.url + "/" + id
    })
    .done(function(res) {
      for(var i=0; i<that.data[that.resource].length; i++) {
        if(that.data[that.resource][i].id === parseInt(id, 10)) {
          that.data[that.resource].splice(i, 1);
        }
      }

      that.updateView(cb);
    });
  };

  Storage.prototype.update = function(id, data, cb) {
    var that = this;

    $.ajax({
      type: "PUT",
      url: that.url + "/" + id,
      data: data
    })
    .done(function(res) {
      for(var i=0; i<that.data[that.resource].length; i++) {

        if(that.data[that.resource][i].id === parseInt(id, 10)) {
          that.data[that.resource][i].title = data.todo.title;
          that.data[that.resource][i].active = data.todo.active;
        }
      }
      that.updateView(cb);
    });
  };

  Storage.prototype.initializeView = function(res, cb) {
    this.source = $(this.template).html()
    this.template = Handlebars.compile(this.source);

    for(var i=0; i<res.length; i++) {
        this.data[this.resource].push(res[i]);
    }

    this.updateView(cb);
    return this;
  };

  Storage.prototype.updateView = function(cb) {

    if(typeof cb === 'function') {
      cb();
    }
    $(this.context).html(this.template(this.data));
  };

  window.Storage = Storage;

}(this));
