import React, { Component } from 'react'
import { withRouter } from 'react-router-dom'
import { myFirebase, myFirestore, FirebaseRef } from '../../lib/firebase'
import Loader from '../Loader'
import WelcomeBoard from '../WelcomeBoard/WelcomeBoard'
import './Main.css'
import ChatBoard from './../ChatBoard/ChatBoard'
import { AppString, supportInfo } from './../ChatBox/Const'
import userService from './../../services/member'

class Main extends Component {
  constructor(props) {
    super(props)
    this.state = {
      isLoading: true,
      isOpenDialogConfirmLogout: false,
      currentPeerUser: null
    }

    this.currentUserId = props.member.id
    this.currentUserAvatar = supportInfo.photoUrl
    this.currentUserNickname = supportInfo.nickName
    this.currentUserRole = supportInfo.role
    this.listUser = []
  }

  componentDidMount() {
    this.checkLogin()
  }

  checkLogin = () => {
    this.getListUser()
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

  getListUser = async () => {

    userService.fetchUserList().then(result => {

      if (result && Object.keys(result).length) {
        const newData = []
        console.log(result)
        Object.keys(result).forEach(key => {
          if (result[key].userType === "doctor") {
            let nickName = ''
            if (result[key].email) {
              const arrayName = result[key].email.split(".")
              const newArrayName = arrayName[0].split("@")
              nickName = newArrayName[0]
            }
            newData.push({
              ...result[key],
              id: key,
              nickname: nickName,
              photoUrl: '',
              aboutMe: result[key].email || '',
              color: this.randDarkColor()
            })
          }

          const newArray = newData.reverse()

          if (newArray.length > 0) {
            this.listUser = [...newArray]
          }

        })

      }
      this.setState({ isLoading: false })
    })
  }

  onLogoutClick = () => {
    this.setState({
      isOpenDialogConfirmLogout: true
    })
  }

  doLogout = () => {
    this.setState({ isLoading: true })
    myFirebase
      .auth()
      .signOut()
      .then(() => {
        this.setState({ isLoading: false }, () => {
          localStorage.clear()
          this.props.showToast(1, 'Logout success')
          this.props.history.push('/')
        })
      })
      .catch(function (err) {
        this.setState({ isLoading: false })
        this.props.showToast(0, err.message)
      })
  }

  hideDialogConfirmLogout = () => {
    this.setState({
      isOpenDialogConfirmLogout: false
    })
  }

  onProfileClick = () => {
    this.props.history.push('/profile')
  }

  renderListUser = () => {
    if (this.listUser.length > 0) {
      let viewListUser = []
      this.listUser.forEach((item, index) => {
        if (item.id !== this.currentUserId) {

          if (this.currentUserRole && this.currentUserRole !== '') {

            viewListUser.push(
              <button
                key={index}
                className={
                  this.state.currentPeerUser &&
                    this.state.currentPeerUser.id === item.id
                    ? 'viewWrapItemFocused'
                    : 'viewWrapItem'
                }
                onClick={() => {
                  this.setState({ currentPeerUser: item })
                }}
              >
                <div
                  className="viewAvatarItem viewAvatarItem-Second"
                  style={{ backgroundColor: item.color || 'black' }}
                >
                  {item.nickname.toUpperCase().substring(0, 1)}
                </div>
                <div className="viewWrapContentItem">
                  <span className="textItem">{`Nickname: ${
                    item.nickname
                    }`}</span>
                  <span className="textItem">{`About me: ${
                    item.aboutMe ? item.aboutMe : 'Not available'
                    }`}</span>
                </div>
              </button>
            )
          } else if (item.role) {
            viewListUser.push(
              <button
                key={index}
                className={
                  this.state.currentPeerUser &&
                    this.state.currentPeerUser.id === item.id
                    ? 'viewWrapItemFocused'
                    : 'viewWrapItem'
                }
                onClick={() => {
                  this.setState({ currentPeerUser: item })
                }}
              >
                <div
                  className="viewAvatarItem viewAvatarItem-Second"
                  style={{ backgroundColor: item.color || 'black' }}
                // src={item.photoUrl && item.photoUrl !== '' ? item.photoUrl : '/assets/img/avatar.png'}
                // alt="icon avatar"
                >
                  {item.nickname.toUpperCase().substring(0, 1)}
                </div>
                <div className="viewWrapContentItem">
                  <span className="textItem">{`Nickname: ${
                    item.nickname
                    }`}</span>
                  <span className="textItem">{`About me: ${
                    item.aboutMe ? item.aboutMe : 'Not available'
                    }`}</span>
                </div>
              </button>
            )
          }

        }
      })
      return viewListUser
    } else {
      return null
    }
  }

  render() {
    let show = true
    let showList = true
    const isMobile = window.innerWidth < 768;
    const { currentPeerUser } = this.state
    if (isMobile && !this.listUser.length) {
      show = false
    } else if (isMobile && !currentPeerUser) {
      show = false
    }

    if (isMobile && currentPeerUser) {
      showList = false
    }
    return (
      <div>

        {/* Body */}
        <div className="body">
          {showList && (
            <div className="viewListUser"> {this.renderListUser()}</div>

          )}

          {show && (
            <div className="viewBoard">
              {this.state.currentPeerUser ? (
                <ChatBoard
                  currentPeerUser={this.state.currentPeerUser}
                  showToast={this.props.showToast}
                  onBack={() => {
                    this.setState({
                      currentPeerUser: null
                    })
                  }}
                />
              ) : (
                  <WelcomeBoard
                    currentUserNickname={this.currentUserNickname}
                    currentUserAvatar={this.currentUserAvatar}
                  />
                )}
            </div>

          )}

        </div>

        {/* Dialog confirm */}
        {this.state.isOpenDialogConfirmLogout ? (
          <div className="viewCoverScreen">
            {this.renderDialogConfirmLogout()}
          </div>
        ) : null}

        {/* Loading */}
        {this.state.isLoading ? (
          <Loader show={true} />
        ) : null}
      </div>
    )
  }

  renderDialogConfirmLogout = () => {
    return (
      <div>
        <div className="viewWrapTextDialogConfirmLogout">
          <span className="titleDialogConfirmLogout">Are you sure to logout?</span>
        </div>
        <div className="viewWrapButtonDialogConfirmLogout">
          <button className="btnYes" onClick={this.doLogout}>
            YES
                    </button>
          <button className="btnNo" onClick={this.hideDialogConfirmLogout}>
            CANCEL
                    </button>
        </div>
      </div>
    )
  }
}

export default withRouter(Main)
