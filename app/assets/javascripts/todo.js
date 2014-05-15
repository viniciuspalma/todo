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

  Todo.prototype.updateRecord = function(id, data) {
    store.update(id, data);
  };

  $(document).on("keyup", ".input-new-todo", function(e){
    if (e.which === 13 || e.keyCode === 13) {
      new Todo($(this).val());
    }
  });

  $(document).on("click", ".button.btn-remove-todo", function(e){
    store.delete($(this).parent().attr('data-todo-id'));
  });

  window.Todo = Todo;

}(this));
