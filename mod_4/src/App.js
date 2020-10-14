import React from 'react';

import logo from './logo.svg';
import './App.css';
import EngineerList from './containers/EngineerList'
import MostFamous from './containers/MostFamous'
import Form from './components/Form'

class App extends React.Component {
  state = {
    api: [],
    mostfamous: []
  }
  componentDidMount() {
    fetch("http://localhost:3000/engineers")
      .then(response => response.json())
      .then(data => this.setState({ api: data }))
      .catch(console.log)

  }
  addMostFamous = (obj) => {
    this.setState({ mostfamous: [obj, ...this.state.mostfamous] })

  }
  removeFromFamous = (obj) => {
    let newArray = this.state.mostfamous.filter(element => element.id !== obj.id)
    this.setState({ mostfamous: newArray })
  }
  submitHandler = (obj) => {
    let myArray = [obj, ...this.state.api]
    this.setState({ api: myArray })
  }


  render() {


    return (
      <div className="eng-container">
        <Form mySubmit={this.submitHandler} />
        <EngineerList engineers={this.state.api} clickHandler={this.addMostFamous} />
        <MostFamous engineers={this.state.mostfamous} removeFamous={this.removeFromFamous} />

      </div>
    )





  }

}

export default App;
