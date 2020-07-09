// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDoForm from './TodoForm'
import './Todo.css'

const ToDoList = (props) => {

    const taskHeaders = document.querySelectorAll('.task')

    taskHeaders.forEach(item => item.addEventListener('click', () => {
        item.classList.toggle('cleared')
    }))


    return(
        <div>{props.tasks.map(item => <h2 className='task' key={item.id}>{item.name}</h2>)}<ToDoForm addTask={props.addTask} /></div>
    )
}

export default ToDoList 