import Reactotron from 'reactotron-react-js';
import { reactotronRedux as reduxPlugin } from 'reactotron-redux';
import sagaPlugin from 'reactotron-redux-saga';

if (process.env.NODE_ENV === 'development') {
  const tron = Reactotron
    .configure()
    .use(reduxPlugin())
    .use(sagaPlugin())
    .connect();

  tron.clear();

  console.tron = tron;
  console.display = tron;
}
