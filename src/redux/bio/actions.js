import { SIGN_IN, SIGN_OUT, SIGN_UP } from '../constants';
import { appData } from '../../utils/dataSchema';
import { useSelector } from 'react-redux';
//
export const SignUpAction = (data) => {
  return {
    type: SIGN_UP,
    bio: {
      ...data,
    },
  };
};

export const SignInAction = (data) => {
  return {
    type: SIGN_IN,
    bio: {
      ...data,
    },
  };
};

export const SignOutAction = () => {
  return {
    type: SIGN_OUT,
    // bio: {
    //   id: '',
    //   fullname: '',
    //   email: '',
    //   password: '',
    //   avatar: '',
    //   occupation: '',
    //   isSignedIn: false,
    // },
    // bio: {...appData}
  };
};
