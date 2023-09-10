const express = require("express")
const connectMongo = require("./dbConfig")
const user = require("./Route/user")
const indexRoute = require("./Route/indexRoute")
const cors = require("cors")

const app = express()
app.use(cors({origin: ["http://localhost:3000"]}))
const port = 8080 || process.env.PORT

app.use(express.json())

connectMongo()

app.use("/api", indexRoute)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
