const express = require('express');
const path = require('path');
const loginRouter = require('./routes/login')
const app = express();
const PORT = process.env.PORT || 4000;

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.static('public'));

app.use('/login', loginRouter);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, ()=>{
    console.log('Server is running');
})

// Future plans:
// Node js script to scrape every html file for headings, p elements and store in json for search system (or use meta tags in html)