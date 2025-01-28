const Character = require("../../models/characters");

async function getAllCharacters(req,res) {
    try{
        const {start, limit, gameid} = req.query;
        const character = await Character.getAllCharacters(start,limit,gameid);
        res.status(200).json(character);
    }catch(err){
        res.status(500).json({error: "Failed to fetch characters " + err});
    }
}

async function getCharactersById(req,res){
    try{
        const character = await Character.getCharactersById(req.params.id);
        if(character){
            res.status(200).json(character);
        } else {
            res.status(404).json({error: "Character not found"})
        }
    }catch(err){
        res.status(500).json({error: "Failed to fetch character " + err});
    }
}

module.exports = {getAllCharacters, getCharactersById};