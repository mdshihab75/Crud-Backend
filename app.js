require('dotenv').config()
const dns = require('dns')
dns.setServers(["1.1.1.1", "8.8.8.8"]);
const express = require('express');
const router = require('./router');
const dbconect = require('./config/db');
const app = express()
dbconect()
app.use(express.json())
app.use('/', router)


module.exports = app;