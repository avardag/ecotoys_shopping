import { takeLatest, put, all, call } from 'redux-saga/effects';
//user types
import userActionTypes from './userTypes';
//firebase utlis
import { 
  auth, 
  googleProvider, 
  createUserProfileDocument, 
  getCurrentUser 
} from '../../firebase/firebase.utils';
//user actions
import { 
    SigninSuccess, 
    SigninFailure,
    signOutSuccess,
    signOutFailure,
  } from './userActions';

  //reusable generator function
export function* getSnapshotFromUserAuth(userAuth){
  try {
    const userRef = yield call(createUserProfileDocument, userAuth)

    const userSnapshot = yield userRef.get()

    yield put(SigninSuccess({
      id: userSnapshot.id, //prop of DocumentSnapshot that provides doc id, i.e users id
      ...userSnapshot.data() // returns obj with all fields of document
     }))
  } catch (error) {
    yield put(SigninFailure(error))
  }
}
//Google signin sagas
export function* signinWithGoogle(){
  try {
    const {user} = yield auth.signInWithPopup(googleProvider)
    
    yield getSnapshotFromUserAuth(user);

  } catch (error) {
    yield put(SigninFailure(error))
  }
}

export function* onGoogleSigninStart(){
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signinWithGoogle)
}
/////////////////////////////////////////////
//email signin sagas
export function* signinWithEmailAndPassword({payload: {email, password}}){
  //args is {payload: { email: "maga@gmail.com", password: "password123" },type: "EMAIL_SIGNIN_START"}
  try {
    const {user} = yield auth.signInWithEmailAndPassword(email, password)
    yield getSnapshotFromUserAuth(user)
  } catch (error) {
    yield put(SigninFailure(error))
  }
}

export function* onEmailSigninStart(){
  yield takeLatest(userActionTypes.EMAIL_SIGNIN_START, signinWithEmailAndPassword)
}

////////////////
// check user session auth

export function* isUserAuhenticated(){
  try {
    const userAuth = yield getCurrentUser();
    if(!userAuth) return; //if user is null, then return from this func
    //if there is a user value, use getSnapshotFromUserAuth saga
    yield getSnapshotFromUserAuth(userAuth)
  } catch (error) {
    yield put(SigninFailure(error))
  }
}
export function* onCheckUserSession(){
  yield takeLatest(userActionTypes.CHECK_USER_SESSION, isUserAuhenticated)
}

//user sign out sagas
export function* signOut(){
  try {
    yield auth.signOut();
    yield put(signOutSuccess())
  } catch (error) {
    yield put(signOutFailure(error))
  }
}

export function* onSignOutStart(){
  yield takeLatest(userActionTypes.SIGN_OUT_START, signOut)
}

//all user sagas
export function* userSagas(){
  yield all(
    [
      call(onGoogleSigninStart), 
      call(onEmailSigninStart),
      call(onCheckUserSession),
      call(onSignOutStart),
    ]
  )
}

