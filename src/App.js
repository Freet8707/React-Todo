import React from 'react';
import ToDoList from './components/TodoList';
import styled from 'styled-components'
import './components/Todo.css'

const AppDiv = styled.div`
  width: 100%;
  max-width: 400px;
  margin: 0 auto;
  background-color: #eaff99;
  padding: 0 0 30px 0;
`;

const tasks = [
  {
    name: 'complete MVP',
    id: 12,
    completed: false
  }, 
  {
    name: 'review stretch task',
    id: 123,
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
      <AppDiv style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList tasks={this.state.tasks} addTask={this.addTask} toggleCompleted={this.toggleCompleted} toggleCleared={this.toggleCleared} />
      </AppDiv>
    );
  }
}

export default App;
