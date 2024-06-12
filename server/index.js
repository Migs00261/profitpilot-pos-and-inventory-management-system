import express from "express"
import dotenv from 'dotenv'
import { connectDB } from "./config/db.js"
import cors from 'cors'
import {graphqlHTTP} from "express-graphql"
import helmet from 'helmet'
import xss from 'xss-clean'
import schema from './Graphql/schema.js'

const port = process.env.PORT || 5000;

dotenv.config()

const app = express()

connectDB()

const corsOptions = {
    origin:'http://localhost:3000',
    optionsSuccessStatus: 200,
}

app.use(cors(corsOptions))
app.use(helmet())
app.use(xss())

app.use('/graphql',graphqlHTTP({
  schema,
  graphiql:process.env.NODE_ENV === 'development'
}))

app.listen(port,() => console.log(`db connectio successful server running at port: ${port}`))