var Controller = require('./controller');

exports.endpoints = [
    {
        method: 'GET',
        path: '/api/ingests/status/',
        config: Controller.getIngestsStatus
    }
    //{
    //    method: 'POST',
    //    path: '/api/list',
    //    config: Controller.saveList
    //}
];