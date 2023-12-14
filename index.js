require('dotenv').config();
const app = require('./app/route/app.js')
const logger = require('pino')();

const port = process.env.PORT;

app.listen(port, ()=> {
    logger.info(`server en escucha, puerto: ${port}`)
})  