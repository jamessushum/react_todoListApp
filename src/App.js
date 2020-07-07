import React, { Component } from 'react';
import Todos from './todos'

class App extends Component {
  state = {
    todos: [
      {
        id: 1,
        content: "take out the trash"
      },
      {
        id: 2,
        content: "feed the hungry cat"
      }
    ]
  }
  // Delete todo function placed here bcuz it has to interact with the state, function is being passed to Todos function as a prop so it can be invoked when user clicks on specific todo, using the filter array method so it's not destructive to the original state, filter returns object if true, so if ids don't match object will be returned since it wasn't the one the user selected, otherwise if false meaning ids matched, object won't be returned. Then setting the state to newTodos.
  deleteTodo = (id) => {
    const newTodos = this.state.todos.filter(todo => {
      return todo.id !== id
    })
    this.setState({
      todos: newTodos
    })
  }
  render() {
    return (
      <div className="todo-app container">
        <h1 className="center blue-text">Todo's</h1>
        <Todos todos={this.state.todos} deleteTodo={this.deleteTodo} />
      </div>
    )
  }
}

export default App;
