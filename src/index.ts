const serve = require('koa-static');
const Koa = require('koa');
const mount = require('koa-mount');
const app = new Koa();

app.use(mount('/public', serve(__dirname + '/static')));

app.listen(3000);
console.log('listening on port 3000');