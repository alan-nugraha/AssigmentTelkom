import {NavigationContainer} from '@react-navigation/native';
import React from 'react';
import {Provider} from 'react-redux';
import configureStore from './src/redux/store';
import Router from './src/routes';

const MainApp = () => {
  return (
    <NavigationContainer>
      <Router />
    </NavigationContainer>
  );
};

const App = () => {
  return (
    <Provider store={configureStore()}>
      <MainApp />
    </Provider>
  );
};

export default App;
