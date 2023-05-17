const express = require("express")
const router = express.Router();
const {uploadImage, allimages, updateCount} = require('../controllers/imageController')


router.route("/").post(uploadImage)
router.route("/").get(allimages)
router.route("/count").post(updateCount)


module.exports = router;