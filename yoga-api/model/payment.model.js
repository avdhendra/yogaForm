const { DataTypes } = require('sequelize');
const { sequelize } = require('../config/db');
require("dotenv").config()
const Payment = sequelize.define(process.env.PAYMENT, {
  
  paymentId: {
    type: DataTypes.INTEGER,
    primaryKey: true,
    autoIncrement: true,
  },
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
    type: DataTypes.STRING,
      allowNull: false,
    validate: {
      isIn: {
        args: [["DEBIT", "CREDIT"]],
        msg: 'Invalid Card Type',
      },
    },
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