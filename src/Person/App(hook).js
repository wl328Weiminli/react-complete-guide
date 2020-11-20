import React, { useState } from "react";
import "./App.css";
import Person from "./Person/Person";

const app = (props) => {
  const [personsState, setPersonState] = useState({
    persons: [
      { name: "Max", age: 28 },
      { name: "manu", age: 29 },
      { name: "step", age: 26 },
    ],
  });

  const [otherState, setOtherState] = useState("some other state");

  console.log(personsState, otherState);

  const switchNameHandler = () => {
    //console.log("was clicked");
    // don't do this this.state.persons[0].name = "Maximilian";
    setPersonState({
      persons: [
        { name: "Maximilian", age: 28 },
        { name: "manu", age: 29 },
        { name: "step", age: 27 },
      ],
    });
  };
  return (
    <div className="App">
      <h1>Hi, I am a react app</h1>
      <p>This should work</p>
      <button onClick={switchNameHandler}>Switch name</button>
      <Person
        name={personsState.persons[0].name}
        age={personsState.persons[0].age}
      />
      <Person
        name={personsState.persons[1].name}
        age={personsState.persons[1].age}
      >
        my hobbies: basketball
      </Person>
      <Person
        name={personsState.persons[2].name}
        age={personsState.persons[2].age}
      />
    </div>
  );
};

export default app;
