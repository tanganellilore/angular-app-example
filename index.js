const app_t = require('./frontend/dist/angular-starter/server/main.js').app();
app_t.enable('trust proxy');
module.exports = app_t;
