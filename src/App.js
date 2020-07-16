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
import LiveChat from "./pages/LiveChat"
import Collection from "./pages/Colletion"
import { toast, ToastContainer } from 'react-toastify'

class App extends Component {
  showToast(type, message) {
    // 0 = warning, 1 = success
    switch (type) {
      case 0:
        toast.warning(message)
        break
      case 1:
        toast.success(message)
        break
      default:
        break
    }
  }



  render() {
    const { member = {} } = this.props
    const { isUserLoggedIn } = member

    return (
      <Router>
        <Switch>
          <Route path="/Collections/:token" component={Collection} />
          {isUserLoggedIn ? (
            <Route path="/upload" component={UploadFile} />
          ) : null
          }
          {isUserLoggedIn ? (
            <Route path="/live-chat" component={(props) => <LiveChat  {...props} showToast={(type, message) => this.showToast(type, message)} logout={() => { }} member={member} />} />
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
