import models from "../models/models.js"

const {Product} = models;

export const getProduct = async(req,res) => {
        try{
            const getProduct = await Product.findAll()
    
            res.status(200).json(getProduct)
        }
        catch(error){
            res.status(500).json({message: 'ошибка сервера при получении даннных'})
        };
}

export const postProduct = async(req,res) => {
    try{
        const postProduct = await Product.create()

        res.status(200).json(postProduct)
    }
    catch(error){
        res.status(500).json({message: 'ошибка сервера при получении даннных'})
    };
}