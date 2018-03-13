const express = require('express');
const app = express();

app.set('port', process.env.PORT || 8080);

app.get('/', (req, res) => {
    res.send('Hello World!')
})
app.get('/time', (req, res) => {
  
    const datetime = new Date().toISOString();
    res.send(datetime);
})

app.listen(app.get('port'));