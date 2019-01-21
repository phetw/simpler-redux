import React, { Component } from 'react'
import { connect } from 'react-redux'
import { increment, decrement } from './action/counter'
import logo from './logo.svg'
import './App.css'

class App extends Component {
  componentDidMount() {
    console.log(this.props)
  }
  increment = () => {
    this.props.increment()
  }

  decrement = () => {
    this.props.decrement()
  }
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <p>
            Edit <code>src/App.js</code> and save to reload.
          </p>
          <h1>{this.props.counter}</h1>
          <div className="button-group">
            <button onClick={this.increment}>+</button>
            <button onClick={this.decrement}>-</button>
          </div>
          <a
            className="App-link"
            href="https://reactjs.org"
            target="_blank"
            rel="noopener noreferrer">
            Learn React
          </a>
        </header>
      </div>
    )
  }
}

const mapStateToProps = ({ counter }) => {
  return {
    counter,
  }
}

const mapDispatchToProps = dispatch => {
  return {
    increment: () => dispatch(increment(1)),
    decrement: () => dispatch(decrement(1)),
  }
}

export default connect(
  mapStateToProps,
  mapDispatchToProps
)(App)
