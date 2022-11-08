// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  ENV_NAME: "dev",

  firebaseConfig: {
    apiKey: "AIzaSyDa0jpr3yOri73lSbUvPg1BiB2HbRy4PPw",
    authDomain: "edable-admin.firebaseapp.com",
    projectId: "edable-admin",
    storageBucket: "edable-admin.appspot.com",
    messagingSenderId: "285521431356",
    appId: "1:285521431356:web:9b45c22ad0da6d342c6c39",
    measurementId: "G-BC3HR6B39F"
  },
  recaptcha3SiteKey:"6LetWpUiAAAAALG0r3OrdNPXmVFV61zXEMHvI5Fh"
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
