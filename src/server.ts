import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes/routes';
import cors from 'cors';
import path from 'path';

const app = express();
app.use(express.json()); 
app.use(cors());
app.use('/img', express.static(path.resolve(__dirname, "..", "tmp")));

const PORT = 3000;

app.use(router);

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
