import React, { Component } from "react"
import { Upload, notification, Modal, Form, Input, Button } from 'antd';
import { InboxOutlined } from '@ant-design/icons';

import uploadService from './../../services/uploadFile'
import { apiUploadUrl } from '../../constants'
import { FirebaseRef } from '../../lib/firebase'
import moment from 'moment'

import './index.scss'
const { Dragger } = Upload;

class Colletion extends Component {
  constructor(props) {
    super(props)
    this.state = {
      visible: true,
      source: "",
      provided: "",
      info: null,
      visible2: false,
      note: "",
      loading: false,
      arrayUpload: []
    }
    this.token = props.match.params.token
  }

  componentDidMount() {
    var myWindow = document.getElementById('window');

    myWindow.style.width = window.innerWidth + "px";
    myWindow.style.height = window.innerHeight + "px";
    window.onresize = function () {

      myWindow.style.width = window.innerWidth + "px";
      myWindow.style.height = window.innerHeight + "px";
    }
  }

  handleOk = e => {
    this.setState({
      visible: false,
    });

  };

  handleOnChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  handleUpload() {
    const { source, provided, note, info, arrayUpload } = this.state
    this.setState({
      loading: true
    })
    uploadService.uploadFile(info.file.originFileObj).then(result => {
      if (result) {
        // const ID = Math.random().toString(36).substr(2, 5);
        const uid = window.localStorage.getItem('id')
        const arg = info.file.originFileObj
        // const hostName = window.location.hostname
        // const arrayHost = hostName.split(".")

        const { ID } = result
        const dataFile = {
          "name": arg.name,
          "modified": moment().format('MMMM D, YYYY h:mm:ss A'),
          "size": arg.size,
          "link": apiUploadUrl + '/files/' + ID,
          "type": arg.type,
          "fullName": arg.name,
          "created": moment().format('MMMM D, YYYY h:mm:ss A'),
          "status": "public",
          "source": source !== "" ? source : "Not provided",
          "provided": provided !== "" ? provided : "Not provided",
          "note": note !== "" ? note : "Not provided",
          "ID": ID,
          "uid": arg.uid
        }

        const ref = FirebaseRef.child(`${uid}/files/${ID}`)
        ref.set({
          ...dataFile
        }).then(() => {
          const newData = [...arrayUpload, { ...dataFile }]
          this.setState({
            arrayUpload: newData
          })
          this.openNotificationWithIcon('success', `Action successfully`, `${info.file.name} file uploaded successfully.`)
        }
        ).catch((err) => {
          this.openNotificationWithIcon('error', `Action fail`, `${err.message}`)

        })



      }
      this.setState({
        visible2: false,
        note: '',
        loading: false
      })
    })
  }

  openNotificationWithIcon = (type, title, description) => {
    notification[type]({
      message: title,
      description: description,
    });
  };

  render() {
    const { visible, provided, source, visible2, note, loading } = this.state
    const that = this
    const props = {
      name: 'file',
      multiple: true,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange(info) {
        const { status } = info.file;
        if (status === 'done' || status === 'error') {

          // if (info) {
          //   that.handleUpload(info)
          // } else {
          that.setState({
            visible2: true,
            info: info
          })
          // }

        }

      },
      onRemove(file) {
        const { arrayUpload } = that.state
        const uid = window.localStorage.getItem('id')
        const index = arrayUpload.findIndex(item => item.uid === file.uid)
        const newArrayUpload = arrayUpload.filter(item => item.uid !== file.uid)
        if (index > -1 && arrayUpload[index].ID) {

          const ref = FirebaseRef.child(`${uid}/files/${arrayUpload[index].ID}`)
          ref.remove().then(() => {
            that.openNotificationWithIcon('success', `Action successfully`, `Remove file successfully.`)
            that.setState({
              arrayUpload: newArrayUpload
            })
          }
          ).catch((err) => {
            that.openNotificationWithIcon('error', `Action fail`, `${err.message}`)
            return false
          })
        } else {
          return false
        }

      }
    };

    return (

      <div className="App Upload">
        <div id="window" className="window">


          <div className="clearfix" />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh" }} className="container">
            {
              !visible ? (

                <div>
                  <Dragger style={{ padding: "10px" }} {...props}>
                    <p className="ant-upload-drag-icon">
                      <InboxOutlined />
                    </p>
                    <p className="ant-upload-text">Click or drag file to this area to upload</p>
                    <p className="ant-upload-hint">
                      Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                      band files
                  </p>
                  </Dragger>
                </div>

              ) : null
            }

          </div>
        </div>
        <Modal
          title="Collect information"
          visible={visible}
          onOk={this.handleOk}
          onCancel={this.handleOk}
        >
          <div className="ant-modal-confirm-body">
            <span role="img" aria-label="info-circle" className="anticon anticon-info-circle">
              <svg viewBox="64 64 896 896" focusable="false" className="anticon" data-icon="info-circle" width="1em" height="1em" fill="currentColor" aria-hidden="true">
                <path d="M512 64C264.6 64 64 264.6 64 512s200.6 448 448 448 448-200.6 448-448S759.4 64 512 64zm0 820c-205.4 0-372-166.6-372-372s166.6-372 372-372 372 166.6 372 372-166.6 372-372 372z" />
                <path d="M464 336a48 48 0 1096 0 48 48 0 10-96 0zm72 112h-48c-4.4 0-8 3.6-8 8v272c0 4.4 3.6 8 8 8h48c4.4 0 8-3.6 8-8V456c0-4.4-3.6-8-8-8z" />
              </svg>
            </span>
            <span className="ant-modal-confirm-title">To ensure quality information please provide the sender's name and address.</span>
            <div className="ant-modal-confirm-content">
              <div>
                <p>Note: this information is not required</p>

              </div>
            </div>
          </div>
          <Form layout="vertical" name="nest-messages" >

            <Form.Item label="Source from health">
              <Input onChange={(e) => {
                const { name, value } = e.target
                this.handleOnChange(name, value)
              }} name="source" value={source} />
            </Form.Item>
            <Form.Item label="Address provided">
              <Input onChange={(e) => {
                const { name, value } = e.target
                this.handleOnChange(name, value)
              }} name="provided" value={provided} />
            </Form.Item>

          </Form>
        </Modal>

        <Modal
          title="A few notes about the file if any."
          visible={visible2}
          onOk={() => { this.handleUpload() }}
          onCancel={() => { this.handleUpload() }}
          footer={[
            <Button key="back" onClick={() => { this.handleUpload() }}>
              Cancel
            </Button>,
            <Button key="submit" type="primary" loading={loading} onClick={() => { this.handleUpload() }}>
              Ok
            </Button>,
          ]}
        >
          <Form layout="vertical" name="note" >

            <Form.Item label="Note">
              <Input.TextArea rows={5} onChange={(e) => {
                const { name, value } = e.target
                this.handleOnChange(name, value)
              }} name="note" value={note} />
            </Form.Item>


          </Form>
        </Modal>


      </div>


    );
  }
}
export default Colletion;