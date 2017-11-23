var express = require('express');
var router = express.Router();
var hackerRank = require('machinepack-hackerrank');


router.get('/', function (req, res, next) {
    res.render('index', {
        language: "1",
        langCode: "c_cpp"
    });
});

router.post('/compile', function (req, res, next) {

    hackerRank.submit({
        apiKey: 'hackerrank|978080-1446|7187c9fd5cde0eeb7c8ad555111e9510d2ef7331',
        source: req.body.source,
        language: parseInt(req.body.language),
        testcases: JSON.parse(req.body.input),
        wait: true,
        callbackUrl: '',
        format: 'json',
    }).exec({
        
        error: function (err) {
            throw err;
        },
        
        success: function (response) {
            console.log(response)
            res.json(response);
        },
    });

});

router.get('/changelang/:langCode/:language', function (req, res, next) {
    var language = req.params.language.trim();
    var langCode = req.params.langCode.trim();

    res.render('index', {
        language: language,
        langCode: langCode
    });

});

module.exports = router;
