const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
require("dotenv").config()
const Payment = sequelize.define(process.env.PAYMENT, {
  
 accountNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  accountHolderName: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cvvNumber: {
    type: DataTypes.STRING,
    allowNull: false,
  },

  cardType: {
    type: DataTypes.ENUM('DEBIT', 'CREDIT'),
    allowNull: false,
  },

  cardValidDate: {
    type: DataTypes.STRING, 
    allowNull: false,
  },

  amount: {
    type: DataTypes.FLOAT,
    allowNull: false,
  },
});

module.exports = Payment;