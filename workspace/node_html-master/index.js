//순서대로 실행을 한다.
let express = require('express');//웹 서버 모듈
let app = express();
let router = require('./router/main')(app);// main.js을 실행하게 된다.
let port = process.env.PORT || 3000;

app.set('views', __dirname + '/views');
app.set('view engine', 'ejs');
app.engine('html', require('ejs').renderFile);
app.use(express.static('public'));

let server = app.listen(port, function(){//웹 서버를 실행 app.listen함수
    console.log("Express server has started on port "+ port)
});
