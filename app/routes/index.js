'use strict';

var parseDate = require(process.cwd() + '/app/controllers/parseDate.server.js');

module.exports = function (app) {

    app.route('/')
        .get(function(req, res) {
            res.sendFile(process.cwd() + '/public/index.html');
        });

    app.route('/:date')
        .get(function (req, res) {
            res.json(parseDate(req.params.date));
        });
};