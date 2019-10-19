import { createSelector } from 'reselect';

const seletUser = state => state.user;

export const selectCurrentuser = createSelector(
  [seletUser],
  (user) => user.currentUser
)