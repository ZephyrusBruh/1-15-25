const db = require("../config/db");

async function getAllCovers(start=0,limit=80,gameId){
    let where="";
    let join = "";
    let params = [];
    if(gameId){
        join = "inner join game_covers gc on g.game_id = gc.game_id";
        where=" where gc.game_id = ?";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());

    const [rows] = await db.execute(`Select * from game_covers g ${join} ${where} limit ?,?`, params);
    return rows;
}

async function getCoversById(coverId){
    const[rows] = await db.execute("Select * from game_covers where cover_id = ?", [coverId]);

    return rows[0];

 }
 module.exports = {getAllCovers, getCoversById};