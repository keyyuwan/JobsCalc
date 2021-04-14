const express = require('express')
const server = express()
const path = require('path')

const router = require('./routes')

server.set("view engine", "ejs") // procura a pasta views fora de tudo

// mudar a localização da pasta views
server.set("views", path.join(__dirname, "views"))

server.use(express.static("public"))

server.use(express.urlencoded({ extended: true }))

server.use(router)

server.listen(3000, () => console.log("Server running"))