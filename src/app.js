const express = require('express');
const dotenv = require('dotenv');
const connectDB = require('./config/db');
const routerMortos = require('./routes/routerMortos');
const routerUser = require('./routes/routerUser')

dotenv.config();
connectDB;

const app = express();
app.use(express.json());

app.use('/funeraria', routerMortos);
app.use('/user', routerUser);

const PORT = process.env.PORT || 3000;
app.listen(PORT, () => console.log(`Servidor rodando na porta ${PORT}`));