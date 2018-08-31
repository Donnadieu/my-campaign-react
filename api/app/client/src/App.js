import React, { Component } from 'react';
import './App.css';
import Form_1 from './components/Form_1';

class App extends Component {
  constructor(props){
    super(props)

    this.state = {
      currentForm: ''
    }

    this.handleClick = (e) => {
      this.setState({
        currentForm: e.target.id
      })
    }
    this.renderForm = () => {
      switch (this.state.currentForm) {
        case "Form_1":
          return <Form_1/>
          break;
        default:

      }
    }
  }
  render() {
    return (
      <div className="App">
        <div>
          <div className="topnav">
            <a href="#home" id="Form_1" onClick={(event) => this.handleClick(event)}>Form_1</a>
            <a href="#news">Form_2</a>
            <a href="#contact">Form_3</a>
            <a href="#about">Form_4</a>
          </div>
          <h1>Welcome to my Campaign</h1>
          {this.renderForm()}
        </div>
      </div>
    );
  }
}

export default App;
