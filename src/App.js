import React from 'react';
import ToDoList from './components/TodoList'
import './components/Todo.css'

const tasks = [
  {
    name: 'heyyo',
    id: Date.now(),
    completed: false
  }
]

class App extends React.Component {
  // you will need a place to store your state in this component.
  // design `App` to be the parent component of your application.
  // this component is going to take care of state, and any change handlers you need to work with your state
  constructor() {
    super();
    this.state = {
      tasks: tasks
    }
  }

  addTask = taskName => {
    this.setState({
      tasks: [
        ...this.state.tasks,
        {
          name: taskName,
          id: Date.now(),
          completed: false
        }
      ]
    })
  }

  toggleCompleted = itemId => {
    this.setState({
      tasks: this.state.tasks.map(item => {
        if(item.id === itemId) {
          return {
            ...item,
            completed: !item.completed
          }
        }
        return item
      })
    })
  }

  toggleCleared = () => {
    this.setState({
      tasks: this.state.tasks.filter(item => {
        return !item.completed
      })
    })
  }

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList tasks={this.state.tasks} addTask={this.addTask} toggleCompleted={this.toggleCompleted} toggleCleared={this.toggleCleared} />
      </div>
    );
  }
}

export default App;
