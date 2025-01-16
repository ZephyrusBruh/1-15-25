const db = require("../config/db");

async function getAllPlatforms(start=0,limit=50,like){
    let where="";
    let params = [];
    if(like){
        where="where name like concat('%',?,'%')";
        params.push(like);
    }
    params.push(start.toString());
    params.push(limit.toString());

    const [rows] = await db.execute(`Select * from platforms ${where} limit ?,?`, params);
    return rows;
}

async function getPlatformsById(platformId){
    const[rows] = await db.execute("Select * from platforms where platform_id = ?", [platformId]);

    return rows[0];

 }
 module.exports = {getAllPlatforms, getPlatformsById};