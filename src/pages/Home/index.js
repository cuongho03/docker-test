/* eslint-disable no-mixed-operators */
/* eslint-disable jsx-a11y/iframe-has-title */
/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from 'react';
import { Modal, Form, Input, Button, message, Select, Popconfirm, Tooltip } from 'antd';
import { FirebaseRef } from '../../lib/firebase'
import Box from '../../components/Drag/box';
import Dustbin from '../../components/Drag/dustbin'
import Lightbox from 'react-image-lightbox';
import { DndProvider } from 'react-dnd'
import { HTML5Backend } from 'react-dnd-html5-backend'
import userService from './../../services/member'
import serviceMail from './../../services/sendmail'
import { PlusOutlined, MinusOutlined } from '@ant-design/icons';
import moment from 'moment'
import './home.scss'
import 'react-image-lightbox/style.css';
const { Option } = Select;
const { TextArea } = Input;
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
      toggle: true,
      isOpenPrivate: false,
      photoIndexPrivate: 0,
      isOpenPublic: false,
      photoIndexPublic: 0,
      itemEdit: {},
      showEdit: false,
      accessLog: false,
      emailLink: false,
      userList: [],
      userShare: null,
      showAdd: false,
      description: '',
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
  fetchUserList() {
    userService.fetchUserList().then(result => {

      if (result && Object.keys(result).length) {
        const newData = []
        Object.keys(result).forEach(key => {
          const newItem = {
            id: key,
            ...result[key]
          }
          if (newItem.userType === "doctor") {
            newData.push(newItem)
          }

        })
        this.setState({
          userList: newData
        })
      }
    })
  }
  fetchData() {
    const hostName = window.location.hostname
    const arrayHost = hostName.split(".")
    let ref = FirebaseRef.child(`${arrayHost[0]}/files`)
    ref.on('value', snapshot => {
      const data = snapshot.val()
      if (data && typeof (data) === 'object') {
        let newData = []
        Object.keys(data).forEach(key => {
          newData.push({
            ...data[key],
            id: key,
            type2: data[key].type
          })
        })
        const newArray = newData.reverse()

        this.setState({ data: newArray })
      }
    })

    this.fetchUserList()

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
    // var aboutOverlay = document.getElementById('about-overlay');
    // aboutOverlay.style.transform = "scale(1)";
    // document.getElementById('a5').style.display = "block";
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

  handleDrag(data) {
    const hostName = window.location.hostname
    const arrayHost = hostName.split(".")
    data.status = 'share'
    data.type = data.type2
    const ref = FirebaseRef.child(`${arrayHost[0]}/files/${data.id}`).set({
      ...data
    }).catch((err) => {
      message.error(err.message)
    })
  }

  onConfirm(data) {
    const hostName = window.location.hostname
    const arrayHost = hostName.split(".")
    const ref = FirebaseRef.child(`${arrayHost[0]}/files/${data.id}`)

    ref.remove().then(() => {

      message.success(`${data.name} is been removed successfully!`)
    }).catch(err => {
      message.error(err.message)
    })
  }

  onEdit(data) {
    this.setState({
      showEdit: true,
      itemEdit: data
    })
  }

  handleEditFile(itemEdit) {
    const hostName = window.location.hostname
    const arrayHost = hostName.split(".")

    const ref = FirebaseRef.child(`${arrayHost[0]}/files/${itemEdit.id}`).set({
      ...itemEdit,

    }).then(() => {
      this.setState({
        showEdit: false
      })
      message.success(`${itemEdit.name} is been updated successfully`)
    }).catch((err) => {
      message.error(err.message)
    })

  }

  onShare(item) {
    this.handleEmailLink(true)
    this.setState({
      itemEdit: item
    })
  }

  handleAccessLog(value) {
    this.setState({
      accessLog: value
    })
  }

  handleEmailLink(value) {
    this.setState({
      emailLink: value
    })
  }

  handleSendMail(Subject, Message, from, to) {
    const data = {
      from,
      to,
      subject: Subject,
      html: Message
    }
    serviceMail.sendMail(data).then(() => {
    })
  }

  randDarkColor() {
    var lum = -0.25;
    var hex = String('#' + Math.random().toString(16).slice(2, 8).toUpperCase()).replace(/[^0-9a-f]/gi, '');
    if (hex.length < 6) {
      hex = hex[0] + hex[0] + hex[1] + hex[1] + hex[2] + hex[2];
    }
    var rgb = "#",
      c, i;
    for (i = 0; i < 3; i++) {
      c = parseInt(hex.substr(i * 2, 2), 16);
      c = Math.round(Math.min(Math.max(0, c + (c * lum)), 255)).toString(16);
      rgb += ("00" + c).substr(c.length);
    }
    return rgb;
  }

  render() {
    const { titleFolder, data, isPublic, privacyShow, photoIndexPublic, photoIndexPrivate, isOpenPrivate, isOpenPublic, toggle, showEdit, itemEdit, userShare, userList, emailLink, showAdd, description } = this.state
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
    console.log(userList)
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
                  <div onClick={() => { this.props.history.push("/live-chat") }} className="col-xs-1-me">
                    <div className="icon-bottom">
                      <i className="fa fa-commenting-o fa-2x" />
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
                      <i className="fa fa-lock fa-2x" />
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
          <DndProvider backend={HTML5Backend} >
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
                      <i class="fa fa-lock fa-4" aria-hidden="true" data-toggle="tooltip" data-placement="top" title="Private files"></i>
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
                                publicData.map((item, index) => (
                                  <Box onEdit={(data) => this.onEdit(data)} onConfirm={(data) => this.onConfirm(data)} onClick={() => this.setState({ isOpenPublic: true, photoIndexPublic: index })} item={item} />

                                ))
                              ) : (
                                  privateData.map((item, index) => (
                                    <Box onEdit={(data) => this.onEdit(data)} onConfirm={(data) => this.onConfirm(data)} onClick={() => this.setState({ isOpenPrivate: true, photoIndexPrivate: index })} item={item} />


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
                  <Dustbin onChange={(data) => {

                    this.handleDrag(data)
                  }}>
                    <div className={`${shareData.length % 2 > 10 ? "col-xs-4" : "col-xs-8"} third-column`}>

                      <div className="row">
                        {
                          shareData.map((item, index) => {

                            if (index < lengthData) {

                              if (index === 0) {

                                return (
                                  <div className="col-xs-4 box">
                                    <div className="box-style">
                                      <div className="icon-bottom text-center" >
                                        {item.type === 'image/png' || item.type === 'image/jpeg' || item.type === 'image/jpg' ? (
                                          <img className="media-object" src={item.link} width={175} height={65} alt="" />
                                        ) : (<i style={{ marginTop: "20px" }} className="fa fa-file-o fa-2x" />)}


                                      </div>
                                      <div className="drag__box">
                                        <small className="media-heading drag__box__name">{item.name}</small>
                                        <div className="drag__box__action">
                                          <div data-toggle="tooltip" data-placement="top" title={"Share"} onClick={() => {
                                            this.onShare(item)
                                          }}>
                                            <i class="fa fa-share-square-o" aria-hidden="true"></i>
                                          </div>
                                          <div data-toggle="tooltip" data-placement="top" title={"Edit"} onClick={() => {
                                            this.onEdit(item)
                                          }}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                                          <Popconfirm
                                            title="Are you sure delete this item?"
                                            onConfirm={() => { this.onConfirm(item) }}
                                            okText="Yes"
                                            cancelText="No"
                                          >
                                            <div data-toggle="tooltip" data-placement="top" title={"Remove"} >
                                              <i class="fa fa-trash" aria-hidden="true"></i>
                                            </div>
                                          </Popconfirm>

                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                )

                              } else if (index === 1) {
                                return (
                                  <div className="col-xs-8 box">
                                    <div className="box-style text-center">
                                      <div className="icon-bottom text-center" >
                                        {item.type === 'image/png' || item.type === 'image/jpeg' || item.type === 'image/jpg' ? (
                                          <img className="media-object" src={item.link} width={390} height={65} alt="" />
                                        ) : (<i style={{ marginTop: "20px" }} className="fa fa-file-o fa-2x" />)}

                                      </div>
                                      <div className="drag__box">
                                        <small className="media-heading drag__box__name">{item.name}</small>
                                        <div className="drag__box__action">
                                          <div data-toggle="tooltip" data-placement="top" title={"Share"} onClick={() => {
                                            this.onShare(item)
                                          }}>
                                            <i class="fa fa-share-square-o" aria-hidden="true"></i>
                                          </div>
                                          <div data-toggle="tooltip" data-placement="top" title={"Edit"} onClick={() => {
                                            this.onEdit(item)
                                          }}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                                          <Popconfirm
                                            title="Are you sure delete this item?"
                                            onConfirm={() => { this.onConfirm(item) }}
                                            okText="Yes"
                                            cancelText="No"
                                          >
                                            <div data-toggle="tooltip" data-placement="top" title={"Remove"} >
                                              <i class="fa fa-trash" aria-hidden="true"></i>
                                            </div>
                                          </Popconfirm>

                                        </div>
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
                                        {item.type === 'image/png' || item.type === 'image/jpeg' || item.type === 'image/jpg' ? (
                                          <img className="media-object" src={item.link} width={390} height={65} alt="" />
                                        ) : (<i style={{ marginTop: "20px" }} className="fa fa-file-o fa-2x" />)}
                                      </div>
                                      <div className="drag__box">
                                        <small className="media-heading drag__box__name">{item.name}</small>
                                        <div className="drag__box__action">
                                          <div data-toggle="tooltip" data-placement="top" title={"Share"} onClick={() => {
                                            this.onShare(item)
                                          }}>
                                            <i class="fa fa-share-square-o" aria-hidden="true"></i>
                                          </div>
                                          <div data-toggle="tooltip" data-placement="top" title={"Edit"} onClick={() => {
                                            this.onEdit(item)
                                          }}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                                          <Popconfirm
                                            title="Are you sure delete this item?"
                                            onConfirm={() => { this.onConfirm(item) }}
                                            okText="Yes"
                                            cancelText="No"
                                          >
                                            <div data-toggle="tooltip" data-placement="top" title={"Remove"} >
                                              <i class="fa fa-trash" aria-hidden="true"></i>
                                            </div>
                                          </Popconfirm>

                                        </div>
                                      </div>

                                    </div>
                                  </div>
                                )
                              } else {
                                return (
                                  <div className="col-xs-4 box">
                                    <div className="box-style">
                                      <div className="icon-bottom text-center" >
                                        {item.type === 'image/png' || item.type === 'image/jpeg' || item.type === 'image/jpg' ? (
                                          <img className="media-object" src={item.link} width={175} height={65} alt="" />
                                        ) : (<i style={{ marginTop: "20px" }} className="fa fa-file-o fa-2x" />)}

                                      </div>
                                      <div className="drag__box">
                                        <small className="media-heading drag__box__name">{item.name}</small>
                                        <div className="drag__box__action">
                                          <div data-toggle="tooltip" data-placement="top" title={"Share"} onClick={() => {
                                            this.onShare(item)
                                          }}>
                                            <i class="fa fa-share-square-o" aria-hidden="true"></i>
                                          </div>
                                          <div data-toggle="tooltip" data-placement="top" title={"Edit"} onClick={() => {
                                            this.onEdit(item)
                                          }}><i class="fa fa-pencil-square-o" aria-hidden="true"></i></div>
                                          <Popconfirm
                                            title="Are you sure delete this item?"
                                            onConfirm={() => { this.onConfirm(item) }}
                                            okText="Yes"
                                            cancelText="No"
                                          >
                                            <div data-toggle="tooltip" data-placement="top" title={"Remove"} >
                                              <i class="fa fa-trash" aria-hidden="true"></i>
                                            </div>
                                          </Popconfirm>

                                        </div>
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
                  </Dustbin>

                </div>
              </div>
            </div>
          </DndProvider>
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
        {
          isOpenPublic && (
            <Lightbox
              // toolbarButtons={[<a download href={publicData[photoIndexPublic] && publicData[photoIndexPublic].link ? publicData[photoIndexPublic].link : ""}><Button onClick={() => this.setState({ photoIndexPublic: false })}>Download</Button></a>]}
              // discourageDownloads={true}
              mainSrc={publicData[photoIndexPublic] && publicData[photoIndexPublic].link && (publicData[photoIndexPublic].type === 'image/png' || publicData[photoIndexPublic].type === 'image/jpeg' || publicData[photoIndexPublic].type === 'image/jpg') ? publicData[photoIndexPublic].link : "https://i.ibb.co/d5pWRyG/file-img.png"}
              // nextSrc={publicData[(photoIndexPublic + 1) % publicData.length].link}
              // prevSrc={publicData[(photoIndexPublic + publicData.length - 1) % publicData.length].link}
              onCloseRequest={() => this.setState({ isOpenPublic: false })}
            // onMovePrevRequest={() =>
            //   this.setState({
            //     photoIndex: (photoIndexPublic + publicData.length - 1) % publicData.length,
            //   })
            // }
            // onMoveNextRequest={() =>
            //   this.setState({
            //     photoIndex: (photoIndexPublic + 1) % publicData.length,
            //   })
            // }
            />
          )
        }

        {
          isOpenPrivate && (
            <Lightbox
              // toolbarButtons={[<a download href={privateData[photoIndexPrivate] && privateData[photoIndexPrivate].link ? privateData[photoIndexPrivate].link : ""}><Button onClick={() => this.setState({ photoIndexPrivate: false })}>Download</Button></a>]}
              // discourageDownloads={true}
              mainSrc={privateData[photoIndexPrivate] && privateData[photoIndexPrivate].link && (privateData[photoIndexPrivate].type === 'image/png' || privateData[photoIndexPrivate].type === 'image/jpeg' || privateData[photoIndexPrivate].type === 'image/jpg') ? privateData[photoIndexPrivate].link : "https://i.ibb.co/d5pWRyG/file-img.png"}
              // nextSrc={privateData[(photoIndexPrivate + 1) % privateData.length].link}
              // prevSrc={privateData[(photoIndexPrivate + privateData.length - 1) % privateData.length].link}
              onCloseRequest={() => this.setState({ isOpenPrivate: false })}
            // onMovePrevRequest={() =>
            //   this.setState({
            //     photoIndex: (photoIndexPrivate + privateData.length - 1) % privateData.length,
            //   })
            // }
            // onMoveNextRequest={() =>
            //   this.setState({
            //     photoIndex: (photoIndexPrivate + 1) % privateData.length,
            //   })
            // }
            />
          )
        }

        <Modal
          title="Edit"
          visible={showEdit}

          footer={[
            <Button key="back" onClick={() => {
              this.setState({
                showEdit: false
              })
            }}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" style={{ border: "none", backgroundColor: "#fe8c00", fontWeight: 500 }} onClick={() => {
              this.handleEditFile(itemEdit)
            }}>
              Save
            </Button>,
          ]}
        >
          <Form.Item
            label="Name"
          >
            <Input onChange={(e) => {
              this.setState({
                itemEdit: {
                  ...itemEdit,
                  name: e.target.value
                }
              })
            }} value={itemEdit.name || ""} />
          </Form.Item>
          <Form.Item
            label="Status"
          >
            <Select onChange={(value) => {
              this.setState({
                itemEdit: {
                  ...itemEdit,
                  status: value
                }
              })
            }} value={itemEdit.status || "private"} style={{ width: "100%" }} >
              <Option value="private">Lock</Option>
              <Option value="public">Public</Option>
              <Option value="share">Share</Option>
            </Select>
          </Form.Item>
        </Modal>

        <Modal
          title=""
          closable={false}
          style={{ top: 0 }}
          visible={emailLink}
          footer={[
            <Button style={{ fontWeight: 500 }} size="small" onClick={() => this.handleEmailLink(false)}>
              Close
            </Button>,
            <Button className="button__share" style={{ border: "none", backgroundColor: "#fe8c00", fontWeight: 500 }} size="small" onClick={() => {
              if (userShare && userShare !== "") {

                const key = FirebaseRef.push().getKey()
                const ref = FirebaseRef.child(`/notifyDocter/${key}`)
                const hostName = window.location.hostname
                const arrayHost = hostName.split(".")
                ref.set({
                  description,
                  status: "pending",
                  userShare,
                  patientName: arrayHost[0],
                  file: itemEdit,
                  email: window.localStorage.getItem('email'),
                  userId: window.localStorage.getItem('id'),
                  color: this.randDarkColor(),
                  nickname: arrayHost[0],
                  aboutMe: '',
                  created: moment().format(),
                  updated: moment().format(),
                })

                userService.connectionsUsers({ connection: { to: userShare } }).then(result => {
                  if (result) {
                    message.success(`File was shared!`)
                    this.handleEmailLink(false)
                    this.setState({
                      userShare: null,
                      description: ''
                    })
                  } else {
                    message.error(`Something was wrong!`)
                  }
                })
              } else {
                message.warn("Please select your docter mail!")
              }
            }}>
              Share
              </Button>
          ]}

        >
          <div className="recents__cotent">
            <div className="recents__cotent__item recents__cotent__item-version " ><strong>Select your email provider</strong></div>
            <Select
              showSearch
              style={{ width: "100%", marginBottom: "20px" }}
              placeholder="Select a person"

              onChange={value => {

                this.setState({
                  userShare: value
                })
              }}

              value={userShare}
              filterOption={(input, option) =>
                option.children.toLowerCase().indexOf(input.toLowerCase()) >= 0
              }
            >
              {userList.map(item => (
                <Option key={item.id} value={item.id}>{item.email}</Option>

              ))}
            </Select>
            <TextArea value={description} placeholder="Description" onChange={(e) => {
              const { value } = e.target
              this.setState({
                description: value
              })
            }} />
            <div style={{ marginTop: "20px" }} className="recents__cotent__item  recents__cotent__item__author">
              Do you want to add more docter ?
             &nbsp;
            <Tooltip title="Add your docter and Save for share your file ?">
                <Button onClick={() => {
                  this.setState({
                    showAdd: !showAdd
                  })
                }} style={{ border: "none", backgroundColor: "#fe8c00", fontWeight: 500 }} type="primary" shape="circle" icon={!showAdd ? <PlusOutlined /> : <MinusOutlined />} size={'large'} />
              </Tooltip>
            </div>
            {showAdd ? (
              <Form
                onFinish={(values) => {
                  let password = Math.random().toString(36).substring(8);
                  userService.signUp({
                    user:
                      { email: values.email, password, publicKey: values.email, userType: "doctor" }
                  }).then(result => {
                    if (result) {
                      const ref = FirebaseRef.child(`/docter/${password}`)
                      const { user } = result
                      const hostName = window.location.hostname
                      const arrayHost = hostName.split(".")
                      return ref.set({
                        email: values.email,
                        userType: "doctor",
                        status: "pending",
                        name: values.name,
                        patientName: arrayHost[0]
                      }).then(() => {
                        message.success("Add email docter successfully!")
                        const subject = `Docter's ${values.name} was created in Gency Health at ${moment().format('ll')} by ${arrayHost[0]}.`
                        const content = `Please check and Create page web for docter ${values.name} in <a href="https://www.genchealth.com/" tagert="blank">https://www.genchealth.com/</a>`

                        this.handleSendMail(subject, content, 'support@gencyhealth.network', ['philiptranp@gmail.com', 'cuongseven789@gmail.com'])
                        this.setState({
                          showAdd: false,
                          userShare: user._id
                        }, () => {
                          this.fetchUserList()
                        })
                      }).catch((err) => {
                        message.error(err.message)
                      })
                    } else {
                      message.error("Something was wrong")
                    }
                  })


                }}
              >
                <Form.Item name={'name'} label="Name" rules={[{
                  required: true,
                  message: "Please input docter's name",
                },]}>
                  <Input />
                </Form.Item>
                <Form.Item name={'email'} label="Email" rules={[
                  {
                    type: 'email',
                    message: 'The input is not valid E-mail!',
                  },
                  {
                    required: true,
                    message: 'Please input your E-mail!',
                  },
                ]}>
                  <Input />
                </Form.Item>
                <Form.Item >
                  <Button type="primary" htmlType="submit" className="login-form-button" shape="round" style={{ border: "none", backgroundColor: "#fe8c00", fontWeight: 500 }}>
                    Add docter
                  </Button>

                </Form.Item>
              </Form>
            ) : null}



          </div>
        </Modal>

      </div>
    );
  }
}

export default Home;
