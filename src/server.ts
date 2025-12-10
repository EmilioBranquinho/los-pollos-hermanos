import express, { Request, Response, NextFunction } from 'express';
import { router } from './routes/routes';
import cors from 'cors';

const app = express();
app.use(express.json());
app.use(cors());

const PORT = 3000;

app.use(router);

app.listen(PORT, () => console.log(`API rodando na porta ${PORT}`));
