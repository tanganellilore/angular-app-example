const app_t = require('./frontend/dist/angular-starter/server/main.js').app();
app_t.enable('trust proxy');
app_t.use((req, res, next) => {
    if (req.secure) {
        next();
    } else {
        res.redirect('https://' + req.headers.host + req.url);
    }
});

module.exports = app_t;
