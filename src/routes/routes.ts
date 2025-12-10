import { Request, Response, Router ,NextFunction } from "express";
import { prisma } from '../lib/prisma';
import { CreateUserController } from "../controllers/user/createUserController";
import { AuthUserService } from "../services/user/AuthUserService";
import { AuthUserController } from "../controllers/user/AuthUserController";

const router = Router();

router.get("/", (req: Request, res: Response) =>{
    return res.status(200).send("Rota 100% funcional!")
})

router.post("/users", new CreateUserController().handle);

router.post("/login", new AuthUserController().handle);

export { router };