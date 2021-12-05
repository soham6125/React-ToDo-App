import './App.css';
import {useState, useEffect } from 'react';
import Form from './components/form';
import Header from './components/header';
import TodoList from './components/TodoList';

function App() {

  const initialState = JSON.parse(localStorage.getItem("todos")) || []; 
  let [input, setInput] = useState('');
  let [todos, setTodos] = useState(initialState);

  useEffect(() => {
    localStorage.setItem("todos", JSON.stringify(todos));
  }, [todos])

  return (
    <div className="container">
      <div className="app-wrapper">
        <div>
          <Header />
        </div>
        <div>
          <Form 
           input={input}
           setInput={setInput}
           todos={todos}
           setTodos={setTodos}
          />
        </div>
        <div>
          <TodoList todos={todos} setTodos={setTodos} />
        </div>
      </div>
    </div>
  );
}

export default App;
