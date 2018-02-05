import React, { Component } from 'react';
import logo from './logo.svg';
import Todo from './components/Todo';
import './App.css';
// import axios from 'axios';

class App extends Component {
  constructor(props) {
    super(props);
    this.state = {title: '', description: ''};
  }

  handleChange(event) {
   let name = event.target.name;
   let value = event.target.value;
   
   this.setState({
     [name]: value
   }, ()=> console.log(this.state));
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
        <input name="title" type='text' onChange={(e) => this.handleChange(e)}/>
        <input name="description" type='text' onChange={(e) => this.handleChange(e)}/>
        <button onClick={()=> this.handleSubmit()}>Submit</button>
      </div>
    );
  }
}

export default App;
