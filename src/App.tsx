import React from 'react';
import './App.css';
import Router from './components/Router';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';

import 'remixicon/fonts/remixicon.css'


function App() {

  const store = createStore(rootReducer);

  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
