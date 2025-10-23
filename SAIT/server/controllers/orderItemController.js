import models from "../models/models.js"

const {Order_item} = models;

export const getOrder_item = async(req,res) => {
        try{
            const getOrder_item = await Order_item.findAll()
    
            res.status(200).json(getOrder_item)
        }
        catch(error){
            res.status(500).json({message: 'ошибка сервера при получении даннных'})
        };
}

export const postOrder_item = async(req,res) => {
    try{
        const postOrder_item = await Order_item.create()

        res.status(200).json(postOrder_item)
    }
    catch(error){
        res.status(500).json({message: 'ошибка сервера при получении даннных'})
    };
}