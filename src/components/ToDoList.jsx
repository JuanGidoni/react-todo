import React from 'react'
import ToDo from './actions/ToDo'
const ToDoList = ({todos, setTodos, filterTodos}) => {
    
    return(
        <div className="todo-container text-center mb-5">
            <ul className="todo-list">
                <p className="text-reacTodo">
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
                    time={todo.date}
                    todo={todo} />
                ))}
            </ul>
        </div>
    );
}

export default ToDoList;