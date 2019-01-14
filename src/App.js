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
    ]
  }

  render() {
    return (
      <div className="App">
        <h1> This my program</h1>
         <p> Welcome to all</p>
         <button> Switch Button </button>
          < Person name={this.state.persons[0].name} age={this.state.persons[0].age} />
          < Person name="Neela" age="43" />
          < Person name="'Charu" age="17" >myhobbies: Racing </ Person>
      </div>
    );
//    return React.createElement('div1', null, React.createElement('div1', 'h1', 'I am a super star!!!!!'))
  }
}

export default App;
