import React from 'react'
const Header = ({todos, filterTodos, status}) => {

    let classFilter = '';
    let todosLen = filterTodos.length;
    if(status === 'all'){
        classFilter = 'fas fa-tasks';
    }else if(status === 'completed'){
        classFilter = 'fas fa-check';
    }else if(status === 'favorite'){
        classFilter = 'fas fa-star';
    }else if(status === 'uncompleted'){
        classFilter = 'fas fa-times';
    }else {
        classFilter = 'fas fa-th'
    }
    return(
        <div className="container-fluid m-0 p-0">
        <nav className="mb-1 navbar navbar-expand-lg navbar-dark bg-dark secondary-color lighten-1 b-b-1">
        <a className="navbar-brand" href="/">React ToDo</a>
          <ul className="navbar-nav mr-auto">
            <li className="nav-item active">
              <a className="nav-link text-muted created" href="https://github.com/JuanGidoni">Created by Juan Ignacio Gidoni</a>
            </li>
          </ul>
          <ul className="navbar-nav ml-auto nav-flex-icons">
            <li className="nav-item d-flex flex-row justify-content-center">
              <button className="nav-link waves-effect waves-light btn text-white bg-reacTodo mr-1 p-1 md-p-0 cursor-none">
                  <span id="totalTodo" className="mr-1">{todos.length}</span>
                <i className="fas fa-tasks"></i>
              </button>
              <button className="nav-link waves-effect waves-light btn text-white bg-reacTodo p-1 md-p-0 cursor-none">
                  <span className="mr-1">{todosLen}</span>
                <i className={classFilter}></i>
              </button>
            </li>
          </ul>
      </nav>
      </div>
    );
}

export default Header;