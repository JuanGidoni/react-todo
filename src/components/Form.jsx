import React from 'react'

export default function Form({input, setInput, todos, setTodos, setStatus, active, setActive}) {
    const inputChange = (e) => {
        setInput(e.target.value);
    }
    const SubmitForm = (e) => {
        let btn = document.getElementById('input-todo');
        let alertbox = document.getElementById('alert');
        let alertBtn = document.createElement('p');
        e.preventDefault();
        let inputL = input.length
        if(inputL >= 4){
            setTodos([
                ...todos,{text: input, completed: false, favorite: false, id: Math.random()*1000, date: new Date(),},
            ]);
            btn.placeholder = 'Add another one...';
            btn.className = 'input-todo';
            alertBtn.innerText = 'ToDo added...';
            alertbox.appendChild(alertBtn);
            setTimeout(() => {
                alertbox.removeChild(alertBtn);
            }, 2000);

        }else if(inputL <= 3){
            btn.placeholder = 'Text minimum size: 4';
            btn.className = 'error';
        }
        setInput('');
    }
    const statusHandler = (e) => {
        e.preventDefault();
        if(e.target.value === 'all'){
            setStatus('all');
        }else if(e.target.value === 'Important'){
            setStatus('favorite');
        }else if(e.target.value === 'completed'){
            setStatus('completed');
        }else{
            setStatus('uncompleted');
        }
    }
    const deleteAll = (e) => {
        e.preventDefault();
        let alertbox = document.getElementById('alert');
        let alertBtn = document.createElement('p');
        alertBtn.innerText = 'All Deleted...';
        alertbox.appendChild(alertBtn);
        setTimeout(() => {
            alertbox.removeChild(alertBtn);
        }, 2000);
        setTodos([]);
    }
    return (
        <form>
            <div id="alert"></div>
            <input value={input} id="input-todo" type="text" onChange={inputChange} placeholder='Write something...' minLength="4" maxLength="16" size="18" className="input-todo"/>
            <button onClick={SubmitForm} type="submit" className="buttonUser">+</button>
            <div className="select d-flex flex-column flex-md-row justify-content-center align-items-center">
                <button className={`select-button ${active ? "active" : ''}`} value="all" onClick={statusHandler} >All</button>
                <button className={`select-button ${active ? "active" : ''}`} value="completed" onClick={statusHandler}>Completed</button>
                <button className={`select-button ${active ? "active" : ''}`} value="Important" onClick={statusHandler}>Important</button>
                <button className={`select-button ${active ? "active" : ''}`} value="uncompleted" onClick={statusHandler}>Uncompleted</button>
            </div>
            <button onClick={deleteAll} className="select-button"><i className="fas fa-trash"></i> All</button>
        </form>
    )
}