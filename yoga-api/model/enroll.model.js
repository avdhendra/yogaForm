const { DataTypes,Sequelize } = require('sequelize');
const { sequelize } = require('../config/db');
require("dotenv").config()

const Enrollment = sequelize.define(process.env.ENROLLMENT, {
  name: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  age: {
    type: DataTypes.INTEGER,
    allowNull: false,
    validate: {
      isInt: {
        msg: 'Age must be a valid integer.',
      },
      min: {
        args: [18],
        msg: 'Age must be at least 18.',
      },
      max: {
        args: [65],
        msg: 'Age must be at most 65.',
      },
    },
  },
  email: {
    type: DataTypes.STRING,
    allowNull: false,
    validate: {
      isEmail: {
        msg: 'Invalid email format.',
      },
    },
  },
  address: {
    type: DataTypes.STRING,
    allowNull: false,
  },
  batch: {
    type: DataTypes.STRING,
      allowNull: false,
    validate: {
      isIn: {
        args: ['6-7AM', '7-8AM', '8-9AM', '5-6PM'],
        msg: 'Invalid batch value.',
      },
    },
    },
    enrollmentDate: {
        type: DataTypes.DATE,
        allowNull: false,
        defaultValue:Sequelize.NOW
    }
});

module.exports = Enrollment;