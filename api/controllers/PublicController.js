var geoip = require('geoip-lite');
var mmdbreader = require('maxmind-db-reader');

module.exports = {
    index: function (req, res) {
        var ip = (req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"] || '').split(',')[0] || req.client.remoteAddress;

        var geo = geoip.lookup(ip);

        res.json({geo: geo})
    },

    info: function(req, res) {
        mmdbreader.open('./countries.mmdb',function(err,countries){
            var ip = (req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"] || '').split(',')[0] || req.client.remoteAddress;
            countries.getGeoData(ip, function(err,geodata){
                res.json({geo: geodata})
            });
        });
    }
};