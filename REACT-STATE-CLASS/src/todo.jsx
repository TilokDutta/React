import { useState } from "react";
import { v4 as uuidv4 } from "uuid";
export default function Todo() {
  let [todos, setTodos] = useState([{ task: "sample", id: uuidv4(), isDone: false}]);
  let [newTodo, setNewTodo] = useState("");

  let addNewTodo = () => {
    setTodos((prevTodo) => {
      return [...prevTodo, { task: newTodo, id: uuidv4(), isDone: false }];
    });
    setNewTodo("");
  };
  let updateTodo = (event) => {
    setNewTodo(event.target.value);
  };
  let deleteTodo = (id) => {
    setTodos((prevTodo) => {
        return prevTodo.filter((todo) => todo.id !== id);
    })
  }
  let markAsDone = (id) => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => {
        if(todo.id == id){
          return {
            ...todo,
            isDone: !todo.isDone
          };
        }else{
          return todo;
        }
      })
    )
  }
  let madAll = () => {
    setTodos((prevTodos) => 
      prevTodos.map((todo) => {
        return{
          ...todo,
          isDone : !todo.isDone
        }
      })
    )
  }
  return (
    <div>
      <h3>Todo List : </h3>
      <input
        type="text"
        id="todo"
        placeholder="Enter your todo"
        style={{ marginBottom: "20px", width: "15rem" }}
        value={newTodo}
        onChange={updateTodo}
      />
      <br />
      <button id="add" onClick={addNewTodo}>
        Add Task
      </button>
      <ul>
        {todos.map((todo) => (
          <li key={todo.id}>
            <span style={todo.isDone ? {textDecorationLine : "Line-through"} : {}}>{todo.task}</span>&nbsp;&nbsp;&nbsp;
            <button onClick={() => deleteTodo(todo.id)}>Delete</button>
            <button onClick={() => markAsDone(todo.id)}>MarkAsDone</button>
          </li>
        ))}
      </ul>
      <button onClick={() => madAll()}> MarkAsDone ALL</button>
    </div>
  );
}
