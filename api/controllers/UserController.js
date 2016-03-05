module.exports = {
    create: function(req, res){
        var params = req.params.all();

        UserModel.create({name: params.name}).exec(function createCB(err,created){
            return res.json({
                notice: 'Created user with name ' + created.name
            });
        });
    }
};