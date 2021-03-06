# Getting Started with Create React App

This React project provide a simple movie web page, with implementation of structured functional component, useEffect, useState, etc. This project will also fetch API data to display movie details.

## Study Note
> Functional component is more used nowasday, compared to class component, because it is much easier to read and test because they are plain JavaScript functions without state or lifecycle-hooks. Lesser code needed.

> There are 3 kinds of function: normal function, arrow function and named function

> JSX is used instead of html, and it is the main ui building element of react application

> Babel is used to transpire ECMAScript between version between above 2015 and below 2015

> Webpack served as Loaders and plugins.

> 'create-react-app' command is not the only way to initialize a react project. We can also use Babel and Webpack for the same task.

> In React, everything was wrap in react fragment, example: '<> </>'

> UseEffect and useState are some popular use of Hook

> While using useEffect, never mutate state manually, but using their setter function

> UseEffect is used to listen events or changes, and carry out any desired action.

## Directory Explanation
Inside directory src, the project has been structured into few directories.

### `assets`
Stored raw assets like svg file, sound file, video file, etc.

### `components`
All functional JSX components will stored here. (for simple single page application, may be futher divided number of pages are becoming higher)

### `css`
stored any css file

### `utils`
stored any helper class or function, that is more likely to be used in more than on page of the application

## Available Scripts

In the project directory, you can run:

### `npm start`

Runs the app in the development mode.\
Open [http://localhost:3000](http://localhost:3000) to view it in your browser.

The page will reload when you make changes.\
You may also see any lint errors in the console.

### `npm test`

Launches the test runner in the interactive watch mode.\
See the section about [running tests](https://facebook.github.io/create-react-app/docs/running-tests) for more information.

### `npm run build`

Builds the app for production to the `build` folder.\
It correctly bundles React in production mode and optimizes the build for the best performance.

The build is minified and the filenames include the hashes.\
Your app is ready to be deployed!

See the section about [deployment](https://facebook.github.io/create-react-app/docs/deployment) for more information.

### `npm run eject`

**Note: this is a one-way operation. Once you `eject`, you can't go back!**

If you aren't satisfied with the build tool and configuration choices, you can `eject` at any time. This command will remove the single build dependency from your project.

Instead, it will copy all the configuration files and the transitive dependencies (webpack, Babel, ESLint, etc) right into your project so you have full control over them. All of the commands except `eject` will still work, but they will point to the copied scripts so you can tweak them. At this point you're on your own.

You don't have to ever use `eject`. The curated feature set is suitable for small and middle deployments, and you shouldn't feel obligated to use this feature. However we understand that this tool wouldn't be useful if you couldn't customize it when you are ready for it.

