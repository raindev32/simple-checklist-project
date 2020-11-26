const express = require('express')
const next = require('next')

const dev = process.env.NODE_ENV !== 'production'
const app = next({ dev })
const handle = app.getRequestHandler()

app.prepare().then(() => {
    const server = express()

    // Add
    server.get('/detail/:id', (req, res) => {
        const page = '/detail'
        const queryParams = { id: req.params.id }
        app.render(req, res, page, queryParams)
    })

    server.get('*', (req, res) => {
        return handle(req, res)
    })

    server.listen('3000', (error) => {
        if(error) throw err
        console.log('> Ready on https://localhost:3000')
    })
})
.catch((ex) => {
    console.log(ex.stack)
    process.exit(1)
})