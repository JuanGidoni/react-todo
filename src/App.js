import React, { useState, useEffect } from 'react';
import './App.css';
// Import Components
import Form from './components/Form';
import ToDoList from './components/ToDoList'

function App() {
  
  // State consts 
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [status, setStatus] = useState('all');
  const [filterTodos, setFilterTodos] = useState([]);
  const [active, setActive] = useState(true);

    // RUN ONCE 
    useEffect(() => {
      getTodos()
    }, []);

    useEffect( () => {
      filterHandler(); 
      localTodos();
    },[todos,status]);

  // Functions
  const filterHandler = () => {
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        break;
        case 'uncompleted':
          setFilterTodos(todos.filter(todo => todo.completed === false));
          break;
          default:
            setFilterTodos(todos);
            break;
          }
    }
    const localTodos = () => {
      localStorage.setItem('todos', JSON.stringify(todos));
  }
  const getTodos = () => {
    if(localStorage.getItem('todos') === null){
      localStorage.setItem('todos', JSON.stringify([]));
    }else {
      let todoLocal = JSON.parse(localStorage.getItem('todos', JSON.stringify(todos)));
      setTodos(todoLocal);
    }
  }
        return (
    <div className="App">
      <div className="App-header">
        <p>
          React-ToDo
        </p>
        <p className="smaller">Created by <a href="https://github.com/JuanGidoni">Juan Ignacio Gidoni</a></p>
      <Form 
      input={input}
      todos={todos}
      setTodos={setTodos}
      setInput={setInput}
      setStatus={setStatus}
      active={active}
      setActive={setActive}
      />
      <div className="todoBox">
      <ToDoList 
      filterTodos={filterTodos} 
      setTodos={setTodos} 
      todos={todos} />
      </div>
      </div>
    </div>
  );
}

export default App;
