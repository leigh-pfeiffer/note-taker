const express = require('express')

const app = express

const PORT = process.env.PORT || 3001;

app.use(express.urlencoded({ extend: true}));
app.use(express.json());
app.use(express.static('public'));

// add api routs

app.listen(PORT, () => {
    console.log('App listening on PORT: ${PORT}');
})