import React from 'react';
import './App.scss';
import Router from './components/Router';
import { createStore } from 'redux';
import rootReducer from './reducers';
import { Provider } from 'react-redux';
import { composeWithDevTools } from 'redux-devtools-extension'; // 리덕스 개발자 도구

import 'remixicon/fonts/remixicon.css'


function App() {

  const store = createStore(rootReducer, composeWithDevTools());

  return (
    <div className="App">
      <Provider store={store}>
        <Router />
      </Provider>
    </div>
  );
}

export default App;
