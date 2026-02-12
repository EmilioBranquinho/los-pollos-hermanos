import { Request, Response } from "express";
import { CreateProductService } from "../../services/product/CreateProductService.js";

class CreateProductController{
    async handle(req: Request, res: Response){

        const { name, price, description, category_id } = req.body;

        if(!req.file){      
            throw new Error("Error, upload a file")
        }
                    console.log(req.body)   
            console.log(req.file) 

        const { filename } = req.file;

        const createProductService = new CreateProductService();

        const product = await createProductService.execute({
            name,
            price,
            description,
            category_id,
            banner: filename
        });

        return res.json(product);
    }
}

export { CreateProductController }