import React from 'react'
const Footer = ({todos, filterTodos, status}) => {

    return(
        <div className="container-fluid m-0 p-0 text-muted fixed-bottom p-1 m-1 bg-white b-bt-1 created">
            This proyect was bootstraped using 'create-react-app'.
            Developed by <a href="https://www.linkedin.com/in/juangidoni/">Juan Ignacio Gidoni</a>
      </div>
    );
}

export default Footer;