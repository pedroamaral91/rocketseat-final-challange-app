import { createAppContainer, createSwitchNavigator, createStackNavigator } from 'react-navigation';

import Login from '~/pages/Login';
import Signup from '~/pages/Signup';
import Home from '~/pages/Home';

const Routes = createAppContainer(
  createSwitchNavigator({
    Home,
    Login,
    Signup,
    // Logged: createStackNavigator(
    //   {
    //     Home,
    //   },
    //   {
    //     headerMode: 'none',
    //   },
    // ),
  }),
);

export default Routes;
