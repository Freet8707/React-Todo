import React from 'react' 

class ToDoForm extends React.Component {
    constructor(props) {
        super(props);
        this.state = {
            taskName: ''
        }        
    }

    handleChange = e => {
        this.setState({
            taskName: e.target.value
        })
    }
    
    handleSubmit = e => {
        e.preventDefault();
        this.props.addTask(this.state.taskName)
        console.log(this.state.taskName)
        this.setState({
            taskName: ''
        })
    }
    
    render() {
        return (
            <form onSubmit={this.handleSubmit}>
                <input type='text' placeholder='Enter New Task' value={this.state.taskName} onChange={this.handleChange} />
                <button type='submit' >Add Task</button>
            </form>
        )
    }
}

export default ToDoForm