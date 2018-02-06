import React, { Component } from 'react';
import Todo from './components/Todo';
import './App.css';
import axios from 'axios';
import { setTodos } from './redux/reducer';
import { connect } from 'react-redux';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = { title: '', description: '' };
  }

  componentWillMount() {
    axios.get('/api/todos').then(response => {
      console.log(response.data)
      this.props.setTodos(response.data);
    })
  }

  handleChange(event) {
    let name = event.target.name;
    let value = event.target.value;

    this.setState({
      [name]: value
    }, () => console.log(this.state));
  }

  handleSubmit() {
    console.log('submitted')
    // axios.post('/api/todo', {title: this.state.title, description: this.state.description}).then(resp => {
    //   console.log(resp);
    // });
  }

  render() {
    return (
      <div className="App">
        <Todo />
        <input name="title" type='text' onChange={(e) => this.handleChange(e)} />
        <input name="description" type='text' onChange={(e) => this.handleChange(e)} />
        <button onClick={() => this.handleSubmit()}>Submit</button>

        {this.props.todos.map(todo => (
          <div key={todo.id}>
            <div>{todo.title}: {todo.description}</div>
          </div>
        ))}
      </div>
    );
  }
}

function mapStateToProps(state) {
  return state;
}

export default connect(mapStateToProps, { setTodos: setTodos })(App);
