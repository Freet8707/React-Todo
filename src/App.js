import React from 'react';
import ToDoList from './components/TodoList'

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

  render() {
    return (
      <div style={{display: 'flex', flexDirection: 'column', alignItems: 'center'}}>
        <h2>Welcome to your Todo App!</h2>
        <ToDoList tasks={this.state.tasks} />
      </div>
    );
  }
}

export default App;
