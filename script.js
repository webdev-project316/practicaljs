// Objects
var todoList = {
  todos : ['one', 'two', 'three'],
  displayTodos : function() {
    console.log('Todos', this.todos);
  },
  addTodo: function(newTodo) {
    this.todos.push(newTodo);
    this.displayTodos();
  },
  changeTodos: function(position, value) {
    this.todos[position] = value;
    this.displayTodos();
  },
  deleteTodos: function(position) {
    this.todos.splice(position,1);
    this.displayTodos();
  }
};

todoList.displayTodos();
todoList.addTodo('four');
todoList.changeTodos(3, 'for');
todoList.deleteTodos(0, 1);
