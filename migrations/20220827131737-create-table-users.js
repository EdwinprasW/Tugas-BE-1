'use strict';

const sequelize = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("users", {

            id: {
                type: sequelize.INTEGER,
                primaryKey: true,
                autoIncrement: true,
                allowNull: false,
            },
            email: {
                type: sequelize.STRING,
                allowNull: false,
                unique: true,
            },
            password: {
                type: sequelize.STRING,
                allowNull: false,
            },
            name: {
                type: sequelize.STRING,
                allowNull: false,
            },
            role: {
                type: Sequelize.ENUM("admin", "user"),
                allowNull: false,
            },
            photo: {
                type: Sequelize.STRING,
                allowNull: true,
            },
            createdAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },
            updatedAt: {
                type: Sequelize.DATE,
                allowNull: false,
            },



        })
    },

    async down(queryInterface, Sequelize) {
        await queryInterface.dropTable("userBE");
    },
};