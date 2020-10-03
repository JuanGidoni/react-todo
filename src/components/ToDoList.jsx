import React from 'react'
import ToDo from './actions/ToDo'
const ToDoList = ({todos, setTodos, filterTodos}) => {

    return(
        <div className="todo-container">
            <ul className="todo-list">
                {filterTodos.map(todo => (
                    <ToDo 
                    setTodos={setTodos}
                    todos={todos} 
                    key={todo.id} 
                    text={todo.text} 
                    completed={todo.completed} 
                    id={todo.id} 
                    todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;