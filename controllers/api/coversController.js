const Covers = require("../../models/covers");

async function getAllCovers(req,res) {
    try{
        const {start, limit, gameid} = req.query;
        const covers = await Covers.getAllCovers(start,limit,gameid);
        res.status(200).json(covers);
    }catch(err){
        res.status(500).json({error: "Failed to fetch covers " + err});
    }
}

async function getCoversById(req,res){
    try{
        const covers = await Covers.getCoversById(req.params.id);
        if(covers){
            res.status(200).json(covers);
        } else {
            res.status(404).json({error: "covers not found"})
        }
    }catch(err){
        res.status(500).json({error: "Failed to fetch covers " + err});
    }
}

module.exports = {getAllCovers, getCoversById};