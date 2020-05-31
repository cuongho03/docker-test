import requestService from './request'
import { apiUploadUrl } from '../constants'

function uploadFile(file) {
  const headers = {
    'Content-Type': 'multipart/form-data',
  };

  const form = new FormData();
  form.append('uploadfile', file);
  // const data = objectToFormData({}, form);
  console.log(form, file)
  return requestService.send({
    method: 'post',
    path: apiUploadUrl,
    data: form,
    query: {},
    headers: headers
  })
}
export default {
  uploadFile
}
