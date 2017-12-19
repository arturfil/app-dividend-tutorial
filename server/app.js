const express    = require('express');
const app        = expess();
const port       = 4200;
const mongoose   = require('mongoose');
const bodyParser = require('body-parser');

mongoose.Promise = require('bluebird');
mongoose.connect('mongodb://<uname>:<pwd>@dsq23rq.mlab.com:39234/aufinacex')
    .then(() => {
        console.log('start');
    })
    .catch( err => {
        console.error('app starting error', err.stack);
        process.exit(1);
    });

const itemRouter = require('./src/routes/itemRouter');

app.use(express.static('public'));
app.use(cors());
app.use(bodyParser.urlencoded({extended: true}));
app.use(bodyParser.json());

app.use('/items', itemRouter);

app.listen(port, () => {
    console.log('app divivdend tutorial started...');
})