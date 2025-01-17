const Websites = require("../models/websites");

async function getAllWebsites(req,res) {
    try{
        const {start, limit, gameid} = req.query;
        const websites = await Websites.getAllWebsites(start,limit,gameid);
        res.status(200).json(websites);
    }catch(err){
        res.status(500).json({error: "Failed to fetch websites " + err});
    }
}

async function getWebsitesById(req,res){
    try{
        const websites = await Websites.getWebsitesById(req.params.id);
        if(websites){
            res.status(200).json(websites);
        } else {
            res.status(404).json({error: "websites not found"})
        }
    }catch(err){
        res.status(500).json({error: "Failed to fetch websites " + err});
    }
}

module.exports = {getAllWebsites, getWebsitesById};