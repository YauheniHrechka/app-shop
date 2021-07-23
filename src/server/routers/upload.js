const express = require('express');
const router = express.Router();
const upload = require('../middleware/upload');

router.post('/test', upload.single('file'), (req, res) => {
    console.log('req.body -> ', req.body);
    console.log('req.file -> ', req.file);
    // console.log('req.params -> ', req.params);
    // console.log('err -> ', err);
    // myupload(req, res, err => {
    //     let error = '';
    //     if (err) {
    //         if (err.code === 'LIMIT_FILE_SIZE') {
    //             error = 'Image must smaller than 2MB!'
    //         } else if (err.code === 'EXTENSION') {
    //             error = 'You can only upload JPEG/PNG file!';
    //         }
    //     }

    //     res.json({
    //         ok: !error,
    //         error
    //     });
    // })
    res.status(200).json({
        ok: true
    });
});

router.post('/fake', (req, res) => {
    res.status(200).send(true);
});

module.exports = router;