const express = require('express');
const app = express();

app.use(express.urlencoded({extended: true });
app.use(express.static('static'));
app.set('view engine', 'ejs');

app.use((req, res, next) => {
    res.locals.is_admin = false;
    next();
});

app.get('/', (req, res) => {
    res.render('dashboard');
});

app.post('/estimate', (req, res) => {
    res.json(req.body);
});

app.listen(process.env.PORT || 3001);