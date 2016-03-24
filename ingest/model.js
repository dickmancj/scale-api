'use strict';

var bookshelf = require('../bookshelf').bookshelf;

exports.model = bookshelf.Model.extend({
    tableName: 'ingest'
});