/*!
 * paranoik
 * Copyright(c) 2019 Guillermo Quinteros
 * MIT Licensed
 */

'use strict';

/**
 * Module exports.
 * @public
 */

module.exports = paranoik;

/**
 * Module dependencies.
 * @private
 */

const md5 = require('js-md5');

/**
 * Create a Signature middleware.
 *
 * @public
 * @param {Object} [options]
 * @return {Function} middleware
 */
function paranoik (options) {
    const opts = options || {};

    return function verify (req, res, next) {
        if (req.method === 'OPTIONS') {
            next();
        }
        const url = req.protocol + '://' + req.get('host') + req.originalUrl;
        const body = Object.is(req.body, {}) ? req.body : 'empty';
        const data = [ url, req.method, body, req.get('User-Agent'), opts.secret ];

        if (req.headers.signature !== md5(JSON.stringify(data))) {
            res.status(403).end();
        }
        next();
    };
}
