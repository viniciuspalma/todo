Todos.TodosController = Ember.ArrayController.extend({
  actions: {
    createTodo: function() {
      var title = this.get('newTitle');
      if (!title.trim()) {return;}

      todo = this.store.createRecord('todo', {
        title: title,
        active: false
      });

      this.set('newTitle', '');
      todo.save();
    }
  },
  remaining: function() {
    return this.filterBy('active', false).get('length');
  }.property('@each.active'),

  done: function() {
    return this.filterBy('active', true).get('length');
  }.property('@each.active')
});
