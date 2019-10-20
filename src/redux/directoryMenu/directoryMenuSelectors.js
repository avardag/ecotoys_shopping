import { createSelector } from 'reselect';

const selectDirectoryMenu = state => state.directoryMenu;

export const selectDirectoryMenuSections = createSelector(
  [selectDirectoryMenu],
  (directoryMenu)=> directoryMenu.sections
)