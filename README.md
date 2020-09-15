# SSR - React App

## About
This project is about a Server Side Application Using React JS served through Express Js, using Stylus as css preprocessor.

This project was not created with create-react-app, instead is build with webpack and babel.

Uses the Marvel Api as resources provider
[Marvel Developers Portal](https://developer.marvel.com/ "Marvel's Api Homepage")

## How To

### Run for development environment
```bash

# Clone repository (SSH)
git clone git@github.com:JorgeFi18/react-ssr.git

## Or Https

git clone https://github.com/JorgeFi18/react-ssr.git

# Install dependencies

npm install

# Run development server

npm run dev

```
**Note:** There is not Hot Reaload at the moment, you should refresh the page for see latest changes

## Build for Prod environment

```bash
# Clone repository (SSH)
git clone git@github.com:JorgeFi18/react-ssr.git

## Or Https

git clone https://github.com/JorgeFi18/react-ssr.git

# Install dependencies

npm install

# Build for prod 

npm run build
```

## Scripts

```bash
# Build client side for Prod
npm run build:client 

# Build server side for prod
npm run build:server

# Build both sides for prod
npm run build

# Uses webpack watch for development
npm run dev:client

# Start server with nodemon
npm run dev:server

# Initialize local server for development
npm run dev

# Run unit test suites
npm run test:unit
```

## References

- [React.js](https://reactjs.org/)
- [Stylus](https://stylus-lang.com/)
- [Express.js](http://expressjs.com/)
- [Webpack](https://webpack.js.org/)
- [Babel](https://babeljs.io/)
- [Jest](https://jestjs.io/docs/en/getting-started)