import React from 'react';
import { View, Text } from 'react-native';
import '~/config/ReactotronConfig';

import { Provider } from 'react-redux';
import store from '~/store';

const App = () => (
  <Provider store={store}>
    <View>
      <Text>Hello World!</Text>
    </View>
  </Provider>
);

export default App;
