import { NAVIGATE } from '../constants';

export const NavigationAction = (navigationProps) => {
  return {
    type: NAVIGATE,
    navigationProps: navigationProps,
  };
};
