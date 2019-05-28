const express = require('express');
const app = express();

app.use(express.static(__dirname + "/dist/"));
app.get(/.*/, (req, res) => {
    res.sendfile(__dirname + "/dist/index.html")
})
app.listen(80);