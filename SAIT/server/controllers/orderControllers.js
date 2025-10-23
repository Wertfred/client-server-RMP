import models from "../models/models.js"

const {Order} = models;

export const getOrder = async(req,res) => {
        try{
            const getOrder = await Order.findAll()
    
            res.status(200).json(getOrder)
        }
        catch(error){
            res.status(500).json({message: 'ошибка сервера при получении даннных'})
        };
}

export const postOrder = async(req,res) => {
    try{
        const postOrder = await Order.create()

        res.status(200).json(postOrder)
    }
    catch(error){
        res.status(500).json({message: 'ошибка сервера при получении даннных'})
    };
}