const express = require("express");
const router = express.Router();
const charactersController = require("../../controllers/api/charactersController");

/**
 * @swagger
 * /api/characters:
 *   get:
 *     tags:
 *         - characters
 *     summary: Get all characters (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of characters
 */

router.get("/", charactersController.getAllCharacters);

/**
 * @swagger
 * /api/characters/{id}:
 *   get:
 *     tags:
 *       - characters
 *     summary: Get a game by its id
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: A specific characters
 */
router.get("/:id", charactersController.getCharactersById);

module.exports = router; 