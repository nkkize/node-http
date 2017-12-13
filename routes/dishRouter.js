const express = require('express');
const bodyParser = require('body-parser');

const dishRouter = express.Router();

dishRouter.use(bodyParser.json());

dishRouter.route('/')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the dishes to you');
    })
    .post((req, res, next) => {
        res.end('will add the dish : ' + req.body.description);
    })
    .put((req, res, next) => {
        res.statusCode = 403;
        res.end('put on dishes not supported!');
    })
    .delete((req, res, next) => {
        res.end('deliting all the dishes');
    });

dishRouter.route('/:dishId')
    .all((req, res, next) => {
        res.statusCode = 200;
        res.setHeader('Content-type', 'text/plain');
        next();
    })
    .get((req, res, next) => {
        res.end('Will send all the dish : ' + req.params.dishId + 'to you!');
    })
    .post((req, res, next) => {
        res.statusCode = 403;
        res.end('POST operation not supported on /dishes/' + req.params.dishId);
    })
    .put((req, res, next) => {
        res.write('updating the dish: ' + req.params.dishId);
        res.end('Will update the dishe: ' + req.body.name + ' to you!');
    })
    .delete((req, res, next) => {
        res.end('deliting dish: ' + req.params.dishId);
    })

module.exports = dishRouter;