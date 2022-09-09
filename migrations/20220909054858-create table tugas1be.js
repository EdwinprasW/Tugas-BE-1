'use strict';

const sequelize = require("sequelize");

module.exports = {
    async up(queryInterface, Sequelize) {
        await queryInterface.createTable("userBE", {

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
            fullName: {
                type: sequelize.STRING,
                allowNull: false,
            },
            shortName: {
                type: sequelize.STRING,
                allowNull: false,
            },
            photo: {
                type: sequelize.STRING,
                allowNull: true,
            },
            bio: {
                type: sequelize.STRING,
                allowNull: false,
            },
            angkatan: {
                type: sequelize.INTEGER,
                allowNull: false,
            },
            jabatan: {
                type: sequelize.STRING,
                allowNull: false,
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