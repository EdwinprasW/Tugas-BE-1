'use strict';

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
                type: sequelize.email,
                allowNull: false,
                unique: true,
            },
            password: {
                type: sequelize.password,
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
        /**
         * Add reverting commands here.
         *
         * Example:
         * await queryInterface.dropTable('users');
         */
    }
};