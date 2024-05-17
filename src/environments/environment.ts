// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  //API_ENOW: 'https://api.enow.vn',
  COOKIE_DOMAIN: 'localhost',
  API_ENOW: 'https://api-main.byn.vn',
  _API_ENOW: 'https://nodejs-api-gateway.vercel.app/api-main',
  SERVER_KEY: "123456789ABCXyzsdfdsf5345345dsfDSFSDF",
  CDN_URL: 'https://cdn.byn.vn',
  _CDN_URL: 'https://nodejs-api-gateway.vercel.app/cdnbyn'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.