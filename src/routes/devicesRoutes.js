import express from 'express'

import schemaValidator from "../middlewares/schemaValidator.js"
import { deviceRequestSchema } from "../validationSchemas/devicesSchemas.js"
import devicesController from "../controllers/devicesController.js"

var router = express.Router();

router.get('/', await async function (req, res) {
    devicesController.index(req, res)
});
router.post('/:getwayId', await schemaValidator(deviceRequestSchema), async function (req, res) {
    await devicesController.createInGetway(req, res)
});

export default router
