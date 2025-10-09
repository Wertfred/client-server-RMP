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
const app = express();
const PORT = process.env.PORT;
app.listen(PORT,() => {
    console.log(`Сервер работает на порту ${PORT}`)
});

