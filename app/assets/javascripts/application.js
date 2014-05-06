var url = "http://localhost:3000/todo/index.json";

var todoList = new Vue({
  el: '.todoList',
  data: {
    tasks: []
  },
  methods: {
    setTodos: function(todos) {
      for ( var i = 0; i < todos.length; i++ ) {
        console.log(todos[i]);
        this.$data.tasks.push(todos[i]);
      }
    }
  }
});

superagent.get(url, function(err, res) {
  if(!err) {
    todoList.setTodos(res.body);
  }
});
