import models from "../models/models.js"

const {Client} = models;

export const getClietns = async(req,res,next) => {
        try{
            const getClietns = await Client.findAll()
    
            res.status(200).json(getClietns)
        }
        catch(err){
            next(err)
        };
}

export const postClietns = async(req,res,next) => {
    try{
        const postClietns = await Client.create()

        res.status(200).json(postClietns)
    }
    catch(err){
        next(err)
    };
}