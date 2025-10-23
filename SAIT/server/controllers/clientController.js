import models from "../models/models.js"

const {Client} = models;

export const getClietns = async(req,res) => {
        try{
            const getClietns = await Client.findAll()
    
            res.status(200).json(getClietns)
        }
        catch(error){
            res.status(500).json({message: 'ошибка сервера при получении даннных'})
        };
}

export const postClietns = async(req,res) => {
    try{
        const postClietns = await Client.create()

        res.status(200).json(postClietns)
    }
    catch(error){
        res.status(500).json({message: 'ошибка сервера при получении даннных'})
    };
}