const db = require("../config/db");

async function getAllGenres(start=0,limit=80,gameId){
    let where="";
    let join = "";
    let params = [];
    if(gameId){
        join = "inner join game_genre gg on g.genre_id = gg.genre_id";
        where=" where gg.game_id = ?";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());

    const [rows] = await db.execute(`Select * from genres g ${join} ${where} limit ?,?`, params);
    return rows;
}

async function getGenresById(genresId){
    const[rows] = await db.execute("Select * from genres where genre_id = ?", [genresId]);

    return rows[0];

 }
 module.exports = {getAllGenres, getGenresById};