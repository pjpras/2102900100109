const express = require('express')
const {handleGenerateNewShortUrl, handleUpdateAndRedirect, handleAnalytics} = require('../controllers/url')

const router = express.Router() 
const redirectRoute = express.Router()

router.post('/',handleGenerateNewShortUrl);
redirectRoute.get('/:shortId',handleUpdateAndRedirect);
router.get('/analytics/:shortId',handleAnalytics);

module.exports = {
    urlRouter:router,
    redirectRoute:redirectRoute
}