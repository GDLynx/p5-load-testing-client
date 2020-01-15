const express = require('express');
const bodyParser = require("body-parser"); 
const app = express(); 
const port = 3000; 

app.use(bodyParser.urlencoded({ extended: false }))

// parse application/json
app.use(bodyParser.urlencoded({ extended: false }))
// parse application/json
app.use(bodyParser.json()); 
app.use(function(req, res, next) {
    res.header("Access-Control-Allow-Origin", "*"); 
    res.header("Access-Control-Allow-Headers", "Origin, X-Requested-With, Content-Type, Accept");
    next();
});

app.locals.testing = false; // I don't think this functionallity works , may need a loadtest.stopTest method 

app.post("/load-test", (req, res) => {
    console.log("Simple P5.js Load Testing Client"); 
    const loadtest = require('loadtest');
    const options = {
        url: req.body.webAddress,
        concurrency: req.body.simulatedUsers, 
        rps: req.body.requestsPerInterval, 
        maxSeconds: req.body.maxSeconds
    };
    if (!app.testing) {
        loadtest.loadTest(options, function(error, result)
        {
            if (error)
            {
                return console.error('Got an error: %s', error);
            }
            console.log('Tests run successfully');
            res.send(result);  
        });
    } else {
        res.send("TEST IN PROGRESS "); 
    } 
}); 

app.get('/load-test', (req, res) => res.send('/load-test expects "post"')); 
app.get('/', (req, res) => res.send('Hello World!'))
app.listen(port, () => console.log(`Example app listening on port ${port}!`))