const express = require('express');
const http = require('http');
const morgan = require('morgan');

const bodyParser = require('body-parser');

const dishRouter = require('./routes/dishRouter');
const promoRouter = require('./routes/promoRouter');
const leaderRouter = require('./routes/leaderRouter');
const hostname = 'localhost';
const port = 3000;

const app = express();
app.use(morgan('dev'));
app.use(bodyParser.json());

/*app.all('/dishes', (req, res, next) => {
   res.statusCode = 200;
   res.setHeader('Content-type', 'text/plain');
   next();
});

app.get('/dishes', (req, res, next) => {
   res.end('Will send all the dishes to you');
});

app.post('/dishes', (req, res, next) => {
   res.end('will add the dish : '+req.body.description);
});

app.put('/dishes', (req, res, next) => {
    res.statusCode =403;
    res.end('put on dishes not supported!');
});

app.delete('/dishes', (req, res, next) => {
    res.end('deliting all the dishes');
});*/

/*app.get('/dishes/:dishId', (req, res, next) => {
    res.end('Will send all the dish : ' +req.params.dishId+ 'to you!');
});

app.post('/dishes/:dishId', (req, res, next) => {
    res.statusCode =403;
    res.end('POST operation not supported on /dishes/' +req.params.dishId);
});

app.put('/dishes/:dishId', (req, res, next) => {
    res.write('updating the dish: '+req.params.dishId);
    res.end('Will update the dishe: ' +req.body.name+ ' to you!');
});

app.delete('/dishes/:dishId', (req, res, next) => {
    res.end('deliting dish: '+req.params.dishId);
});*/

app.use('/dishes', dishRouter);
app.use('/promotions', promoRouter);
app.use('/leaders', promoRouter);

app.use(express.static(__dirname+ '/public'));

app.use((req, res, next) => {
    res.statusCode = 200;
    res.setHeader('Content-Type', 'text/html');
    res.end('<html><body><h1>This is an express server!</h1></body></html>')
})

const server = http.createServer(app);

server.listen(port, hostname, () => {
    console.log(`server running at http://${hostname}:${port}`)
})