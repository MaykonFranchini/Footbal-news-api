import express from "express";
import cors from 'cors'
import { routes } from "./routes";
import { getNewsJob } from "./getNews";


const app = express();
app.use(cors());
app.use(express.json())
app.use(routes)

getNewsJob()

app.listen(process.env.PORT || 3333, () => {
  console.log('Server is runnung!')
})
