const express = require("express")

//use this
// const dotenv = require("dotenv")
// dotenv.config()

//or in the package.json script include the below
//requires the dotenv/config module before index,.js starts
//"server": "node or nodemon -r dotenv/config index.js"

const app = express()
const host = process.env.HOST || "0.0.0.0"
//Port would have to be 443 (HTTPS) or 80 (HTTP)
//HEROKU assigns your port
const port = process.env.PORT || 8080

app.use((req, res, next) => {
	console.log(`[${new Date().toLocaleString()}] ${req.ip} ${req.method} ${req.url}`)
	next()
})

app.get("/", (req, res) => {
	res.json({
		message: "Welcome to our API",
		cohort: process.env.LAMBDA_COHORT,
		secret: process.env.SUPER_SECRET_API_KEY,
	})
})

app.listen(port, host, () => {
	console.log(`Running at http://${host}:${port}`)
})