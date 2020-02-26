## Github User Finder
[![Build Status](https://travis-ci.org/onyegood/react-redux-saga-code-sample.svg?branch=master)](https://travis-ci.org/onyegood/react-redux-saga-code-sample)

Github user finder is a simple web app that search for any Github user by their username and return his/her repositories and when click on any of the repository it return all branches for that repository.
[![Watch Video](github-user-finder.gif)](https://www.youtube.com/watch?v=tWNexymJ4LU&feature=youtu.be)

## Getting started

```
    $ git clone https://github.com/onyegood/react-redux-saga-code-sample.git
    $ cd react-redux-saga-code-sample.
    $ yarn install
    $ yarn start
```

## Design Decisions

### No submit button
API requests are debounced while the user is typing their keywords. The overhead for an extra click is not required by the user to perform a search.

## Unit Test.
Unit test was implemented with Jest and Enzyme

## Available Scripts

In the project directory, you can run:

### `yarn start`

Runs the app in the development mode.<br>
Open [http://localhost:3000](http://localhost:3000) to view it in the browser.

The page will reload if you make edits.<br>

### `yarn test`

Launches the test runner in the interactive watch mode.<br>