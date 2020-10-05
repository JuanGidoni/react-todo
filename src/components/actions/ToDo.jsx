import React from 'react'

const ToDo = ({text, todo, todos, setTodos, id, time}) => {
    
    let alertbox = document.getElementById('alert');
    let alertBtn = document.createElement('p');
    const deleteTodo = () => {
        setTodos(todos.filter((el) => el.id !== todo.id));
        alertBtn.innerText = 'ToDo deleted...';
        alertbox.appendChild(alertBtn);
        setTimeout(() => {
            alertbox.removeChild(alertBtn);
        }, 2000);
    }
    const completeTodo = () => {
            
        alertBtn.innerText = 'ToDo marked as completed...';
        alertbox.appendChild(alertBtn);
        setTimeout(() => {
            alertbox.removeChild(alertBtn);
        }, 2000);
        
        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, completed: !item.completed
                }
            }
        return item;
        }))
    }
    const importanteTodo = () => {

        alertBtn.innerText = 'ToDo marked as important...';
        alertbox.appendChild(alertBtn);
        setTimeout(() => {
            alertbox.removeChild(alertBtn);
        }, 2000);

        setTodos(todos.map((item) => {
            if(item.id === todo.id){
                return {
                    ...item, favorite: !item.favorite
                }
            }
        return item;
        }))
    }
    return(
        <div className="d-flex flex-column">
        <div className="bg-reacTodo text-white" title={`Created at: ${todo.date.day}/${todo.date.month}/${todo.date.year} ${todo.date.hours}:${todo.date.mins}`}>
        {`${todo.date.day <= 9 ? '0'+todo.date.day : todo.date.day}/${todo.date.month <= 9 ? '0'+todo.date.month : todo.date.month}/${todo.date.year} ${todo.date.hours}:${todo.date.mins <= 9 ? '0'+todo.date.mins: todo.date.mins}:${todo.date.sec <= 9 ? '0'+todo.date.sec : todo.date.sec}`}
        </div>
            <div className="todo">
            <li title={`Created at: ${todo.date.day}/${todo.date.month}/${todo.date.year} ${todo.date.hours}:${todo.date.mins}`} className={`todo-item ${todo.completed ? "completed" : todo.favorite ? "favorited" : ''}`}>{text}</li>
            <button onClick={completeTodo} className={`${todo.completed ? "completed-btn" : "complete-btn text-white"}`}><i className="fas fa-check"></i></button>
            <button onClick={importanteTodo} className={`${todo.favorite ? "stars-btn" : "star-btn text-white"}`}><i className="fas fa-star"></i></button>
            <button onClick={deleteTodo} className="trash-btn"><i className="fas fa-trash"></i></button>
            </div>
        </div>
    );
}

export default ToDo;