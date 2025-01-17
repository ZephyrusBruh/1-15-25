const db = require("../config/db");

async function getAllCharacters(start=0,limit=80,gameId){
    let where="";
    let join = "";
    let params = [];
    if(gameId){
        join = "inner join game_characters gc on c.character_id = gc.characters_id";
        where=" where gc.game_id = ?";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());

    const [rows] = await db.execute(`Select * from characters c ${join} ${where} limit ?,?`, params);
    return rows;
}

async function getCharactersById(characterId){
    const[rows] = await db.execute("Select * from characters where character_id = ?", [characterId]);

    return rows[0];

 }
 module.exports = {getAllCharacters, getCharactersById};