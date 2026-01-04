const express = require("express")

const router = require("./routes")

class App {

    constructor () {
        this.server = express()

        this.server.use(router)
        this.server.use(express.json())
    }
}

module.exports = new App().server