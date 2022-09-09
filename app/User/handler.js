const { user } = require("../../models");

module.exports = {
    handlerGetAllUser: async(req, res) => {
        const users = await user.findAll();
        res.status(200).json(users);
    }

}