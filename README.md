# React & Webpack Simple Boilerplate

_A bare-bones boilerplate for using React and SCSS (with PostCSS Autoprefixer) with Webpack._ **Work in progress**

**Has:**

- Babel
- React/ReactDOM/PropTypes
- Node SASS
- Autoprefixer
- JS and CSS minification

**To Do:**

- **[ ]** Set up testing with Jest
- **[ ]** Add workflow for images
- **[ ]** Add favicon
- **[ ]** Consider adding React Router

## Getting Started

Clone this repository

`git clone https://github.com/meowwwls/react-webpack-starter.git`

Change directories to the new cloned repository

`cd react-webpack-starter`

## Developing

### Running in Development Mode

The `npm` script for running in development mode will start up a Webpack development server with hot reloading on port `4400` unless otherwise specified.

To start the dev server, run:

`npm run dev`

A server should now be running at `http://localhost:4400`

### File Structure

#### Styles

`src/styles/main.scss` is where all of your partials should be imported. This is the only `SCSS` file that will be compiled.

For example, if you have partials for variables, resets, and the page header, the `src/styles` directory should look something like:

```
├── partials/
│   ├── _variables.scss
│   ├── _reset.scss
│   ├── _site-header.scss
├── main.scss
```

And the `src/styles/main.scss` file would look like:

```scss
@import './partials/variables';
@import './partials/reset';
@import './partials/site-header';
```

All styles are run through PostCSS Autoprefixer with default settings. If you need to add support for older browsers or only want to support the most modern browsers, consider adding a custom [Browserlist](https://github.com/postcss/autoprefixer#browsers) file.

#### JavaScript

The entry point is `src/js/index.js`. This file imports React, React DOM, our main `App` component, and our `main.scss` file and is responsible for rendering our `App`. The main app component will be in `src/js/components/App.js`.

The Webpack setup is using Babel, so ES6 and JSX will be transpiled in development and production mode.

### Production

The `clean-webpack-plugin` is used to remove the `dist` folder on compilation so the folder is always up-to-date.

To build and run in production mode with minification, run:

`npm run build`
