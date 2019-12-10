import React, { Component } from 'react';
import { render } from 'react-dom';
import Hello from './Hello';
import Person from './component/Person'
import './style.css';

class App extends Component {
  constructor(props) {
    super(props);
    this.state={
      text:"sandip"
    }
    console.log("Index constructor");
  }
  static getDerivedStateFromProps(props,state){
    console.log("Index getDerivedStateFromProps")
  }

  componentDidMount(){
    console.log("index componentDidMount");
  }
  UNSAFE_componentWillMount(){
 console.log("index componentWillMount");
  }
  render() {
    console.log("index render");
    return (
      <div>
        <Person/>
      </div>
    );
  }
}

render(<App />, document.getElementById('root'));
