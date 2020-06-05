/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import filesService from './../../services/files'
import { Modal, Form, Input, Button } from 'antd';

class Home extends Component {
  constructor(props) {
    super(props)
    this.state = {
      titleFolder: "Public Files",
      expanStaus: false,
      data: [],
      privacyShow: false,
      isPublic: true,
      visible: false,
      toggle: true
    }
    this.title = props.match.params.folder
  }

  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk(values) {

    this.setState({
      visible: false,
      isPublic: false,
      privacyShow: true,
      titleFolder: "Private files"
    });
  };

  handleCancel = e => {

    this.setState({
      visible: false,
    });
  };
  fetchData() {
    filesService.fetchFiles().then(result => {
      this.setState({ data: result })
    })
  }

  componentDidMount() {
    this.fetchData()
    var myWindowFade = document.getElementById('start-window-fade'),
      myWindow = document.getElementById('window');
    myWindowFade.style.width = window.innerWidth + "px";
    myWindowFade.style.height = window.innerHeight + "px";
    myWindow.style.width = window.innerWidth + "px";
    myWindow.style.height = window.innerHeight + "px";
    window.onresize = function () {
      myWindowFade.style.width = window.innerWidth + "px";
      myWindowFade.style.height = window.innerHeight + "px";
      myWindow.style.width = window.innerWidth + "px";
      myWindow.style.height = window.innerHeight + "px";
    }
    // get Id
    var computerOverlay = document.getElementById('overlay-computer');
    var videoOverlay = document.getElementById('video-overlay');
    var noteOverlay = document.getElementById('note-overlay');
    var aboutOverlay = document.getElementById('about-overlay');
    var scor = document.getElementsByClassName('second-column')[0];

    var imageOverlay = document.getElementById('image-overlay');
    var computer = document.getElementById('icon-computer');
    var startX, startY, startWidth, startHeight;
    var isDown, mousePosition, offset;
    // coding
    const myVar = setInterval(myTimer, 1000);

    function myTimer() {
      var date = new Date();
      if (document.getElementById("time")) {
        document.getElementById("time").textContent = date.toLocaleTimeString();
      }

    }
    // show time


    var d = new Date();
    var days = ["Sunday", "Monday", "Tuesday", "Wednesday", "Thursday", "Friday", "Saturday"];
    // var div = document.getElementById('overlay-computer'),
    //   mouseclick = document.getElementById('first-row-win');
    // document.getElementById("day").innerHTML = days[d.getDay()];
    // document.getElementById("number-day").innerHTML = d.getUTCDate();
    // onClick
    // div.onscroll = function () {
    //   resizer.style.bottom = (0 - div.scrollTop) + "px";
    //   resizer.style.right = 0;
    // }
    const that = this
    window.$(".strat-win").click(function () {
      window.$('.start-window-fade').fadeToggle();
      window.$('.start-window').fadeToggle();
    });
    window.$('.start-window-fade').click(function () {
      window.$('.start-window-fade').fadeOut();
      window.$('.start-window').fadeOut();
    });
    document.getElementById('start-window-fade').onclick = function () {
      that.fadeOutByMe(document.getElementById('start-window-fade'));
      that.fadeOutByMe(document.getElementById('start-window'));
    }
    document.getElementById('strat-win').onclick = function () {

      if (document.getElementById('start-window-fade').style.opacity <= .1) {
        that.fadeInByMe(document.getElementById('start-window-fade'));
        that.fadeInByMe(document.getElementById('start-window'));
      }
      else if (document.getElementById('start-window-fade').style.opacity >= 1) {
        that.fadeOutByMe(document.getElementById('start-window-fade'));
        that.fadeOutByMe(document.getElementById('start-window'));
      }
    }
    // onclick

    document.getElementById('close-all').onclick = function () {
      if (document.getElementById('start-window-fade').style.opacity >= 1) {
        that.fadeOutByMe(document.getElementById('start-window-fade'));
        that.fadeOutByMe(document.getElementById('start-window'));
      }
      if (computerOverlay.style.transform === "scale(1)") {
        computerOverlay.style.transform = "scale(0)";
        document.getElementById('a1').style.borderBottom = '2px solid #76b9ed';
      }
      if (imageOverlay.style.transform === "scale(1)") {
        imageOverlay.style.transform = "scale(0)";
        document.getElementById('a2').style.borderBottom = '2px solid #76b9ed';
      }
      if (videoOverlay.style.transform === "scale(1)") {
        videoOverlay.style.transform = "scale(0)";
        document.getElementById('a3').style.borderBottom = '2px solid #76b9ed';
      }
      if (noteOverlay.style.transform === "scale(1)") {
        noteOverlay.style.transform = "scale(0)";
        document.getElementById('a4').style.borderBottom = '2px solid #76b9ed';
      }
      if (aboutOverlay.style.transform === "scale(1)") {
        aboutOverlay.style.transform = "scale(0)";
        document.getElementById('a5').style.borderBottom = '2px solid #76b9ed';
      }
    }

    window.$('#myTabs a').click(function (e) {
      e.preventDefault()
      window.$(this).tabs('show')
    });

    window.$('#myTabs a[href="#profile"]').tabs('show') // Select tab by name
    window.$('#myTabs a:first').tabs('show') // Select first tab
    window.$('#myTabs a:last').tabs('show') // Select last tab
    window.$('#myTabs li:eq(2) a').tabs('show') // Select third tab (0-indexed)
    // onClick
    document.getElementById('a5').onclick = function () {
      if (aboutOverlay.style.transform === "scale(1)") {
        aboutOverlay.style.transform = "scale(0)";
        this.style.borderBottom = '2px solid #76b9ed';
      } else {
        aboutOverlay.style.transform = "scale(1)"
        this.style.border = 'none';
      }
    }


    document.getElementById('a2').onclick = function () {
      if (imageOverlay.style.transform === "scale(1)") {
        imageOverlay.style.transform = "scale(0)";
        this.style.borderBottom = '2px solid #76b9ed';
      } else {
        imageOverlay.style.transform = "scale(1)"
        this.style.border = 'none';
      }
    }

    document.getElementById('a3').onclick = function () {
      if (videoOverlay.style.transform === "scale(1)") {
        videoOverlay.style.transform = "scale(0)";
        this.style.borderBottom = '2px solid #76b9ed';
      } else {
        videoOverlay.style.transform = "scale(1)"
        this.style.border = 'none';
      }
    }
    document.getElementById('a4').onclick = function () {
      if (noteOverlay.style.transform === "scale(1)") {
        noteOverlay.style.transform = "scale(0)";
        this.style.borderBottom = '2px solid #76b9ed';
      } else {
        noteOverlay.style.transform = "scale(1)"
        this.style.border = 'none';
      }
    }


    document.getElementById('a1').onclick = function () {
      if (computerOverlay.style.transform === "scale(1)") {
        computerOverlay.style.transform = "scale(0)";
        this.style.borderBottom = '2px solid #76b9ed';
      } else {
        computerOverlay.style.transform = "scale(1)"
        this.style.border = 'none';
      }
    }


    // mouseclick.addEventListener('mousedown', function (e) {
    //   isDown = true;
    //   offset = [
    //     div.offsetLeft - e.clientX,
    //     div.offsetTop - e.clientY
    //   ];
    // }, true);

    document.addEventListener('mouseup', function () {
      isDown = false;
    }, true);

    // document.addEventListener('mousemove', function (event) {
    //   event.preventDefault();
    //   if (isDown) {
    //     mousePosition = {

    //       x: event.clientX,
    //       y: event.clientY

    //     };
    //     div.style.left = (mousePosition.x + offset[0]) + 'px';
    //     div.style.top = (mousePosition.y + offset[1]) + 'px';
    //   }
    // }, true);

    // var resizer = document.getElementsByClassName('resizer')[0];
    // resizer.addEventListener('mousedown', this.initDrag, false);
    // div.onresize = function () {
    //   resizer.style.bottom = 0;
    //   resizer.style.right = 0;
    // }




    var colorBox = document.getElementsByClassName('color-box')[0],
      btn = document.getElementsByClassName('gear-check')[0];
    btn.onclick = function parenti() {

      colorBox.style.right = `-${colorBox.offsetWidth}px`;
      btn.style.right = `-${colorBox.offsetWidth}px`;
      btn.onclick = function childi() {
        colorBox.style.right = `0px`;
        btn.style.right = `0px`;
        btn.onclick = function () {
          return parenti();
        }
      }
    }



  }

  initDrag(e) {
    var div = document.getElementById('overlay-computer'),
      mouseclick = document.getElementById('first-row-win');
    var startX, startY, startWidth, startHeight;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(div).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(div).height, 10);
    document.documentElement.addEventListener('mousemove', this.doDrag, false);
    document.documentElement.addEventListener('mouseup', this.stopDrag, false);
  }
  opennote() {
    var noteOverlay = document.getElementById('note-overlay');

    noteOverlay.style.transform = "scale(1)";
    document.getElementById('a4').style.display = "block";
  }

  closenote() {
    var noteOverlay = document.getElementById('note-overlay');

    noteOverlay.style.transform = "scale(0)";
    document.getElementById('a4').style.display = "none";
  }
  opencom() {
    var computerOverlay = document.getElementById('overlay-computer');
    computerOverlay.style.transform = "scale(1)";
    document.getElementById('a1').style.display = "block";
  }

  closecom() {
    var computerOverlay = document.getElementById('overlay-computer');
    computerOverlay.style.transform = "scale(0)";
    document.getElementById('a1').style.display = "none";
  }

  closeopencom() {
    var computerOverlay = document.getElementById('overlay-computer');
    computerOverlay.style.transform = "scale(0)";
    document.getElementById('a1').style.display = "block";
    document.getElementById('a1').style.borderBottom = '2px solid #76b9ed';
  }

  doDrag(e) {
    var div = document.getElementById('overlay-computer')
    var startX, startY, startWidth, startHeight;
    startX = e.clientX;
    startY = e.clientY;
    startWidth = parseInt(document.defaultView.getComputedStyle(div).width, 10);
    startHeight = parseInt(document.defaultView.getComputedStyle(div).height, 10);
    div.style.width = (startWidth + e.clientX - startX) + 'px';
    div.style.height = (startHeight + e.clientY - startY) + 'px';
  }

  stopDrag(e) {
    document.documentElement.removeEventListener('mousemove', this.doDrag, false);
    document.documentElement.removeEventListener('mouseup', this.stopDrag, false);
  }


  upercom() {
    var div = document.getElementById('overlay-computer')
    div.style.width = "100%";
    div.style.top = "0";
    div.style.left = "0";
    div.style.height = "95.3vh";
    document.getElementById('upercam').style.display = "none";
    document.getElementById('returncam').style.display = "inline";
  }

  returncom() {
    var div = document.getElementById('overlay-computer')
    div.style.width = "70%";
    div.style.top = "20%";
    div.style.left = "15%";
    div.style.height = "60%";
    document.getElementById('returncam').style.display = "none";
    document.getElementById('upercam').style.display = "inline";
  }

  powerOff() {
    var myWindow = document.getElementById('window');
    this.fadeOutByMe(myWindow);
  }


  openvid() {
    var videoOverlay = document.getElementById('video-overlay');
    videoOverlay.style.transform = "scale(1)";
    document.getElementById('a3').style.display = "block";
  }

  closevid() {
    var videoOverlay = document.getElementById('video-overlay');
    videoOverlay.style.transform = "scale(0)";
    document.getElementById('a3').style.display = "none";
  }

  openimg() {
    var imageOverlay = document.getElementById('image-overlay');
    imageOverlay.style.transform = "scale(1)";
    document.getElementById('a2').style.display = "block";
  }

  closeimg() {
    var imageOverlay = document.getElementById('image-overlay');
    imageOverlay.style.transform = "scale(0)";
    document.getElementById('a2').style.display = "none";
  }


  openabout() {
    var aboutOverlay = document.getElementById('about-overlay');
    aboutOverlay.style.transform = "scale(1)";
    document.getElementById('a5').style.display = "block";
  }

  closeabout() {
    var aboutOverlay = document.getElementById('about-overlay');
    aboutOverlay.style.transform = "scale(0)";
    document.getElementById('a5').style.display = "none";
  }

  showTimer() {

    var myDiv = document.getElementById("history"),
      date = new Date(),
      year = date.getUTCFullYear(),
      month = date.getUTCMonth(),
      day = date.getUTCDate();
    if (month < 10) {
      month = '0' + month;
    }
    if (day < 10) {
      day = '0' + day;
    }
    myDiv.textContent = year + '/' + month + '/' + day;
  }

  fadeOutByMe(element) {

    var opacity = 1,
      timer = setInterval(function name(params) {
        if (opacity <= .1) {
          clearInterval(timer);
          element.style.display = 'none';
          document.getElementById('container-start').classList.remove('activecontainer');
        }
        element.style.opacity = opacity;
        opacity -= 0.1;
      }, 50);
  }

  fadeInByMe(element) {

    var opacity = 0.1,
      timer = setInterval(function name(params) {
        if (opacity >= 1) {
          clearInterval(timer);
        }
        if (opacity >= .5) {
          document.getElementById('container-start').classList.add('activecontainer');
        }
        element.style.opacity = opacity;
        opacity += 0.1;
      }, 50);
    element.style.display = 'block';
  }


  render() {
    const { titleFolder, expanStaus, data, isPublic, privacyShow, visible, toggle } = this.state
    const privateData = []
    const publicData = []
    const shareData = []
    data.forEach(item => {
      if (item.status === "private") {
        privateData.push(item)
      }
      if (item.status === "public") {
        publicData.push(item)
      }
      if (item.status === "share") {
        shareData.push(item)
      }
    })

    // const check = shareData.length > 10
    const check = false
    let lengthData = shareData.length
    if (check) {
      lengthData = Math.ceil(shareData.length / 2)
    }
    return (
      <div className="App">
        <div id="window" className="window">

          <section className="option-box">
            <div className="color-box">
              <h4>All about GenC Platform</h4>

              <div style={{ position: 'relative', height: 0, paddingBottom: '56.25%', width: '400px' }}>
                <iframe src="https://www.youtube.com/embed/VUPtvK28fhY?ecver=2" style={{ position: 'absolute', width: '100%', height: '100%', left: 0 }} width={640} height={360} frameBorder={0} allowFullScreen />
              </div>
              <a className="btn btn-primary center-block text-center" onClick={() => { this.openabout() }}>About Me</a>
            </div>
            <i className="fa fa-gear fa-3x gear-check" />
          </section>

          <div className="clearfix" />
          {/* tmp */}
          <footer className="nav navbar-inverse navbar-fixed-top footer text-center">
            <div className="fluid-container">
              <div className="row">
                <div className="left">
                  <div className="col-xs-1-me">
                    <div className="icon-bottom strat-win" id="strat-win">
                      <img src="/logo192.png" height="20px" width="20px" alt="logo"></img>
                      {/* <i className="fa fa-windows fa-2x" /> */}
                    </div>
                  </div>
                  <div className="col-xs-1-me">
                    <div className="icon-bottom">
                      <i className="fa fa-search fa-2x" />
                    </div>
                  </div>
                  <div className="col-xs-1-me">
                    <div className="icon-bottom">
                      <i className="fa fa-envelope fa-2x" />
                    </div>
                  </div>
                  <div className="col-xs-1-me" id="a1">
                    <div className="icon-bottom">
                      <i className="fa fa-folder fa-2x" />
                    </div>
                  </div>
                  <div className="col-xs-1-me" id="a2">
                    <div className="icon-bottom">
                      <i className="fa fa-picture-o fa-2x" />
                    </div>
                  </div>
                  <div className="col-xs-1-me" id="a3">
                    <div className="icon-bottom">
                      <i className="fa fa-film fa-2x" />
                    </div>
                  </div>
                  <div className="col-xs-1-me" id="a4">
                    <div className="icon-bottom">
                      <i className="fa fa-file-text-o fa-2x" />
                    </div>
                  </div>
                  <div className="col-xs-1-me" id="a5">
                    <div className="icon-bottom">
                      <i className="fa fa-id-card fa-2x" />
                    </div>
                  </div>
                  <span className=".clearfix" />
                </div>
                <div className="right">
                  <div className="col-xs-1-me" id="close-all">
                  </div>
                  <div className="col-xs-1-me">
                    <div className="icon-bottom">
                      <i className="fa fa-bell fa-2x" />
                    </div>
                  </div>

                </div>
              </div>
            </div>
          </footer>

          <div className="start-window-fade hidden-start" id="start-window-fade" />
          <div className="start-window hidden-start" id="start-window">
            <div className="fluid-container" id="container-start">
              <div className="row">
                <div className="col-xs-1 first-column">
                  <div className="icon-bottom" id="power" >

                  </div>



                  <div onClick={() => {
                    if (!privacyShow) {
                      this.setState({
                        privacyShow: true,
                        visible: true
                      })
                    } else {
                      this.setState({
                        isPublic: false,
                        titleFolder: "Private files"
                      })
                    }
                  }}
                    className="icon-bottom " >
                    <i class="fa fa-file-text" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Private files"></i>
                  </div>

                  <div onClick={() => {
                    this.setState({
                      isPublic: true,
                      titleFolder: "Public files"
                    })
                  }} className="icon-bottom">
                    <i class="fa fa-file-o" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Public files"></i>
                  </div>

                  <div className="icon-bottom">

                    <i class="fa fa-cloud-upload" data-toggle="tooltip" data-placement="top" title="Upload file" onClick={() => { this.props.history.push("/upload") }} aria-hidden="true"></i>
                  </div>

                </div>
                <div className="col-xs-3 second-column">
                  <div className="wrap-scroll">
                    <div onClick={() => {
                      this.setState({
                        toggle: !toggle
                      })
                    }} className="head-med mouse-prient">
                      <small>{titleFolder} <i className={`${toggle ? "fa fa-chevron-up fa-1x" : "fa fa-chevron-down fa-1x"}`} /></small>
                    </div>
                    {
                      toggle ? (
                        <>
                          {
                            isPublic ? (
                              publicData.map(item => (
                                <div className="media">
                                  <div className="media-left">
                                    <a href="#">
                                      <img className="media-object" src={item.type === 'png' || item.type === 'jepg' || item.type === 'jpg' ? item.link : "https://i.ibb.co/d5pWRyG/file-img.png"} width={35} height={35} alt="..." />
                                    </a>
                                  </div>
                                  <div className="media-body">
                                    <small className="media-heading">{item.name}</small>
                                  </div>
                                </div>

                              ))
                            ) : (
                                privateData.map(item => (
                                  <div className="media">
                                    <div className="media-left">
                                      <a href="#">
                                        <img className="media-object" src={item.type === 'png' || item.type === 'jepg' || item.type === 'jpg' ? item.link : "https://i.ibb.co/d5pWRyG/file-img.png"} width={35} height={35} alt="..." />
                                      </a>
                                    </div>
                                    <div className="media-body">
                                      <small className="media-heading">{item.name}</small>
                                    </div>
                                  </div>

                                )))
                          }
                        </>
                      ) : null
                    }



                  </div>
                </div>
                <div className="col-xs-8 ">
                  <div className="head-box">
                    <small>Share files</small>
                  </div>
                </div>
                <div className={`${shareData.length % 2 > 10 ? "col-xs-4" : "col-xs-8"} third-column`}>

                  <div className="row">
                    {
                      shareData.map((item, index) => {

                        console.log(lengthData, check)
                        if (index < lengthData) {
                          console.log(item.type)
                          if (index === 0) {

                            return (
                              <div className="col-xs-4 box">
                                <div className="box-style">
                                  <div className="icon-bottom text-center" >
                                    {item.type === 'png' || item.type === 'jepg' || item.type === 'jpg' ? (
                                      <img className="media-object" src={item.link} width={175} height={65} alt="..." />
                                    ) : (<i style={{ marginTop: "20px" }} className="fa fa-file-o fa-2x" />)}


                                  </div>
                                  <div>
                                    {item.name}
                                  </div>
                                </div>
                              </div>
                            )

                          } else if (index === 1) {
                            return (
                              <div className="col-xs-8 box">
                                <div className="box-style text-center">
                                  <div className="icon-bottom text-center" >
                                    {item.type === 'png' || item.type === 'jepg' || item.type === 'jpg' ? (
                                      <img className="media-object" src={item.link} width={390} height={65} alt="..." />
                                    ) : (<i style={{ marginTop: "20px" }} className="fa fa-file-o fa-2x" />)}

                                  </div>
                                  <div>
                                    {item.name}
                                  </div>
                                </div>
                              </div>
                            )
                          }
                          else if (index === 2) {
                            return (
                              <div className="col-xs-8 box">
                                <div className="box-style">
                                  <div className="icon-bottom text-center" >
                                    {item.type === 'png' || item.type === 'jepg' || item.type === 'jpg' ? (
                                      <img className="media-object" src={item.link} width={390} height={65} alt="..." />
                                    ) : (<i style={{ marginTop: "20px" }} className="fa fa-file-o fa-2x" />)}
                                  </div>
                                  <div>
                                    {item.name}
                                  </div>
                                </div>
                              </div>
                            )
                          } else {
                            return (
                              <div className="col-xs-4 box">
                                <div className="box-style">
                                  <div className="icon-bottom text-center" >
                                    {item.type === 'png' || item.type === 'jepg' || item.type === 'jpg' ? (
                                      <img className="media-object" src={item.link} width={175} height={65} alt="..." />
                                    ) : (<i style={{ marginTop: "20px" }} className="fa fa-file-o fa-2x" />)}

                                  </div>
                                  <div>
                                    {item.name}
                                  </div>
                                </div>
                              </div>

                            )
                          }
                        }

                      })
                    }





                  </div>
                </div>


              </div>
            </div>
          </div>

          <Modal
            title=" Private files require your password"
            visible={this.state.visible}

            footer={[
            ]}
            onCancel={this.handleCancel}
          >
            <Form
              // form={form}
              onFinish={(values) => { this.handleOk(values) }}
            >
              <Form.Item
                label="Password"
                name="password"
                rules={[{ required: true, message: 'Please input your password!' }]}
              >
                <Input.Password />
              </Form.Item>
              <Form.Item style={{ width: "100%", margin: "auto", textAlign: "right" }}>

                <Button type="primary" htmlType="submit" className="login-form-button" shape="round" style={{ border: "none", backgroundColor: "#fe8c00", fontWeight: 500 }}>
                  Submit
                 </Button>

              </Form.Item>

            </Form>

          </Modal>
        </div>

      </div>
    );
  }
}

export default Home;
