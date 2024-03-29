const router = require('express').Router();
ctrl = require("../controllers/videos");

router.get("/home", ctrl.home);
//router.post("home", ctrl.Home);
router.get("/upload", ctrl.upload);
router.post("/upload", ctrl.createdVideo);
router.get("/browse", ctrl.browsing);
router.get("/browse/:id", ctrl.destroyVideo);
router.post("/browse/:id/edit", ctrl.editVideo);
router.post("/browse/:id/", ctrl.updateVideo);

module.exports = router;