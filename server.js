'use strict';

var Hapi = require('hapi');
var server = new Hapi.Server();

server.connection({ host: '127.0.0.1', port: 8080, labels: ['api'] });
server.connection({ host: '127.0.0.1', port: 8081, labels: ['ingest'] });

server.register([
    {
        register: require('./ingest'),
        options: {}
    }
], function (err) {
    if (err) {
        console.log(err);
    } else {
        server.start(function () {
            console.log('Server running');
        });
    }
});