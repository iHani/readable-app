import React from 'react';
import ReactDOM from 'react-dom';
import AppRouter from './Routers/AppRouter';
import registerServiceWorker from './registerServiceWorker';
// import reducer from './Reducers';

ReactDOM.render(<AppRouter />,document.getElementById('root'));

registerServiceWorker();
