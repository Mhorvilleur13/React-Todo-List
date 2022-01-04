import React, { useState, useEffect } from 'react';
import './App.css';


function Todo({ todo, index, completeTodo, removeTodo }) {
  return (
    <div style={{ textDecoration: todo.isCompleted ? 'line-through' : '' }} className="todo">
      {todo.text}
      <div>
        <button onClick={() => completeTodo(index)}>Complete</button>
        <button onClick={() => removeTodo(index)}>X</button>
      </div>
    </div>
  )
}
// Felix is the best
function TodoForm({ addTodo }) {
  const [value, setValue] = useState('');
  const handleSubmit = e => {
    e.preventDefault();
    if (!value) return;
    addTodo(value);
    setValue('');
  }
  return (
    <form onSubmit={handleSubmit}>
      <input type="text"
        className="input"
        value={value}
        placeholder="Add to do ...."
        onChange={e => setValue(e.target.value)}>
      </input>
    </form>
  )
}

/*function TodoCount({ todos }) {
  const [count, setCount] = useState(0);
  setCount(Object.keys(todos).length);
  console.log({ count });
  return (
    <div>
      <h1> {count} </h1>
    </div>
  )
}*/

function TodoCount({ count, addToCount }) {
  addToCount();
  return (
    <div>
      <h1>{count}</h1>
    </div>
  )
}

function App() {
  const [todos, setTodos] = useState([
    {
      text: 'Learn about React',
      isCompleted: false

    },
    {
      text: 'Annoy Felix with a million Questions',
      isCompleted: false

    },
    {
      text: 'Throw my computer',
      isCompleted: false

    }
  ]);

  const [count, setCount] = useState(3);


  useEffect(() => {
    console.log('On Mount')
  }, []);

  const addTodo = text => {
    const newTodos = [...todos, { text }];
    setTodos(newTodos);
  }
  const completeTodo = index => {
    const newTodos = [...todos];
    newTodos[index].isCompleted = true;
    setTodos(newTodos);
  }
  const removeTodo = index => {
    const newTodos = [...todos];
    newTodos.splice(index, 1);
    setTodos(newTodos);
  }

  const addToCount = () => {
    setCount(Object.keys(todos).length);
  }


  return (
    <div className="app">
      <div className="todo-list">
        {todos.map((todo, index) => (
          <Todo key={index} index={index}
            todo={todo}
            completeTodo={completeTodo}
            removeTodo={removeTodo} />
        ))}
        <TodoForm addTodo={addTodo} />
        <TodoCount count={count} addToCount={addToCount} />
      </div>

    </div>
  )
}

export default App;
