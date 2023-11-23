const Sequelize = require('sequelize');

const sequelize = require('../util/database');

const Student = sequelize.define('student',{
    id:{
        type : Sequelize.INTEGER,
        autoIncrement : true,
        allowNull : false,
        primaryKey : true
    },
    name : {
        type: Sequelize.STRING,
        allowNull: false
    },
    email : {
        type: Sequelize.STRING,
        allowNull:false,
    },
    phone:{
        type: Sequelize.STRING,
        allowNull: false
    },
    standard:{
        type: Sequelize.STRING,
        allowNull: false
    }
});

module.exports = Student