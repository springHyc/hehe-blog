const express = require('express');
const path = require('path');
const app = express();

const _path = path.join(__dirname, '../');
app.use(express.static(path.join(_path, 'build')));

app.get('/', function(req, res) {
    res.sendFile(path.join(_path, 'build', 'index.html'));
});

app.listen(9001);
