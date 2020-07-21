import React, { Component } from "react"
import { Upload, message, notification, Modal, Button, Form, Input, } from 'antd';
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
      visible: false,
      source: "",
      provided: "",
      fileNow: null,

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
  showModal = () => {
    this.setState({
      visible: true,
    });
  };

  handleOk = e => {
    const { fileNow } = this.state
    this.setState({
      visible: false,
    });
    this.handleUpload(fileNow)
  };


  handleOnChange(name, value) {
    this.setState({
      [name]: value
    })
  }

  handleUpload(info) {
    const { source, provided } = this.state
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
          "provided": provided !== "" ? provided : "Not provided"
        }

        const ref = FirebaseRef.child(`${uid}/files/${ID}`)
        ref.set({
          ...dataFile
        }).catch((err) => {
          message.error(err.message)
        })
        message.success(`${info.file.name} file uploaded successfully.`);
      }
    })
  }

  render() {
    const { visible, provided, source, fileNow } = this.state
    const that = this
    const props = {
      name: 'file',
      multiple: true,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange(info) {
        const { status } = info.file;
        if (status === 'done' || status === 'error') {

          if (fileNow) {
            that.handleUpload(info)
          } else {
            that.setState({
              visible: true,
              fileNow: info
            })
          }

        }

      },
    };

    return (

      <div className="App Upload">
        <div id="window" className="window">


          <div className="clearfix" />
          <div style={{ display: 'flex', justifyContent: 'center', alignItems: 'center', height: "100vh" }} className="container">

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

      </div>


    );
  }
}
export default Colletion;