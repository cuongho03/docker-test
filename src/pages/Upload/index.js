/* eslint-disable no-unused-vars */
/* eslint-disable jsx-a11y/anchor-is-valid */
/* eslint-disable jsx-a11y/alt-text */
import React, { Component } from "react"
import { Upload, message, PageHeader, Breadcrumb } from 'antd';
import { InboxOutlined } from '@ant-design/icons';
import { Link } from 'react-router-dom'
import uploadService from './../../services/uploadFile'
import { apiUploadUrl } from '../../constants'
import { FirebaseRef } from '../../lib/firebase'
import moment from 'moment'
import './upload.scss';
const { Dragger } = Upload;

class UploadFile extends Component {
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
      multiple: false,
      action: 'https://www.mocky.io/v2/5cc8019d300000980a055e76',
      onChange(info) {
        const { status } = info.file;
        if (status !== 'uploading') {
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
                "link": apiUploadUrl + '/' + ID,
                "type": arg.type,
                "fullName": arg.name,
                "created": moment().format('MMMM D, YYYY h:mm:ss A'),
                "status": "private"
              }

              const ref = FirebaseRef.child(`${arrayHost[0]}/files/${ID}`)
              return ref.set({
                ...dataFile
              }).catch((err) => {
                message.error(err.message)
              })
            }
          })
        }
        if (status === 'done') {
          message.success(`${info.file.name} file uploaded successfully.`);
        } else if (status === 'error') {
          message.error(`${info.file.name} file upload failed.`);
        }
      },
    };

    return (

      <div className="App Upload">
        <div id="window" className="window">


          <div className="clearfix" />
          <div className="container">

            <PageHeader
              className="site-page-header"
              title="Upload your file"
              onBack={() => { this.props.history.push("/") }}
            >
              <Breadcrumb >
                <Breadcrumb.Item>
                  <Link to={"/"}>
                    Home
                  </Link>
                </Breadcrumb.Item>

                <Breadcrumb.Item>Upload Page</Breadcrumb.Item>
              </Breadcrumb>
              <Dragger {...props}>
                <p className="ant-upload-drag-icon">
                  <InboxOutlined />
                </p>
                <p className="ant-upload-text">Click or drag file to this area to upload</p>
                <p className="ant-upload-hint">
                  Support for a single or bulk upload. Strictly prohibit from uploading company data or other
                  band files
              </p>
              </Dragger>
            </PageHeader>
          </div>
        </div>
      </div>

    );
  }
}

export default UploadFile;
