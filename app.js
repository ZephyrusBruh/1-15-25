const path = require("path");
const settings = require("./config/settings");
const express = require("express");
const swaggerUI = require("swagger-ui-express");
const swaggerSpec = require("./swagger/swaggerConfig");

const PORT = 4000;
const app = express();

const gamesRoutes = require("./routes/api/gamesRoutes.js");
const platformsRoutes = require("./routes/api/platformsRoutes.js");
const screenshotsRoutes = require("./routes/api/screenshotsRoutes.js");
const charactersRoutes = require("./routes/api/charactersRoutes.js");
const genresRoutes = require("./routes/api/genresRoutes.js");
const game_modeRoutes = require("./routes/api/game_modeRoutes.js");
const websitesRoutes = require("./routes/api/websitesRoutes.js")
const similarRoutes = require("./routes/api/similarRoutes.js")
const coversRoutes = require("./routes/api/coversRoutes.js")

app.use("/api/games", gamesRoutes);
app.use("/api/platforms", platformsRoutes);
app.use("/api/screenshots", screenshotsRoutes);
app.use("/api/characters", charactersRoutes);
app.use("/api/genres", genresRoutes);
app.use("/api/game_modes", game_modeRoutes);
app.use("/api/websites", websitesRoutes);
app.use("/api/similar", similarRoutes);
app.use("/api/covers", coversRoutes);
app.use("/api-docs", swaggerUI.serve, swaggerUI.setup(swaggerSpec));

const homeRoute = require("./routes/views/homeRoutes");
app.use("/", homeRoute);
app.use(express.static(__dirname + "/public"))

app.set("view engine", "ejs");
app.set("views", path.join(__dirname, "views"))


app.listen(settings.PORT, () => {
    console.log(`Try going to http://localhost:${settings.PORT}/api/games`);
    console.log(`Swagger docs available at http://localhost:${settings.PORT}/api-docs`)
})
