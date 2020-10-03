import React from 'react'

export default function Form({input, setInput, todos, setTodos, setStatus, active, setActive}) {
    const inputChange = (e) => {
        setInput(e.target.value);
    }
    const SubmitForm = (e) => {
        e.preventDefault();
        setTodos([
            ...todos,{text: input, completed: false, id: Math.random()*1000},
        ]);
        setInput('');
    }
    const statusHandler = (e) => {
        e.preventDefault();
        if(e.target.value === 'all'){
            setStatus('all');
        }else if(e.target.value === 'completed'){
            setStatus('completed');
        }else{
            setStatus('uncompleted');
        }
    }
    const deleteAll = (e) => {
        e.preventDefault();
        setTodos([]);
    }
    return (
        <form>
            <input value={input} type="text" onChange={inputChange} className="input-todo"/>
            <button onClick={SubmitForm} type="submit" className="buttonUser">+</button>
            <div className="select">
                <button className={`select-button ${active ? "active" : ''}`} value="all" onClick={statusHandler} >All</button>
                <button className={`select-button ${active ? "active" : ''}`} value="completed" onClick={statusHandler}>Completed</button>
                <button className={`select-button ${active ? "active" : ''}`} value="uncompleted" onClick={statusHandler}>Uncompleted</button>
            </div>
            <button onClick={deleteAll} className="select-button"><i className="fas fa-trash"></i> All</button>
        </form>
    )
}
