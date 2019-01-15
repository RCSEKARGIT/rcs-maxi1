import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import Person from './Person/Person';

class App extends Component {
  state = {
    persons: [
     {name: "Sekar", age: "48" },
     {name: "neela", age: "43"},
     {name: "Charu", age: "17"}
    ],
    otherstate : "my other state"
  }
  switchNameHandler = (newName) => {
    // console.log(" Welcome to Click Button");
    this.setState( {
      persons: [
        {name: newName, age: "13" },
        {name: "Ramu", age: "44"},
        {name: "Raj", age: "40"}
       ]
    })
  }

  newChangedHandler = (event) => {
    this.setState( {
      persons: [
        {name: "Vedu", age: "13" },
        {name: event.target.value, age: "44"},
        {name: "Raj", age: "40"}
       ]
    })
  }
// Its all code 
// <button onClick={this.switchNameHandler.bind(this, "Vedu")}> Switch Button </button>*/

  render() {
    const style = {
      backgroundColor: 'white',
      font: 'inherit',
      border: '1px solid blue',
      padding: '8px',
      cursor: 'pointer'
    };
    return (
      <div className="App">
        <h1> This my program</h1>
         <p> Welcome to all</p>
     
          <button 
          style={style}
          onClick={ () => this.switchNameHandler("Vedu")}> Switch Button </button>
          < Person 
            name={this.state.persons[0].name} 
            age={this.state.persons[0].age} />
          < Person 
            name={this.state.persons[1].name} 
            age={this.state.persons[1].age}
            changed={this.newChangedHandler} />
          < Person 
            name="'Charu" 
            age="17" 
            click={this.switchNameHandler.bind(this, 'Santhi')}>
            myhobbies: Racing </ Person>
      </div>
    );
//    return React.createElement('div1', null, React.createElement('div1', 'h1', 'I am a super star!!!!!'))
  }
}

export default App;
