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
    toggle: false,
  };

  // switchNameHandler = (newName) => {
  //   //console.log("was clicked");
  //   // don't do this this.state.persons[0].name = "Maximilian";
  //   console.log(this.state);
  //   this.setState({
  //     persons: [
  //       { name: newName, age: 28 },
  //       { name: "manu", age: 29 },
  //       { name: "step", age: 27 },
  //     ],
  //   });
  //   console.log(this.state);
  // };

  deleteItemHandler = (personIndex) => {
    // const persons = this.state.persons;
    //good pratice to do like this
    const persons = [...this.state.persons];
    persons.splice(personIndex, 1);
    this.setState({ persons: persons });
  };

  nameChangedHandler = (event) => {
    this.setState({
      persons: [
        { name: "Max", age: 28 },
        { name: event.target.value, age: 29 },
        { name: "step", age: 27 },
      ],
    });
  };

  togglePerson = () => {
    this.setState((preState) => {
      return {
        toggle: !preState.toggle,
      };
    });
  };

  render() {
    const style = {
      backgroundColor: "white",
      font: "inherit",
      border: "1px solid blue",
      padding: "8px",
      cursor: "pointer",
    };
    let person = null;

    if (this.state.toggle) {
      person = (
        <div>
          {this.state.persons.map((ele, index) => {
            return (
              <Person
                name={ele.name}
                age={ele.age}
                click={() => this.deleteItemHandler(index)}
              />
            );
          })}
        </div>
      );

      // person = (
      //   <div>
      //     <Person
      //       name={this.state.persons[0].name}
      //       age={this.state.persons[0].age}
      //     />
      //     <Person
      //       name={this.state.persons[1].name}
      //       age={this.state.persons[1].age}
      //       click={this.switchNameHandler.bind(this, "max!")}
      //       changed={this.nameChangedHandler}
      //     >
      //       my hobbies: basketball
      //     </Person>
      //     <Person
      //       name={this.state.persons[2].name}
      //       age={this.state.persons[2].age}
      //     />
      //   </div>
      // );
    }

    return (
      <div className="App">
        <h1>Hi, I am a react app</h1>
        <p>This should work</p>
        <button style={style} onClick={this.togglePerson}>
          Switch name
        </button>
        {person}
      </div>
    );
  }
}

export default App;
