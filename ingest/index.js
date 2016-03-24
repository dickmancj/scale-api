'use strict';

var Ingest = require('./model').model;

exports.register = function (server, options, next) {
    server.route({
        method: 'GET',
        path: '/api/ingests/status',
        handler: function (request, reply) {
            new Ingest().fetchAll().then(function (data) {
                reply(data);
            }).catch(function (err) {
                reply(err);
            })
        }
    });

    var io = require('socket.io')(server.select('ingest').listener);

    io.on('connection', function (socket) {
        console.log('New connection!');
        socket.on('ingest', function () {
            console.log('new ingest');
        });
    });

    next();
};

exports.register.attributes = {
    name: 'ingest'
};