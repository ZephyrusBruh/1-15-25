const express = require("express");
const router = express.Router();
const game_modeController = require("../../controllers/api/game_modeController");

/**
 * @swagger
 * /api/game_mode:
 *   get:
 *     tags:
 *         - game_mode
 *     summary: Get all game_mode (default to limit of 50)
 *     parameters:
 *         - in: query
 *           name: start
 *         - in: query
 *           name: limit
 *         - in: query
 *           name: gameid
 *     responses:
 *       200:
 *         description: A list of game_modes
 */

router.get("/", game_modeController.getAllModes);

/**
 * @swagger
 * /api/game_mode/{id}:
 *   get:
 *     tags:
 *       - game_mode
 *     summary: Get a game by its id
 *     parameters:
 *       - in: path
 *         name: id
 *     responses:
 *       200:
 *         description: A specific game_mode
 */
router.get("/:id", game_modeController.getModesById);

module.exports = router; 