var geoip = require('geoip-lite');
var os = require('os');
var ifaces = os.networkInterfaces();

module.exports = {
    index: function (req, res) {
        var ip = (req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"] || '').split(',')[0] || req.client.remoteAddress;

        var geo = geoip.lookup(ip);

        res.json({notes: geo});
        /*res.view({
            meta:{
                keywords:'compresspng',
                description:'compresspng'
            },
            layout: 'public/layout'
        });*/
    }
};