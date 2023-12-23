const router = require('express').Router();
const whatsappRoutes = require('./whatsapp.routes');

router.use('/', whatsappRoutes);

module.exports = router;
