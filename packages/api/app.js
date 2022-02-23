const configServer = require("./server_config.json");
const createError = require('http-errors');
const express = require('express');
const cookieParser = require('cookie-parser');
const logger = require('morgan');
const path = require('path');
const { MongoClient } = require('mongodb');
const jobsAPIRouter = require("./controllers/jobs");
//const open = require("open");

const app = express();
const client = new MongoClient(configServer.dburi)
/*
client.connect()
    .then((res) => {
        app.set("db_client", res.db("nextjob_test"));
        console.log("CONNECTION SUCCEEDED");
    })
    .catch((err) => console.log(err.message))

*/
let clientConnect = async () => {
    let res
    try {
        res = await client.connect()
    }
    catch (err){
        console.log(err)
    }
    return res;
}

clientConnect();
app.use(logger('dev'));
app.use(express.json());
app.use(express.urlencoded({ extended: false }));
app.use(cookieParser());
//app.use(express.static(path.join(__dirname, 'client/build')));
app.use("/controllers",jobsAPIRouter);

// catch 404 and forward to error handler
app.use(function(req, res, next) {
    next(createError(404));
});

// error handler
app.use(function(err, req, res, next) {
    // set locals, only providing error in development
    res.locals.message = err.message;
    res.locals.error = req.app.get('env') === 'development' ? err : {};

    // render the error page
    res.status(err.status || 500);
    //res.render('error');
    res.send();
});

app.listen(5000, () => {
    console.log("listening on : http://localhost:5000");
});