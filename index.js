
const express = require('express');
const articalRoutes = require('./Routes/articalRoutes')


const app = express();
const port = 4000;

// Middlewares //
app.use(express.json());
app.use('/artical', articalRoutes);


app.get('/', (req, res) => {
    res.send("Welcome agine in Dev.2")
});


app.listen(port, () => console.log("Dev.2 is re-building"));