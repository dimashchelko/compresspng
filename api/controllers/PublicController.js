var geoip = require('geoip-lite');

module.exports = {
    index: function (req, res) {
        var ip = (req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"] || '').split(',')[0] || req.client.remoteAddress;

        var geo = geoip.lookup(ip);

        res.view({
            geo: geo,
            layout: 'public/layout'
        });
    }
};