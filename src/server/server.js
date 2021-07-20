const express = require('express');
const mongoose = require('mongoose');
const passport = require('passport');
const bodyParser = require('body-parser');
const cors = require('cors');
const morgan = require('morgan');

const routerAuth = require('./routers/auth');
const routerCategories = require('./routers/category');
const routerGoods = require('./routers/good');
const routerCart = require('./routers/cart');
const keys = require('./config/keys');
const app = express();

mongoose.connect(keys.mongoURI, {
    useNewUrlParser: true,
    useUnifiedTopology: true
})
    .then(() => console.log('mongoDB connected'))
    .catch(err => console.log(err))

app.use(passport.initialize());
require('./middleware/passport')(passport);

app.use(morgan('dev'));
app.use(bodyParser.urlencoded({ extended: true }))
app.use(bodyParser.json());
app.use(cors());

app.use('/api/auth', routerAuth);
app.use('/api/categories', routerCategories);
app.use('/api/goods', routerGoods);
app.use('/api/cart', routerCart);

app.listen(3001, () => console.log("Server has been started"));