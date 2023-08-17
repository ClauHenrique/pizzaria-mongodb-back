import  Express  from 'express';
import mongoose from 'mongoose';
import cors from 'cors';
import router from './routers.js';

const app = Express()

app.use(cors())
app.use(Express.json())

app.use(router)


mongoose.connect('mongodb://127.0.0.1:27017/pizzaria')
  .then(() => {
    console.log('Connected!')
    app.listen(3000)
    })
    .catch((erro) => console.log(erro))
  