import React from 'react';
import ReactDom from 'react-dom';

import App from './app';

import './index.sass';

const app = <App />;

ReactDom.hydrate(app, document.getElementById('root'));