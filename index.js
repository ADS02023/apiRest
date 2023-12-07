require('dotenv').config();
const express = require('express');
const pino = require('pino-http')();
const logger = require('pino')();


const app = express();

app.use(pino);

const port = process.env.PORT | 3001 ;

app.listen(port, ()=> {
    logger.info(`server en escucha en puerto: ${port}`)
})  