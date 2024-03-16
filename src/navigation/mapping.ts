import { HOME, SIGN_IN } from '~constants/screens';
import { SignInScreen } from '~features/auth';
import { HomeScreen } from '~features/home';

const userGroup = {
  [HOME]: HomeScreen,
};

const guestGroup = {
  [SIGN_IN]: SignInScreen,
};

export { guestGroup, userGroup };
