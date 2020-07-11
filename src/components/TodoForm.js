import React from 'react' 
import styled from 'styled-components'

const FormStyle = styled.form`
    display: flex;
    flex-direction: column;
    align-items: flex-start;
`;

const ButtonStyle = styled.button`
    font-family: 'Montserrat', sans-serif;
    margin-top: 25px;
    align-self: center;
    height: 40px;
    width: 170px;
    border-radius: 8px;
    outline: none;
    background-color: #ffc35b;
    border: 2px solid #ffa100;
    &:active {
        background-color: #ffa100;
        border: none;
    }
`;

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
    };

    render() {
        return (
            <FormStyle onSubmit={this.handleSubmit} >
                <input type='text' placeholder='Enter New Task' value={this.state.taskName} onChange={this.handleChange} />
                <ButtonStyle type='submit' >Add Task</ButtonStyle>
                <ButtonStyle onClick={this.props.toggleCleared}>Clear Completed Tasks</ButtonStyle>
            </FormStyle>
        )
    }
}

export default ToDoForm