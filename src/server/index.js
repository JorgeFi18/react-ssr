import express from 'express';
import path from 'path';
import React from 'react';
import ReactDom from 'react-dom/server';

import App from '../client/app';

const app = express();

app.use('/static', express.static(path.join(__dirname, '..', '..', 'dist', 'static')));

app.get('/', (req, res) => {
    const root = (
        <html lang='en'>
            <head>
                <meta name="viewport" content="width=device-width, initial-scale=1.0"/>
                <link href="https://fonts.googleapis.com/css2?family=Bigelow+Rules&display=swap" rel="stylesheet"></link>
                <title>SSR App</title>
            </head>
            <body>
                <div id="root"><App /></div>

                <script src="/static/bundle.js"></script>
            </body>
        </html>
    );

    const html = ReactDom.renderToString(root);
    res.send(html);
})

app.listen(3000, () => {
    console.log('App running on port 3000')
});