const express = require('express');
const app = express();
const port = 3000;

// Formular
app.get('/', (req, res) => {
    res.send(`
        <form method="GET" action="/greet">
            <input type="text" name="meno" placeholder="First name" />
            <button type="submit">ENTER</button>
        </form>
    `);
});

// Spracovanie mena
app.get('/greet', (req, res) => {
    const meno = req.query.meno; 
    res.send(`Ahoj ${meno}!`);
});


const server = app.listen(port, () => {
    console.log(`Server beží na http://localhost:${port}`);
});

