"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
var express = require("express");
var app_model_1 = require("./app.model");
var app = express();
var data = [1, 2, 3, 4];
app.get('/', function (req, res) {
    console.log(req);
    res.send({ cats: app_model_1.Cat });
});
app.listen(8000, function () {
    console.log("Example app listening on port http://localhost:8000");
});
//# sourceMappingURL=app.js.map