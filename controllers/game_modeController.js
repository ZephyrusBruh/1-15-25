const Mode = require("../models/game_modes");

async function getAllModes(req,res) {
    try{
        const {start, limit, gameid} = req.query;
        const mode = await Mode.getAllModes(start,limit,gameid);
        res.status(200).json(mode);
    }catch(err){
        res.status(500).json({error: "Failed to fetch game modes " + err});
    }
}

async function getModesById(req,res){
    try{
        const mode = await Mode.getModesById(req.params.id);
        if(mode){
            res.status(200).json(mode);
        } else {
            res.status(404).json({error: "game modes not found"})
        }
    }catch(err){
        res.status(500).json({error: "Failed to fetch game modes " + err});
    }
}

module.exports = {getAllModes, getModesById};