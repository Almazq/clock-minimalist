const express = require('express')
const ipinfo = require('ipinfo-express')

const app = express()

app.use(ipinfo({
    token: "61ae0a43377bc3",
    cache: null,
    timeout: 5000,
    ipSelector: null,
    ipSelector: (req) => {
        ip = ""
        return ip
    }
}))

app.get('/api', function (req, res) {
    res.send(req.ipinfo)
})

app.listen(5000, () => {
    console.log(`Server is running`)
})
