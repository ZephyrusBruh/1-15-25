const db = require("../config/db");

async function getAllWebsites(start=0,limit=50,gameId){
    let where="";
    let join = "";
    let params = [];
    if(gameId){
        join = "inner join games g on g.game_id = w.game_id";
        where=" where g.game_id = ?";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());

    const [rows] = await db.execute(`Select * from websites w ${join} ${where} limit ?,?`, params);
    return rows;
}

async function getWebsitesById(websiteId){
    const[rows] = await db.execute("Select * from websites where website_id = ?", [websiteId]);

    return rows[0];

 }
 module.exports = {getAllWebsites, getWebsitesById};