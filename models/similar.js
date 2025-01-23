const db = require("../config/db");

async function getAllSimilar(start=0,limit=50,gameId){
    let where="";
    let join = "";
    let params = [];
    if(gameId){
        join = "inner join games g on g.game_id = gs.game_id";
        where=" where g.game_id = ?";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());

    const [rows] = await db.execute(`Select * from game_similar gs ${join} ${where} limit ?,?`, params);
    return rows;
}

async function getSimilarById(gameId){
    const[rows] = await db.execute("Select * from game_similar gs inner join games g on g.game_id = gs.game_id where gs.similar_game_id = ?", [gameId],);

    return rows[0];

 }
 module.exports = {getAllSimilar, getSimilarById};