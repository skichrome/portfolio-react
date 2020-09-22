## About this project

This is a portfolio App to show my profile in details, this app works with the Android backend [available Here](https://github.com/skichrome/portfolio-android). The aim of this app was not to be a full, well coded app, but it was to be a homemade portfolio app.

## Configuration

To be able to use this app, you have to add a file named `firebase.js` in `src` folder with your firebase config parameters :
```javascript

const firebase = require("firebase/app");
require("firebase/firestore");

const firebaseConfig = {
  apiKey: "api-key",
  authDomain: "project-id.firebaseapp.com",
  databaseURL: "https://project-id.firebaseio.com",
  projectId: "project-id",
  storageBucket: "project-id.appspot.com",
  messagingSenderId: "sender-id",
  appId: "app-id",
  measurementId: "G-measurement-id",
};

firebase.initializeApp(firebaseConfig);
export const database = firebase.firestore()
  .collection("portfolio")
  .doc("V1.0");

```

***

This project was bootstrapped with [Create React App](https://github.com/facebook/create-react-app).

## Builds steps

- Delete or reset old sources repository
- Clone or update your sources
- don't forget to  copy firebase credentials into src project folder
- execute `yarn install` and `yarn build` to install and create a production build of the project 