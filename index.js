var Express = require('express');
var app = Express();

app.use(Express.static(__dirname));
app.listen(3000);
