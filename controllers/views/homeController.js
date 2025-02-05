const axios = require("axios");
const settings = require("../../config/settings");
async function renderHomePage(req, res) {
  let data = [];
  if (req.query.like) {
    const response = await axios.get(
      `${settings.ROOT}:${settings.PORT}/api/games`,
      {
        params: req.query,
      }
    );
    data = response.data;
    for (let game of data) {
      const cover = await axios.get(
        `${settings.ROOT}:${settings.PORT}/api/covers`,
        { params: { gameid: game.game_id } }
      );
      game.cover = cover.data[0] ? cover.data[0].url : "";
    }
    //data = response.data;
  }
  res.render("home", {
    title: "Games!",
    search: req.query.like ? req.query.like : "",
    gameData: data,
  });
}
module.exports = { renderHomePage };