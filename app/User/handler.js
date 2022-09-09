const { User } = require("../../models");
const bcrypt = require("bcrypt");
const Sequelize = require("sequelize");
const Op = Sequelize.Op;


module.exports = {
    handlerGetAllUser: async(req, res) => {
        const users = await User.findAll();
        res.status(200).json(users);


    },

    handlerPostUser: async(req, res) => {
        try {
            const { email, password, fullName, shortName, bio, angkatan, jabatan } = req.body;
            const hashPassword = await bcrypt.hash(password, 10);
            const user = await User.create({
                email,
                password: hashPassword,
                fullName,
                shortName,
                bio,
                angkatan,
                jabatan,
            });
            res.status(200).json(user);
        } catch (error) {
            res.status(400).json(error.message);
        }


    },

    handlerDelUser: async(req, res) => {
        const { id } = req.params;
        const user = await User.findByPk(id);
        if (!user) {
            res.status(404).json({
                message: "User not found",
            });
        } else {
            await user.destroy();
            res.status(200).json({
                message: "User deleted",
            });
        }


    },

    handlerUpdUser: async(req, res) => {
        const { id } = req.params;
        const { fullName, shortName, biodata, angkatan, jabatan } = req.body;
        const user = await User.findByPk(id);
        try {
            const upd = await user.update({
                //update to database
                fullName,
                shortName,
                biodata,
                angkatan,
                jabatan,
            });

            res.status(200).json(upd);
        } catch (error) {
            res.status(400).json(error.message);
        }

    },

    handlerSrchUserID: async(req, res) => {
        const { id } = req.params;
        const user = await User.findOne({
            where: {
                id: `${id}`,
            },
        });

        if (user) {
            return res.status(200).json({
                status: "success",
                message: "Successfully get user by id",
                data: user,
            });
        } else {
            return res.status(404).json({
                status: "failed",
                message: "User id not found",
            });
        }
    },

    handlerSrchUserNM: async(req, res) => {
        const { name } = req.query;

        const user = await User.findAll({
            attributes: ["id", "fullName", "shortName", "photo"],
            where: {
                fullName: {
                    [Op.like]: `%${name}%`,
                }
            },
        });

        if (user) {
            return res.status(200).json({
                status: "success",
                message: "Successfully get user by name",
                data: user,
            });
        } else {
            return res.status(404).json({
                status: "failed",
                message: "User name not found",

            });
        }
    }
}