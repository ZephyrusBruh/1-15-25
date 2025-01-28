const Similar = require("../../models/similar");

async function getAllSimilar(req,res) {
    try{
        const {start, limit, gameid} = req.query;
        const similar = await Similar.getAllSimilar(start,limit,gameid);
        res.status(200).json(similar);
    }catch(err){
        res.status(500).json({error: "Failed to fetch similar " + err});
    }
}

async function getSimilarById(req,res){
    try{
        const similar = await Similar.getSimilarById(req.params.id);
        if(similar){
            res.status(200).json(similar);
        } else {
            res.status(404).json({error: "similar not found"})
        }
    }catch(err){
        res.status(500).json({error: "Failed to fetch similar " + err});
    }
}

module.exports = {getAllSimilar, getSimilarById};