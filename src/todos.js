import React from 'react';

// Function converting todo's data into JSX to be displayed
const Todos = ({todos, deleteTodo}) => {

  // Ternary operator checking if todo's array is empty, if so output "you have no todos message", otherwise map through array of todo's and compile JSX, note React needs a distinct key for each item so it's able to know which items to manipulate in DOM, also an anonymous function is being used when invoking deleteTodo bcuz it needs parenthesis when passing the id - otherwise React will execute before user clicks.
  const todoList = todos.length ? (
    todos.map(todo => {
      return (
        <div className="collection-item" key={todo.id}>
          <span onClick={() => {deleteTodo(todo.id)}}>{todo.content}</span>
        </div>
      )
    })
  ) : (
    <p className="center">You have no todo's left</p>
  )

  // Function returns JSX container with all todo's if any
  return (
    <div className="todos collection">
      {todoList}
    </div>
  )
}

export default Todos;