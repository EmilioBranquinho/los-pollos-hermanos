import { Request, Response } from "express";
import { ListAllProductsService } from "../../services/product/ListAllProductsService.js";

class ListAllProductsController{
    async handle(req: Request, res: Response){

        const listAllProductService = new ListAllProductsService();

        const products = await listAllProductService.execute();

        return res.json(products);
    }
}

export { ListAllProductsController }