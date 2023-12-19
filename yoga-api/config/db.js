const { Sequelize } = require('sequelize')
const sequelize = new Sequelize('yoga','root','root',{
    host: 'localhost',
    dialect:'mysql'
})


module.exports = { sequelize }