const express = require("express");
const router = express.Router();
const coversController = require("../../controllers/coversController");

/**
 * @swagger
 * /api/covers:
 *   get:
 *     tags:
 *         - covers
 *     summary: Get all covers (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of covers
 */

router.get("/", coversController.getAllCovers);

/**
 * @swagger
 * /api/covers/{id}:
 *   get:
 *     tags:
 *       - characters
 *     summary: Get a game by its id
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: A specific covers
 */
router.get("/:id", coversController.getCoversById);

module.exports = router; 