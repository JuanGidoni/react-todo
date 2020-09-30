import React, { useState } from 'react';
import './App.css';
import ToDo from './components/ToDo';

function App() {
  const [input, setInput] = useState('');
  const [todos, setTodos] = useState([]);
  const [check, setCheck] = useState(false);
  
  const addTodo = (e) => {
    let it = document.getElementById('addT');
    if(!input){
      it.className = 'error';
      it.placeholder = 'Write something...';
    }else if(it.value.length < 4){
      it.className = 'error';
      it.value = '';
      it.placeholder = 'Minimum characters: 4';
    }else {
      e.preventDefault();
      setTodos([...todos,{
        text: input,
        isChecked: check,
        keyList: input
      }]);
      setInput('');
      it.className = 'inputUser';
    }
  }
  const addCheck = (e) => {
    let isChecked = document.getElementById('ifCheck').checked;
    if(isChecked){
      setCheck(true);
    }else{
      setCheck(false);
    }
  }

  return (
    <div className="App">
      <div className="userN" id="todoList">
        <h2 class="todoList">ToDo List</h2>
        {console.log(todos)}
      {todos.map(todo =>(
        <ToDo text={todo.text} checked={todo.isChecked} theKey={todo.keyList} />
      ))} 
      <div className="footer">
        Made by <a href="https://github.com/JuanGidoni" target="_BLANK" rel="noopener noreferrer">@JuanGidoni</a>
      </div>
      </div>
      <header className="App-header">
        <p>
          React ToDo App
        </p>
        <div className="box-action">
        <input value={input} onChange={e => setInput(e.target.value)} className="inputUser" type="text" placeholder="Add something..." maxLength="25" size="25" required id="addT" />
        <div className="tooltip">
        <input className="checkBoxCS" type="checkbox" onChange={addCheck} id="ifCheck" />  
        <span className="tooltiptext">Mark as done?</span>
        </div>
        <button className="buttonUser" onClick={addTodo} >+</button>
        </div>
      </header>
    </div>
  );
}

export default App;
