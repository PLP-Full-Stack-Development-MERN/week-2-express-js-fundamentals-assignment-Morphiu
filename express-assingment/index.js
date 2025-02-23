require('dotenv').config();

const express = require('express');
const app = express();
const PORT = process.env.PORT;

const userRoutes = require('./routes/userRoutes.js');
const productRoutes = require('./routes/productRoutes.js');
const logger = require('./middleware/logger.js');
const errorHandler = require('./middleware/errorHandler.js');

app.use(logger);
app.use(express.json());

app.get('/', (req, res)=> {
    res.send('Hello, welcome to Express!');
});

app.use('/users', userRoutes);
app.use('/products', productRoutes);

app.use(errorHandler);

app.listen(PORT, ()=>{
    console.log(`Server is running on http://localhost:${PORT}`);
});