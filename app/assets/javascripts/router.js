Todos.Router.map(function() {
  this.resource('todos', {path: '/'}, function() {
    this.route('delete');
  });
});

Todos.TodosRoute = Ember.Route.extend({
  model: function() {
    return this.store.find('todo');
  }
});
