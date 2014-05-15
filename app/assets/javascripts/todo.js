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

  $(document).on("keyup", ".input-new-todo", function(e){
    if (e.which === 13 || e.keyCode === 13) {
      new Todo($(this).val());
    }
  });

  $(document).on("click", ".button.btn-remove-todo", function(){
    store.delete($(this).parent().attr('data-todo-id'));
  });

  $(document).on("click", "#todo-title", function(){
    var active = false;

    if($(this).hasClass('task-incomplete-title')) {
      active = true;
    }

    var data = {
      'todo': {
        'title': $(this).text(),
        'active': active
      }
    }
    store.update($(this).parent().attr('data-todo-id'), data);
  });

  window.Todo = Todo;

}(this));
