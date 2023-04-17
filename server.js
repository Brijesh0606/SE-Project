var express = require('express');

var app = express();

app.use(express.static('Public'));
app.use('/css', express.static(__dirname + 'Public/css'));
app.use('/js', express.static(__dirname + 'Public/js'));
app.use('/img', express.static(__dirname + 'Public/img'));

// app.set('Views', './Views');
// app.set('view engine', 'ejs');

// app.get('', (req, res) => {
//     res.render('index');
// });

// app.get('/contectus', (req, res) => {
//     res.render('contectus');
// });

// app.get('', (req, res) => {
//     res.render('ourfacilities');
// });

// app.get('', (req, res) => {
//     res.render('report');
// });

// app.get('', (req, res) => {
//     res.sendFile('')
// })

app.use(express.static(__dirname + '/Views'));

app.listen(3000, function () {
    console.log("Server");
});