import React, { Component } from "react";
//import { robots } from "./robots";
import CardList from "./Cardlist";
import SearchBox from "./SearchBox";

//props are simply things that come out of state. So a parent feeds "state" into a child component and as soon as a child (components) component receives a "sate its a prperty. That child can never change that property. The parent just tells it what the "state" is and the child receives it as "robots"
class App extends Component {
  constructor() {
    super();
    this.state = {
      //state contains the things that can change in our app. And it lives in the parent component
      robots: [], //im real life this will come from an API, is not hardcoded in robots.js like-> robots: robots. it is an empty array initially.
      searchfield: "",
    };
  }

  componentDidMount() {
    // help us rerender the state of robots in the constructor() with the robots cardlist
    fetch("https://jsonplaceholder.typicode.com/users")
      .then((response) => response.json())
      .then((users) => this.setState({ robots: users }));
  }

  //constructor and render are pre-built in React. But when you create your own methods like "onSearchChange" on a Component, use this syntax: "= (event) => {". So arrow functions, will make sure that the "this" value is according to where it was created which is the "App"
  onSearchChange = (event) => {
    //console.log(event.target.value);
    this.setState({ searchfield: event.target.value }); // this is to update the state of the searchfield with the letter we write
  };

  render() {
    const filteredRobots = this.state.robots.filter((robots) => {
      return robots.name
        .toLowerCase()
        .includes(this.state.searchfield.toLowerCase());
    });
    if (this.state.robots.length === 0) {
      return <h1> Loading</h1>;
    } else {
      return (
        <div className="tc">
          <h1>Arturo Robot</h1>
          <SearchBox searchChange={this.onSearchChange} />
          <CardList robots={filteredRobots} />;
        </div>
      );
    }
  }
}

export default App;
