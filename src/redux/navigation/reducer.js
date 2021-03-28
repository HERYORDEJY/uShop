import { NAVIGATE } from '../constants';

export const NavigationReducer = (state = {}, action) => {
  switch (action.type) {
    case NAVIGATE:
      return action.navigationProps;
    default:
      return state;
  }
};
