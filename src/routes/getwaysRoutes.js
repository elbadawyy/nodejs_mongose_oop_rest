import express from 'express'

import schemaValidator from "../middlewares/schemaValidator.js"
import { getwayRequestSchema } from "../validationSchemas/getwaysSchemas.js"
import getwaysController from "../controllers/getwayController.js"

var router = express.Router();

router.get('/', async function (req, res) {
    await getwaysController.index(req, res)
});
router.post('/', await schemaValidator(getwayRequestSchema), async function (req, res) {
    await getwaysController.createGetway(req, res)
});

export default router
