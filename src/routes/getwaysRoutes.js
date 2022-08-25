import express from 'express'
import getwaysController from "../controllers/getwayController.js"

var router = express.Router();

router.get('/',getwaysController.index);
router.post('/',getwaysController.createGetway);

export default router
