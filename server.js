const express = require('express');
const app = express();
const port = 3000;

app.get('/', (req, res) => {
    res.send('Ahoj!');
});

const server = app.listen(port, () => {
    console.log(`Server beží na http://localhost:${port}`);
});

