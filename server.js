let express = require('express');
let app = express();
const PORT = 3000;
let count = 0;

const addon = require('./build/Release/mathematic');
const kramer = require('./build/Release/kramer');

app
.use(function (req, res, next) {
    count = count + 1;
    console.log(`counter ${count}`);
    next();
})
.get('/add/:x/:y', function (req, res) {
res.end(String(addon("add",Number(req.params.x), Number(req.params.y))));
})
.get('/subtract/:x/:y', function (req, res) {
res.end(String(addon("subtract",Number(req.params.x), Number(req.params.y))));
})
.get('/multiply/:x/:y', function (req, res) {
res.end(String(addon("multiply",Number(req.params.x), Number(req.params.y))));
})
.get('/divide/:x/:y', function (req, res) {
res.end(String(addon("divide",Number(req.params.x), Number(req.params.y))));
})
.get('/pow/:x/:y', function (req, res) {
res.end(String(addon("pow",Number(req.params.x), Number(req.params.y))));
})
.get('/kramer/:a1/:b1/:c1/:a2/:b2/:c2', function (req, res) {
    //let delta = Number(req.params.a1) * Number(req.params.b2) - Number(req.params.b1) * Number(req.params.a2),
    //delta_l = Number(req.params.c1) * Number(req.params.b2) - Number(req.params.b1) * Number(req.params.c2),
    //delta_ll = Number(req.params.c1) * Number(req.params.a2) - Number(req.params.a1) * Number(req.params.c2);
    let obj = kramer("kramer",Number(req.params.a1), Number(req.params.b1), Number(req.params.c1), Number(req.params.a2),  Number(req.params.b2),  Number(req.params.c2));
	//res.end(`NativeJS : x = ${delta_l / delta}, y = ${delta_ll / delta} \nC++ addon: x = ${obj[0]}, y = ${obj[1]}`);
	res.end(`x = ${obj[0]}, y = ${obj[1]}`);
})
.get('/*', req => req.res.end('hello from express calc!'))
.listen(PORT || process.env.port);

module.exports = app;