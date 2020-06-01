import {
  add,
} from './index'
const url = "http://54.177.37.24:8000/api/users";


function signUp(data) {
  const path = url
  return add(path, data)
}

function Login(data) {
  const path = url
  return add(path, data)
}

export default {
  signUp,
  Login
}

