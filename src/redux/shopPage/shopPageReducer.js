import shopActionTypes from './shopTypes';

const INITIAL_STATE = {
  collections: null,
  isFetching: false,
  errorMessage: '',
};

const shopPageReducer = (state=INITIAL_STATE, action)=>{
  switch (action.type) {
    case shopActionTypes.FETCH_COLLECTIONS_START:
      return {
        ...state,
        isFetching: true
      }
    case shopActionTypes.FETCH_COLLECTIONS_SUCCESS:
      return {
        ...state,
        isFetching: false,
        collections: action.payload
      }
    case shopActionTypes.FETCH_COLLECTIONS_ERROR:
      return {
        ...state,
        isFetching: false,
        errorMessage: action.payload
      }
    default:
      return state;
  }
}

export default shopPageReducer;