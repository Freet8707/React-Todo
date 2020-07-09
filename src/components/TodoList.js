// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'

const ToDoList = (props) => <div>{props.tasks.map(item => <h2 key={item.id}>{item.name}</h2>)}</div>

export default ToDoList 