/* Core */
import React from 'react';

/* Redux */
import { Provider } from 'react-redux';
import store from 'store';

/* Presentational */
import Header from 'pages/components/Header';
import Profile from 'pages/profile';

import './styles.css';

const App = () => (
  <Provider store={store}>
    <div className="app-container">
      <Header />
      <div className="container">
        <Profile />
      </div>
    </div>
  </Provider>
);

export default App;
