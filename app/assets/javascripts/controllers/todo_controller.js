Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    updateTodo: function() {
      var model = this.get('model');
      var newValue = model.get('active');
      model.set('active', newValue ? false : true);
      model.save();
    },

    deleteTodo: function() {
      var model = this.get('model');
      model.deleteRecord();
      model.save();
    }
  }
});
