// your components will all go in this `component` directory.
// feel free to change this component.js into TodoList.js
import React from 'react'
import ToDoForm from './TodoForm'
import ToDo from './Todo.js'

const ToDoList = (props) => {

    // const taskHeaders = document.querySelectorAll('.task')

    // taskHeaders.forEach(item => item.addEventListener('click', () => {
    //     item.classList.toggle('cleared')
    // }))

    // const handleClick = itemId => {
    //     props.toggleCleared(itemId)
    // }
    
    return(
        <div>
            {props.tasks.map(item => 
                <ToDo item={item} key={item.id} toggleCompleted={props.toggleCompleted} />
            )}
            <ToDoForm addTask={props.addTask} toggleCleared={props.toggleCleared} />
        </div>
    )
}

export default ToDoList 