const { sequelize } = require("../config/db")
const {Sequelize, DataTypes} = require('sequelize');
const enrollment = require("./enroll.model")
const payment=require("./payment.model")
const db = {
    
}
db.Sequelize = Sequelize
db.sequelize = sequelize
db.enrollment = enrollment
db.payment = payment


db.enrollment.hasMany(db.payment, {
    foreignKey: "enrollmentId"
});
db.payment.belongsTo(db.enrollment, {
    foreignKey:"enrollmentId"
});

module.exports=db


