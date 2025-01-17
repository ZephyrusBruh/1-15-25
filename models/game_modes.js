const db = require("../config/db");

async function getAllModes(start=0,limit=80,gameId){
    let where="";
    let join = "";
    let params = [];
    if(gameId){
        join = "inner join game_game_mode gg on g.game_mode_id = gg.game_mode_id";
        where=" where gg.game_id = ?";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());

    const [rows] = await db.execute(`Select * from game_modes g ${join} ${where} limit ?,?`, params);
    return rows;
}

async function getModesById(gameModeId){
    const[rows] = await db.execute("Select * from game_modes where game_mode_id = ?", [gameModeId]);

    return rows[0];

 }
 module.exports = {getAllModes, getModesById};