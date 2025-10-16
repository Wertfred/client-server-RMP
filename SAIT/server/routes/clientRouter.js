import models from "../models/models.js"
import Router from 'express'

const clientRouter = new Router();
const {Client} = models;

clientRouter.get('/list', async(req,res) =>{
    try{
        const getClietns = await Client.findAll() 

        res.status(200).json(getClietns)
    }
    catch(error){
        res.status(500).json({message: 'ошибка сервера при получении даннных'})
    };
});

export default clientRouter