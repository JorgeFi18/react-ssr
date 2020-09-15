import React from 'react';
import ReactDom from 'react-dom';

import App from './app';

import './index.styl';

const app = <App />;

ReactDom.hydrate(app, document.getElementById('root'));