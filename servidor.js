const Express = require('express')
const bodyparser = require('body-parser')
const cors = require('cors')
const bd = require('./src/data/sqlite-bd')
const dogsController = require('./src/controllers/dogs-controller')
const catsController = require('./src/controllers/cats-controller')
const port = 3030
const app = Express()

const port = process.env.PORT

app.use(Express.json())
app.use(cors())

dogsController(app, bd)
catsController(app, bd)


app.listen(port, () => console.log(`[INFO]
Servidor rodando na porta: ${port}`) )