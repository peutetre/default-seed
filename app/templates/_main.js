/* main.js - main entry point from <%= appName %> */

'use strict';

function main() {
    alert('app <%= appName %> is ready!');
}

window.document.addEventListener(window.Codova ? 'deviceready' : 'DOMContentLoaded', main, false);
