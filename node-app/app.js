const express = require('express');
const morgan = require('morgan');

const app = express();

app.use(morgan('dev'));

app.get('/', (req, res) => {
    res.json({ ok: true })
})

const port = process.env.PORT || 3000;
app.listen(port, err => {
    err ? console.log(err) : console.log(`Server on port ${port}`);
})