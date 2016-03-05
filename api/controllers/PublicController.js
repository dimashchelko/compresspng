module.exports = {
    index: function (req, res) {
        res.view({
            meta:{
                keywords:'adoric',
                description:'adoric'
            },
            layout: false
        });
    }
};