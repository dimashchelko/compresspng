module.exports = {
    index: function (req, res) {
        res.view({
            meta:{
                keywords:'compresspng',
                description:'compresspng'
            },
            layout: 'public/layout'
        });
    }
};