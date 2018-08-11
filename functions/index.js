var functions = require('firebase-functions')
var test = require('./dist/test.js')

exports.test = functions.https.onRequest(test);
exports.other = functions.https.onRequest(test);