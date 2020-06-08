/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react"
import { BrowserRouter as Router, Route, Switch } from "react-router-dom"
import { connect } from "react-redux"
import './App.css';
import 'antd/dist/antd.css';
import Home from "./pages/Home"
import Resgister from "./pages/Resgister"
import UploadFile from "./pages/Upload"
class App extends Component {
  componentDidMount() {
    // window.localStorage.removeItem('isUserLoggedIn')
  }

  render() {
    const { member = {} } = this.props
    const { isUserLoggedIn } = member
    return (
      <Router>
        <Switch>
          {isUserLoggedIn ? (
            <Route path="/upload" component={UploadFile} />
          ) : null
          }

          {isUserLoggedIn ? (
            <Route path="/" component={Home} />
          ) : (<Route exact path="/" component={Resgister} />)
          }

          <Route component={Resgister} />
        </Switch>
      </Router>

    );
  }
}
const mapStateToProps = state => ({
  member: state.member || {},
});

const mapDispatchToProps = dispatch => {
  return {

  }
}

export default connect(mapStateToProps, mapDispatchToProps)(App)
