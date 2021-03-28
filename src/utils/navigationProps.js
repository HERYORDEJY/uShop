import { NavigationAction } from '../redux/navigation/actions';

export const _navigationProps = (dataProps, dispatch) => {
  dispatch(NavigationAction({ ...dataProps }));
};
