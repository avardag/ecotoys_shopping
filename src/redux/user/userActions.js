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

//persist user auth
export const checkUserSession = ()=>({
  type: userActionTypes.CHECK_USER_SESSION
})

//user sign out actions
export const signOutStart = ()=>({
  type: userActionTypes.SIGN_OUT_START
})
export const signOutSuccess = ()=>({
  type: userActionTypes.SIGN_OUT_SUCCESS
})
export const signOutFailure = (error)=>({
  type: userActionTypes.SIGN_OUT_FAILURE,
  payload: error
})

//user SignUp actions
export const signUpStart = (newUserDataObj)=>({
  type: userActionTypes.SIGN_UP_START,
  payload: newUserDataObj
})
export const signUpSuccess = (user)=>({
    type: userActionTypes.SIGN_UP_SUCCESS,
    payload: user
  })
export const signUpFailure = (error)=>({
  type: userActionTypes.SIGN_UP_FAILURE,
  payload: error
})