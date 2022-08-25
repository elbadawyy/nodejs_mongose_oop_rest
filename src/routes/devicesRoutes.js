import express from 'express'
import * as getwaysController from "../controllers/getwayController.js"

var router = express.Router();

router.get('/',getwaysController.index);
router.post('/',getwaysController.create);

export default router
