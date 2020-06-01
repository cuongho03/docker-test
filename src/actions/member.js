

import { USER_DETAILS_UPDATE, USER_LOGIN, USER_RESET } from '../constants/memberTypes'
import store from '../store'
import serviceUser from "../services/member"
/**
  * Sign Up to Firebase
  */
export function signUp(formData) {
  const { email, password } = formData
  const data = {
    email,
    password,
    publicKey: email
  }
  return new Promise(async (resolve, reject) => {
    serviceUser.signUp(data).then(result => {
      console.log(result)
      if (result) {
        store.dispatch({
          type: USER_DETAILS_UPDATE, data: {
            ...data,
            id: "test",
            token: "test"
          }
        })
        return resolve({ isSuccess: true })
      } else {

        return resolve({ isSuccess: false, err: "Something was wrong!" })
      }
    })
  })
}

/**
  * Login to Firebase with Email/Password
  */
export function login(formData) {
  const { email, password } = formData
  const data = {
    email,
    password,
    publicKey: email
  }
  return new Promise(async (resolve, reject) => {
    serviceUser.Login(data).then(result => {
      if (result) {
        store.dispatch({
          type: USER_LOGIN, data: {
            ...data,
            id: "test",
            token: "test"
          }
        })
        return resolve({ isSuccess: true })
      } else {

        return resolve({ isSuccess: false, err: "Something was wrong!" })
      }

    })
  })


}

/**
  * Reset Password
  */
export function resetPassword(formData) {
  const { email } = formData


}

