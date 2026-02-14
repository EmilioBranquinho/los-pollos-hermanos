import { Request, Response } from "express";
import { DeleteProductService } from "../../services/product/DeleteProductService";

class DeleteProductController{
    async handle(req: Request, res: Response){

        const { product_id } = req.query;

        if(!product_id){      
            throw new Error("Error, product_id cannot be undefined")
        }
        const createProductService = new DeleteProductService();

        const product = await createProductService.execute(product_id as string);

        return res.json(product);
    }
}

export { DeleteProductController }



