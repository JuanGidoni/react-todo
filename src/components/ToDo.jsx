import React from 'react'

export default function ToDo(props) {
    return (
        <div className="box-action2">
            <input type="checkbox" checked={props.checked} readOnly/>
            <li id={props.theKey}>{props.text}</li>
        </div>
    )
}
