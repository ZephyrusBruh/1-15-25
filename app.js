const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig");

const PORT = 4000;
const app = express();

const gamesRoutes = require("./routes/gamesRoutes.js");
const platformsRoutes = require("./routes/platformsRoutes.js");
const screenshotsRoutes = require("./routes/screenshotsRoutes.js");
const charactersRoutes = require("./routes/charactersRoutes.js");
const genresRoutes = require("./routes/genresRoutes.js");
const game_modeRoutes = require("./routes/game_modeRoutes.js");

app.use("/api/games", gamesRoutes);
app.use("/api/platforms", platformsRoutes);
app.use("/api/screenshots", screenshotsRoutes);
app.use("/api/characters", charactersRoutes);
app.use("/api/genres", genresRoutes);
app.use("/api/game_modes", game_modeRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

app.listen(PORT, () => {
    console.log(`Try going to http://localhost:${PORT}/api/games`);
    console.log(`Swagger docs available at http://localhost:${PORT}/api-docs`)
})
