const express = require("express");
const router = express.Router();
const similarController = require("../controllers/similarController.js");

/**
 * @swagger
 * /api/similar:
 *   get:
 *     tags:
 *         - similar
 *     summary: Get all similar (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of similar
 */

router.get("/", similarController.getAllSimilar);

/**
 * @swagger
 * /api/similar/{id}:
 *   get:
 *     tags:
 *       - similar
 *     summary: Get a game by its id
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: A specific similar
 */
router.get("/:id", similarController.getSimilarById);

module.exports = router; 