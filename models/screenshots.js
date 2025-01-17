const db = require("../config/db");

async function getAllScreenshots(start=0,limit=50, gameId){
    let where="";
    let params = [];
    let join = "";
    if(gameId){
        join = "inner join screenshots sc on s.screenshot_id = sc.screenshot_id";
        where=" where sc.game_id = ?";
        params.push(gameId);
    }
    params.push(start.toString());
    params.push(limit.toString());

    const [rows] = await db.execute(`Select * from screenshots s ${join} ${where} limit ?,?`, params);
    return rows;
}

async function getScreenshotsById(gameId){
    const[rows] = await db.execute("Select * from screenshots where screenshot_id = ?", [gameId]);

    return rows[0];

 }
 module.exports = {getAllScreenshots, getScreenshotsById};