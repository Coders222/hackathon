var express = require('express');
const app = express();
const port = 8888;
app.get('/', (req, res) => {
    res.send('hello people');
});
app.listen(port, () => {
    console.log('listening to the port: ' + port);
});