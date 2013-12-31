/* main.js - main entry point from <%= appName %> */

'use strict';

var context = window.cordova ? 'webview' : 'browser';

function main() {
    window.alert('app <%= appName %> is ready!\n Current execution context: ' + context);
}

window.document.addEventListener(window.cordova ? 'deviceready' : 'DOMContentLoaded', main, false);
