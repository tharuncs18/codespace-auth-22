require('dotenv').config()

const express=require('express')
const app = express()

app.get("/",(req,res) =>
{
    resizeBy.send("<h1>server is working </h1>")
})
module.export = app

