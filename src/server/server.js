const express = require('express');
const mongoose = require('mongoose');
const bodyParser = require('body-parser');

const routerCategories = require('./routers/category');
const routerGoods = require('./routers/good');
const routerCart = require('./routers/cart');
const keys = require('./config/keys');
const app = express();

app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());

app.use('/api/categories', routerCategories);
app.use('/api/goods', routerGoods);
app.use('/api/cart', routerCart);

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err))

app.listen(3001, () => console.log("Server has been started"));