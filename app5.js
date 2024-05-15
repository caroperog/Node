const express = require('express')
global.app5 = express()
global.config = require("./config.js").config

require("./routes.js")