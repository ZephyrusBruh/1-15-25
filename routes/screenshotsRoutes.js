const express = require("express");
const router = express.Router();
const ScreenshotControllers = require("../controllers/ScreenshotControllers");

/**
 * @swagger
 * /api/screenshots:
 *   get:
 *     tags:
 *         - screenshots
 *     summary: Get all screenshots (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of screenshots
 */

router.get("/", ScreenshotControllers.getAllScreenshots);


/**
 * @swagger
 * /api/screenshots/{id}:
 *   get:
 *     tags:
 *       - screenshots
 *     summary: Get a game by its id
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: A specific screenshots
 */
router.get("/:id", ScreenshotControllers.getScreenshotsById);

module.exports = router; 