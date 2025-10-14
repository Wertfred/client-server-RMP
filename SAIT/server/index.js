// require('dotenv').config(); //commonJS
// import 'dotenv/config' // ES modules
// commonJS

// const express = require('express');
// const {router} = require('express');

// module.exports = myfunc;

// exports.myfunc = () => {

// };


// ESM
// import express from 'express';
// import {router} from 'express';

// import * as models from './models';


// export default myClass;
// export {class1, class2};

// export const myFunc = () => {

// };


import 'dotenv/config';
import express from 'express';
import sequelize from './db.js';
import models from './models/models.js';
const app = express();
const PORT = process.env.PORT;
const start = async() => {
    try {
        app.listen(PORT,() => {
    console.log(`Сервер работает на порту ${PORT}`)
        });
         await sequelize.authenticate();
            console.log("Подключение к базе данных выполнено успешно")
         await sequelize.sync({alter: true});
    }
    catch(error){
        console.log("не удалось подключиться к базе данных", error);
    }
}
start();

