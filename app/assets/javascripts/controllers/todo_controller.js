Todos.TodoController = Ember.ObjectController.extend({
  actions: {
    isCompleted: function(key, value){
      var model = this.get('model');

      if (value === undefined) {
        return model.get('active');
      }
      else {
        model.set('active', value);
        model.save();
        return value;
      }
    }.property('model.active'),

    deleteTodo: function() {
      var model = this.get('model');
      model.deleteRecord();
      model.save();
    }
  }
});
