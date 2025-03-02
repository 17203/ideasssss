// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  firebaseConfig: {
    apiKey: "AIzaSyB1Of6wQJFJe4BSghhO9RdLS_MHUrMMNa8",
    authDomain: "proyecto-723f6.firebaseapp.com",
    projectId: "proyecto-723f6",
    storageBucket: "proyecto-723f6.firebasestorage.app",
    messagingSenderId: "116605285220",
    appId: "1:116605285220:web:b23a4de47e2d4ab2b2c071",
    measurementId: "G-9QY6DNCCLH"
  }
};
// Import the functions you need from the SDKs you need
import { initializeApp } from "firebase/app";
import { getAnalytics } from "firebase/analytics";
// TODO: Add SDKs for Firebase products that you want to use
// https://firebase.google.com/docs/web/setup#available-libraries
// Your web app's Firebase configuration
// For Firebase JS SDK v7.20.0 and later, measurementId is optional
const firebaseConfig = {
  apiKey: "AIzaSyB1Of6wQJFJe4BSghhO9RdLS_MHUrMMNa8",
  authDomain: "proyecto-723f6.firebaseapp.com",
  projectId: "proyecto-723f6",
  storageBucket: "proyecto-723f6.firebasestorage.app",
  messagingSenderId: "116605285220",
  appId: "1:116605285220:web:b23a4de47e2d4ab2b2c071",
  measurementId: "G-9QY6DNCCLH"
};

// Initialize Firebase
const app = initializeApp(firebaseConfig);
const analytics = getAnalytics(app);
/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
