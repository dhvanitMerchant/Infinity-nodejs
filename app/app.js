var express = require('express');
var app = express();

var dataFile = require('./data/data.json');
app.set('port', process.env.PORT || 3000 );
app.set('appData', dataFile);
app.set('view engine', 'ejs');
app.set('views', 'app/views');

app.use(express.static('app/public'));
app.use(require('./routes/index'));
app.use(require('./routes/employees'));
app.use(require('./routes/feedback'));
app.use(require('./routes/api'));
app.use(require('./routes/chat'));

app.locals.setTitle ='Infinity';
app.locals.allemployees = dataFile.employees;

var server = app.listen(app.get('port'), function() {
  console.log('Listening on port ' + app.get('port'));
});
