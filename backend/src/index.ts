import express from "express"
import cors from 'cors'
import { connectMongo } from "./dbConfig"
const user = require("./Route/user")
const indexRoute = require("./Route/indexRoute")

const app = express()
app.use(cors({origin: ["http://localhost:3000"]}))
const port = 8080 || process.env.PORT

app.use(express.json())

connectMongo()

app.use("/api", indexRoute)

app.listen(port, () => {
  console.log(`http://localhost:${port}`)
})
