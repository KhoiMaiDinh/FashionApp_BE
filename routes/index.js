const { Router } = require('express');
const rootRoutes = require('./rootRoutes');
const registerRoutes = require('./registerRoutes');
const authRoutes = require('./authRoutes');
const refreshRoutes = require('./refreshRoutes');
const verifyJWT = require('../middlewares/verifyJWT');
const categoryRoutes = require('./categoryRoutes');
const errorHandler = require("../middlewares/errorHandler");

const router = Router();

// all routes of application
router.use(rootRoutes);
router.use(registerRoutes);
router.use(authRoutes);
router.use(refreshRoutes);

router.use(verifyJWT);
router.get('/test', (req, res) => {res.status(200).json('OK')});
router.use(categoryRoutes);


// error handler all routes
router.use(errorHandler);

module.exports = router;