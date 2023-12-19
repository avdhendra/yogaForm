const express = require("express")
const bodyParser = require("body-parser")
const {sequelize}=require("./config/db")
const enrollRoutes = require("./routes/enroll.route")
const  db  =require("./model")
const cors = require("cors")
const app = express()
require("dotenv").config()

app.use(cors())

app.use(bodyParser.json())

app.use("/yoga",enrollRoutes)

db.sequelize.sync().then(() => {
    console.log("Database is Online")

    app.listen(process.env.PORT, () => {
        console.log("Server is running on Port: "+process.env.PORT)
    })
}).catch((error) => {
    
    console.error("Error  syncing Sequelize"+error)
})