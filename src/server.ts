import express from 'express';
import { router } from './routes/routes.js';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.json()); 
app.use(cors({
  origin: "*",
  methods: ['GET', 'POST', 'PUT', 'DELETE', 'OPTIONS']
}));

app.use('/img', express.static(path.resolve(__dirname, "..", "tmp")));

const PORT = process.env.PORT;

app.use(router);

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
