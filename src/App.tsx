import * as React from "react";
import Web3 = require("web3");

import "./App.scss";

import logo from "./logo.svg";

const web3 = new Web3("ws://localhost:8546");

class App extends React.Component {
  public render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          You are using web3 at version {web3.version}
        </p>
      </div>
    );
  }
}

export default App;
