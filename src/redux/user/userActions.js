import userActionTypes from './userTypes';

export const setCurrentUser = (user) =>{
  return {
    type: userActionTypes.SET_CURRENT_USER,
    payload: user
  }
}
// Google signin actions
export const googleSigninStart = ()=>({
  type: userActionTypes.GOOGLE_SIGNIN_START
})
export const googleSigninSuccess = (user)=>({
  type: userActionTypes.GOOGLE_SIGNIN_SUCCESS,
  payload: user
})
export const googleSigninFailure = (errMessage)=>({
  type: userActionTypes.GOOGLE_SIGNIN_FAILURE,
  payload: errMessage
})
// Email signin actions
export const emailSigninStart = (emailAndPasswordObj)=>({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPasswordObj
})
export const emailSigninSuccess = (user)=>({
  type: userActionTypes.EMAIL_SIGNIN_SUCCESS,
  payload: user
})
export const emailSigninFailure = (errMessage)=>({
  type: userActionTypes.EMAIL_SIGNIN_FAILURE,
  payload: errMessage
})