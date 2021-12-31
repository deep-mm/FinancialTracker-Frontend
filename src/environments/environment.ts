// This file can be replaced during build by using the `fileReplacements` array.
// `ng build` replaces `environment.ts` with `environment.prod.ts`.
// The list of file replacements can be found in `angular.json`.

export const environment = {
  production: false,
  apiBaseUrl: 'https://financetracker-api.azurewebsites.net/api',
  scopeUri: ['api://28c9b16a-b573-4c7c-bb52-63c3e0a435f2/access_as_user'],  
  tenantId: 'cfe5e889-6502-44a1-9d56-9c70e5543454',
  uiClienId: '28c9b16a-b573-4c7c-bb52-63c3e0a435f2',
  redirectUrl: 'http://localhost:4200'
};

/*
 * For easier debugging in development mode, you can import the following file
 * to ignore zone related error stack frames such as `zone.run`, `zoneDelegate.invokeTask`.
 *
 * This import should be commented out in production mode because it will have a negative impact
 * on performance if an error is thrown.
 */
// import 'zone.js/plugins/zone-error';  // Included with Angular CLI.
