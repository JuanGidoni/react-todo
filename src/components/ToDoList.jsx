import React from 'react'
import ToDo from './actions/ToDo'
const ToDoList = ({todos, setTodos, filterTodos}) => {

    let emptyTodo = document.createElement('p');
    emptyTodo.classList.add('text-center');
    
    return(
        <div className="todo-container text-center">
            <ul className="todo-list">
                <p className="text-white">
        {todos.length === 0 ? `ToDo List empty..` : ''}
                </p>
                {filterTodos.map(todo => (
                    <ToDo 
                    setTodos={setTodos}
                    todos={todos} 
                    key={todo.id} 
                    text={todo.text} 
                    completed={todo.completed} 
                    favorite={todo.favorite}
                    id={todo.id} 
                    todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;