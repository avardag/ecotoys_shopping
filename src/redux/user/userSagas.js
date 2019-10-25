import { takeLatest, put, all, call } from 'redux-saga/effects';
//user types
import userActionTypes from './userTypes';
//firebase utlis
import { auth, googleProvider, createUserProfileDocument } from '../../firebase/firebase.utils';
import { googleSigninSuccess, googleSigninFailure } from './userActions';

export function* signinWithGoogle(){
  try {
    const {user} = yield auth.signInWithPopup(googleProvider)
    const userRef = yield call(createUserProfileDocument, user)

    const userSnapshot = yield userRef.get()

    yield put(googleSigninSuccess({
      id: userSnapshot.id, //prop of DocumentSnapshot that provides doc id, i.e users id
      ...userSnapshot.data() // returns obj with all fields of document
     }))
  } catch (error) {
    yield put(googleSigninFailure(error))
  }
}

export function* onGoogleSigninStart(){
  yield takeLatest(userActionTypes.GOOGLE_SIGNIN_START, signinWithGoogle)
}

//all user sagas
export function* userSagas(){
  yield all(
    [call(onGoogleSigninStart)]
  )
}

