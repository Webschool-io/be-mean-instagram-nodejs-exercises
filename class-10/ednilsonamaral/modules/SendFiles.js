'use strict';

module.exports = function(req, res) {
    const options = {
        root: __dirname + '/_public/',
        dotfiles: 'deny',
        headers: {
            'x-timestamp': Date.now(),
            'x-sent': true
        }
    };

    const fileName = req.params.name;
    const fileType = req.params.type;

    switch (fileType){
        case 'png':
            res.set({'Content-Type': 'image/png'});
            fileName = fileName +'.'+fileType;
            break;
        default:
            res.status(400).send('Arquivo não suportado!');
            break;
    }

    res.sendFile(fileName, options, function (err) {
        if (err) {
            console.log(err);
            res.status(err.status).end();
        } else {
            console.log('Sent:', fileName);
        }
    });
};
