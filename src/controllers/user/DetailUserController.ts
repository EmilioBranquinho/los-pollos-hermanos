import { Request, Response } from "express";
import { DetailUserService } from "../../services/user/DetailUserService";

class DetailUserController {
    async handle(req: Request, res: Response){
        
        const detailUserService = new DetailUserService();

        const userDetail = await detailUserService.execute();

        return res.json(userDetail)
    }
}

export { DetailUserController }