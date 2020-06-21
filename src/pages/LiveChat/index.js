/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react"
import { Upload, message, PageHeader, Breadcrumb } from 'antd';
import { Link } from 'react-router-dom'
import Main from '../../components/Main/Main'

class LiveChat extends Component {
  componentDidMount() {
    var myWindow = document.getElementById('window');

    myWindow.style.width = window.innerWidth + "px";
    myWindow.style.height = window.innerHeight + "px";
    window.onresize = function () {

      myWindow.style.width = window.innerWidth + "px";
      myWindow.style.height = window.innerHeight + "px";
    }
  }
  render() {


    return (

      <div className="App Upload">
        <div id="window" className="window">


          <div className="clearfix" />
          <div className="container">

            <PageHeader
              className="site-page-header"
              title="Message Page"
              onBack={() => { this.props.history.push("/") }}
            >
              <Breadcrumb >
                <Breadcrumb.Item>
                  <Link to={"/"}>
                    Home
                  </Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>Message Page</Breadcrumb.Item>
              </Breadcrumb>
              <div style={{ backgroundColor: "#fff" }}>
                <Main {...this.props} />
              </div>


            </PageHeader>
          </div>
        </div>
      </div>

    );
  }
}

export default LiveChat;
