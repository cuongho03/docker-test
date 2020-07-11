import React, { Component } from "react"
import { Upload, message } from 'antd';
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

  render() {
    const props = {
      name: 'file',
      multiple: true,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange(info) {
        const { status } = info.file;
        if (status === 'done' || status === 'error') {
          uploadService.uploadFile(info.file.originFileObj).then(result => {
            if (result) {
              // const ID = Math.random().toString(36).substr(2, 5);
              const arg = info.file.originFileObj
              const hostName = window.location.hostname
              const arrayHost = hostName.split(".")
              const { ID } = result
              const dataFile = {
                "name": arg.name,
                "modified": moment().format('MMMM D, YYYY h:mm:ss A'),
                "size": arg.size,
                "link": apiUploadUrl + '/files/' + ID,
                "type": arg.type,
                "fullName": arg.name,
                "created": moment().format('MMMM D, YYYY h:mm:ss A'),
                "status": "public"
              }

              const ref = FirebaseRef.child(`${arrayHost[0]}/files/${ID}`)
              ref.set({
                ...dataFile
              }).catch((err) => {
                message.error(err.message)
              })
              message.success(`${info.file.name} file uploaded successfully.`);
            }
          })
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
      </div>


    );
  }
}
export default Colletion;