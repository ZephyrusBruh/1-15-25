const Screenshot = require("../../models/screenshots");

async function getAllScreenshots(req,res) {
    try{
        const {start, limit, gameid} = req.query;
        const screenshots = await Screenshot.getAllScreenshots(start,limit,gameid);
        res.status(200).json(screenshots);
    }catch(err){
        res.status(500).json({error: "Failed to fetch screenshot " + err});
    }
}

async function getScreenshotsById(req,res){
    try{
        const screenshots = await Screenshot.getScreenshotsById(req.params.id);
        if(screenshots){
            res.status(200).json(screenshots);
        } else {
            res.status(404).json({error: "Screenshot not found"})
        }
    }catch(err){
        res.status(500).json({error: "Failed to fetch Screenshot " + err});
    }
}

module.exports = {getAllScreenshots, getScreenshotsById};