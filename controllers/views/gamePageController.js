const axios = require("axios");
const settings = require("../../config/settings");
async function renderGamePage(req, res) {
  const response = await axios.get(
    `${settings.ROOT}:${settings.PORT}/api/games/${req.params.id}`
  );
  let data = response.data;
  const cover = await getGameData(req.params.id,"covers");
  const genres= await getGameData(req.params.id,"genres");
  const gameModes= await getGameData(req.params.id,"game_modes");
  const platforms= await getGameData(req.params.id,"platforms");
  const characters= await getGameData(req.params.id,"characters");
  data.cover = cover[0] ? cover[0].url : "";
  data.genres = genres;
  data.gameModes = gameModes;
  data.platforms = platforms;
  data.characters = characters;
  console.log(data)
  res.render("game", {
    title: "CMP IDGB " + data.name,
    gameData: data
  });
}

async function getGameData(gameid, endpoint){
  let values = await axios.get(
    `${settings.ROOT}:${settings.PORT}/api/${endpoint}`,
    { params: { gameid: gameid} }
  );
  return values.data;
}
module.exports = { renderGamePage };