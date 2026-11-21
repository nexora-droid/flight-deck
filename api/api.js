const express = require('express');
const path = require('path');
const authRouter = require('./routes/auth')
const app = express();
const PORT = process.env.PORT || 3212;

app.use((req, res, next)=>{
    console.log(`${req.method} ${req.url}`);
    next();
});

app.use(express.json());
app.use(express.static('public'));

app.use('/auth', authRouter);

app.get('/', (req, res)=>{
    res.sendFile(path.join(__dirname, 'public', 'index.html'));
})

app.listen(PORT, ()=>{
    console.log('Server is running');
})

// Future plans:
// Node js script to scrape every html file for headings, p elements and store in json for search system (or use meta tags in html)