(function (window){

  'use strict';

  var store = new Storage({
    resource: 'todos',
    template: '#todos'
  });

  function Todo(title, active) {
    this.title = title || "";
    this.active = active || false;

    var dataTodo = {
      'todo': {
        'title': this.title,
        'active': this.active
      }
    }

    store.save(dataTodo);

  }

  Todo.prototype.deleteRecord = function(id) {
    store.delete(id);
  };

  window.Todo = Todo;

}(this));
