import { SIGN_IN, SIGN_OUT, SIGN_UP } from '../constants';
import { appData } from '../../utils/dataSchema';

export const AuthReducer = (state = appData.bio, action) => {
  switch (action.type) {
    case SIGN_UP:
      return action.bio;

    case SIGN_IN:
      return action.bio;

    case SIGN_OUT:
      return { isSignedIn: false };

    default:
      return state;
  }
};
