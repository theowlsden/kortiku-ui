const express = require('express');
const path = require('path');
const app = express();

function requireHTTPS(req, res, next) {
    // The 'x-forwarded-proto' check is for Heroku
    if (!req.secure && req.get('x-forwarded-proto') !== 'https') {
        return res.redirect('https://' + req.get('host') + req.url);
    }
    next();
}

app.use(express.static(__dirname + "/dist/kortiku-ui"));
app.get('/*', function (req, res) {
    res.sendFile('index.html', { root: 'dist/kortiku-ui/' }
    );
});

app.use(requireHTTPS);
app.listen(process.env.PORT || 8080);