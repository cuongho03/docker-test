/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import './App.css';
import 'antd/dist/antd.css';
import Home from "./pages/Home"
import UploadFile from "./pages/Upload"
class App extends Component {


  render() {
    return (
      <Router>
        <Switch>

          <Route path="/upload" component={UploadFile} />
          <Route path="/" component={Home} />


        </Switch>
      </Router>

    );
  }
}

export default App;
