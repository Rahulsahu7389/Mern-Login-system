const ensureAuthenticated = require("./auth");

const router = require("express").Router();

router.get('/',ensureAuthenticated, (req, res) => {
    res.status(200).json([

        { 
            mobile: "Samsung Galaxy S23 Ultra",
            price: 124999
        },   
        { 
            mobile: "Samsung Galaxy S23",
            price: 124999
        },   
        { 
            mobile: "Samsung Galaxy S23+",
            price: 124999
        },   
    ]
);})

module.exports = router;