const express = require('express')
const multer = require('multer')
const routes = express.Router()

// Add routes
routes.get('/', (req, res) => {
    res.render("pages/index")
});
// routes.post('/', SessionController.store);
// routes.put('/', SessionController.store);
// routes.delete('/', SessionController.store);

module.exports = routes;
