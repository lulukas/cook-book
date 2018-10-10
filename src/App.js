import React, { Component } from "react";
import MainHeader from "./components/molecules/headers/MainHeader";
import "./App.css";

class App extends Component {
  render() {
    return (
      <div className="App">
        <MainHeader className="App-header" title="My CooKBooK app" />
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
      </div>
    );
  }
}

export default App;
