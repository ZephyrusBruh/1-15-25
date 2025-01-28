const express = require("express");
const router = express.Router();
const platformController = require("../controllers/platformController");

/**
 * @swagger
 * /api/platforms:
 *   get:
 *     tags:
 *         - platforms
 *     summary: Get all platforms (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of platforms
 */

router.get("/", platformController.getAllPlatforms);

/**
 * @swagger
 * /api/platforms/{id}:
 *   get:
 *     tags:
 *       - platforms
 *     summary: Get a game by its id
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: A specific platforms
 */
router.get("/:id", platformController.getPlatformsById);

module.exports = router; 