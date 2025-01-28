const Platform = require("../../models/platform");

async function getAllPlatforms(req,res) {
    try{
        const {start, limit, gameid} = req.query;
        const platform = await Platform.getAllPlatforms(start,limit,gameid);
        res.status(200).json(platform);
    }catch(err){
        res.status(500).json({error: "Failed to fetch platforms " + err});
    }
}

async function getPlatformsById(req,res){
    try{
        const platform = await Platform.getPlatformsById(req.params.id);
        if(platform){
            res.status(200).json(platform);
        } else {
            res.status(404).json({error: "Platform not found"})
        }
    }catch(err){
        res.status(500).json({error: "Failed to fetch platform " + err});
    }
}

module.exports = {getAllPlatforms, getPlatformsById};