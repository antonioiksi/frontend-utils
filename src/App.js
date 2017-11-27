import React, { Component } from 'react';
import logo from './logo.svg';
import './App.css';
import TextAreaTest from "./components/TextAreaTest/index";
import DownloadJson from "./components/DownloadJson/index";
import JsonTransformsTest from "./components/JsonTransformsTest/index";
import JspathTest from "./components/JspathTest/index";
import PDFTest from "./components/JSPDFTest/index";
import Export from "./components/Export/index";
import VisjsTest from "./components/VisjsTest/index";
import VisjsNetworkTest from "./components/VisjsNetworkTest/index";








class App extends Component {
  render() {
    return (
      <div className="App">
        <header className="App-header">
          <img src={logo} className="App-logo" alt="logo" />
          <h1 className="App-title">Welcome to React</h1>
        </header>
        <p className="App-intro">
          To get started, edit <code>src/App.js</code> and save to reload.
        </p>
          <Export/>
          <PDFTest/>
          <VisjsTest/>
          <VisjsNetworkTest/>
      </div>
    );
  }
}

export default App;
