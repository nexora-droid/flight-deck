const express = require('express');
const path = require('path');
const loginRouter = require('./routes/login')
const app = express();

app.use(express.static('public'));

app.use('/login', loginRouter);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(4000, ()=>{
    console.log('Server is running');
})

// Future plans:
// Node js script to scrape every html file for headings, p elements and store in json for search system (or use meta tags in html)