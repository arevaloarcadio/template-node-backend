import express from 'express'
import { APP_PORT, accessLogStream, helmet } from './config'
import routes from './routes'
import path from 'path'
import cors_ from 'cors'
import morgan from 'morgan'
// Set up server

const app = express()
app.use(morgan('combined', { stream: accessLogStream }))
app.use(cors_())
app.use(helmet)
app.use(express.urlencoded({extended: false}));
app.use(express.json())

// Routes
app.use('/public', express.static(path.resolve(__dirname, '../public')))
app.use(routes);

let http = require("http").Server(app);

http.listen(APP_PORT, () => {
    console.log(`Server on http://localhost:${APP_PORT}`);
})

