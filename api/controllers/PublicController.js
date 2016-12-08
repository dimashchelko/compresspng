var geoip = require('geoip-lite');
var os = require('os');
var ifaces = os.networkInterfaces();

module.exports = {
    index: function (req, res) {
        var ip = '';
        var ip2 = (req.headers["X-Forwarded-For"] || req.headers["x-forwarded-for"] || '').split(',')[0] || req.client.remoteAddress;

        Object.keys(ifaces).forEach(function (ifname) {
            var alias = 0;

            ifaces[ifname].forEach(function (iface) {
                if ('IPv4' !== iface.family || iface.internal !== false) {
                    // skip over internal (i.e. 127.0.0.1) and non-ipv4 addresses
                    return;
                }

                if (alias >= 1) {
                    console.log(1, ifname + ':' + alias, iface.address);
                } else {

                    ip = iface.address;
                }
                ++alias;
            });
        });

        var geo = geoip.lookup(ip);

        console.log(ip);
        console.log(ip2);
        console.log(geo);

        res.json({ip: ip,ip2:ip2, notes: geo});
        /*res.view({
            meta:{
                keywords:'compresspng',
                description:'compresspng'
            },
            layout: 'public/layout'
        });*/
    }
};