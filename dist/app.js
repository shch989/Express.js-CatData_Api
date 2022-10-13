"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var cats_route_1 = require("./cats/cats.route");
var app = express();
app.use(function (req, res, next) {
    console.log(req.rawHeaders[1]);
    console.log('this is logging middleware');
    next();
});
app.use(express.json());
app.use(cats_route_1.default);
app.use(function (req, res, next) {
    console.log('this is error middleware');
    res.send({ error: '404 not found error' });
});
app.listen(8000, function () {
    console.log("Example app listening on port http://localhost:8000");
});
//# sourceMappingURL=app.js.map