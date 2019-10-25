import userActionTypes from './userTypes';

// Google signin actions
export const googleSigninStart = ()=>({
  type: userActionTypes.GOOGLE_SIGNIN_START
})
export const SigninSuccess = (user)=>({
  type: userActionTypes.SIGNIN_SUCCESS,
  payload: user
})
export const SigninFailure = (errMessage)=>({
  type: userActionTypes.SIGNIN_FAILURE,
  payload: errMessage
})
// Email signin actions
export const emailSigninStart = (emailAndPasswordObj)=>({
  type: userActionTypes.EMAIL_SIGNIN_START,
  payload: emailAndPasswordObj
})