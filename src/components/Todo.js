import React from 'react';

const ToDo = props => {
    // console.log(props.item.completed)

    const handleClick = e => {
        props.toggleCompleted(props.item.id)
    }

    return (
        <div
            onClick={handleClick}
            className={`task${props.item.completed ? " cleared" : ""}`}
        >
          <p>{props.item.name}</p>  
        </div>
    )
}

export default ToDo