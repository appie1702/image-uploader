const express = require("express")
const router = express.Router();
const {uploadImage, allimages} = require('../controllers/imageController')


router.route("/").post(uploadImage)
router.route("/").get(allimages)


module.exports = router;