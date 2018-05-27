const express = require('express');
const router = express.Router();

router.get('/', (req, res, next) => {
    res.status(200).json({
        message: 'Handeling GET requests to /products'
    });
});

router.post('/', (req, res, next) => {
    res.status(201).json({
        message: 'Handling POST req to /products'
    });
});

router.get('/:productId', (req, res, next) =>{
    const id = req.params.productId;
    if (id === 'special'){
        res.status(200).json({
            message: 'Hurrah! You discoverd the special ID',
            id: id
        });
    } else {
        res.status(200).json({
            message: 'You Passed an ID',
            id: id 
        });
    }
} );

router.patch('/productId', (req, res, next) => {

})