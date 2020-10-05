import React, { useState, useEffect } from 'react';
import './App.css';
// Import Components
import Form from './components/Form';
import ToDoList from './components/ToDoList'
import Header from './components/Header'
import Footer from './components/Footer'

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
    },[]);

    useEffect( () => {
      filterHandler(); 
      localTodos();
    },[todos,status]);
    
  // Functions

  const filterHandler = () => {
    let alertbox = document.getElementById('alert');
    let alertBtn = document.createElement('p');
    let date = new Date();
    switch(status){
      case 'completed':
        setFilterTodos(todos.filter(todo => todo.completed === true));
        alertBtn.innerText = 'Filter set as completed...';
        alertbox.appendChild(alertBtn);
        setTimeout(() => {
            alertbox.removeChild(alertBtn);
        }, 2000);
        break;
        case 'favorite':
          setFilterTodos(todos.filter(todo => todo.favorite === true));
          alertBtn.innerText = 'Filter set as important...';
        alertbox.appendChild(alertBtn);
        setTimeout(() => {
            alertbox.removeChild(alertBtn);
        }, 2000);
          break;
        case 'uncompleted':
          setFilterTodos(todos.filter(todo => todo.completed === false));
          alertBtn.innerText = 'Filter set as uncompleted...';
        alertbox.appendChild(alertBtn);
        setTimeout(() => {
            alertbox.removeChild(alertBtn);
        }, 2000);
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
    <div className="container-fluid App">
      <div className="row">
        <Header todos={todos} filterTodos={filterTodos} status={status} />
      <div className="col-12 col-md-12 col-lg-6 text-center bg-white"> 
        <div className="d-flex flex-column justify-content-center align-items-center">
     <Form 
      input={input}
      todos={todos}
      setTodos={setTodos}
      setInput={setInput}
      setStatus={setStatus}
      active={active}
      setActive={setActive}
      />
        </div>
      </div>
      <div className="col-12 col-md-12 col-lg-6 todoBox pt-5 pt-md-0 bg-white h-100">
        <h2 className="text-center input-todo text-reacTodo">ToDo List</h2>
      <ToDoList 
      filterTodos={filterTodos} 
      setTodos={setTodos} 
      todos={todos} />
      </div>
      </div>
      <Footer />
    </div>
  );
}

export default App;
