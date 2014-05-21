(function (window){

  'use strict';

  var store = new Storage({
    resource: 'todos',
    template: '#todos',
    context: '.list-todo'
  });
  store.populate(counters);

  function Todo(title, active, cb) {
    this.title = title || "";
    this.active = active || false;

    var dataTodo = {
      'todo': {
        'title': this.title,
        'active': this.active
      }
    }

    store.save(dataTodo, cb);

  }

  function counters() {
    store.data.done = 0;
    store.data.remaining = 0;

    for (var i = 0; i<store.data.todos.length; i++) {
      if(store.data.todos[i].active) {
        console.log(store.data.todos[i].title);
        store.data.done += 1;
      }
      else {
        store.data.remaining += 1;
      }
    }
  };

  $('[data-new-task]').on("keyup", function(e){
    if (e.which === 13 || e.keyCode === 13) {
      new Todo($(this).val(), false, counters);
      $(this).val('');
    }
  });

  $(document).on("click", ".button.btn-remove-todo", function(){
    store.delete($(this).parent().attr('data-todo-id'), counters);
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
    store.update($(this).parent().attr('data-todo-id'), data, counters);
  });

  window.Todo = Todo;

}(this));
