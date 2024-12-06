import express from "express";
import { connectMongo } from "./src/dbConfig";
import cors from "cors";
import indexRoute from "./src/Route/indexRoute";

const app = express();
app.use(cors({ origin: ["http://localhost:3000"] }));
const port = process.env.PORT || 8080;

app.use(express.json());

connectMongo();

app.use("/api", indexRoute);

app.listen(port, () => {
  console.log(`http://localhost:${port}`);
});
