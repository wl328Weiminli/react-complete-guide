import React, { Component } from "react";
import "./App.css";
import Person from "./Person/Person";

class App extends Component {
  state = {
    persons: [
      { name: "Max", age: 28 },
      { name: "manu", age: 29 },
      { name: "step", age: 26 },
    ],
    otherState: "some other state",
  };

  switchNameHandler = () => {
    //console.log("was clicked");
    // don't do this this.state.persons[0].name = "Maximilian";
    console.log(this.state);
    this.setState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "manu", age: 29 },
        { name: "step", age: 27 },
      ],
    });
    console.log(this.state);
  };

  render() {
    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This should work</p>
        <button onClick={this.switchNameHandler}>Switch name</button>
        <Person
          name={this.state.persons[0].name}
          age={this.state.persons[0].age}
        />
        <Person
          name={this.state.persons[1].name}
          age={this.state.persons[1].age}
        >
          my hobbies: basketball
        </Person>
        <Person
          name={this.state.persons[2].name}
          age={this.state.persons[2].age}
        />
      </div>
    );
  }
}

export default App;
