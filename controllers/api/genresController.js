const Genre = require("../../models/genres");

async function getAllGenres(req,res) {
    try{
        const {start, limit, gameid} = req.query;
        const genre = await Genre.getAllGenres(start,limit,gameid);
        res.status(200).json(genre);
    }catch(err){
        res.status(500).json({error: "Failed to fetch characters " + err});
    }
}

async function getGenresById(req,res){
    try{
        const genre = await Genre.getGenresById(req.params.id);
        if(genre){
            res.status(200).json(genre);
        } else {
            res.status(404).json({error: "Genres not found"})
        }
    }catch(err){
        res.status(500).json({error: "Failed to fetch genre " + err});
    }
}

module.exports = {getAllGenres, getGenresById};