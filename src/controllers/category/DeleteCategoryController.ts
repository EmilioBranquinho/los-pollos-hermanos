import { Request, Response } from "express";
import { DeleteCategoryService } from "../../services/category/DeleteCategoryService.js";

class DeleteCategoryController{
    async handle(req: Request, res: Response){
       
        const { categoryId } = req.query;

        if (typeof categoryId !== "string") {
            return res.status(400).json({
            error: "categoryId is required and must be a string"
        })};

        const deleteCategoryService = new DeleteCategoryService();
        
        const category = await deleteCategoryService.execute(categoryId);

        return res.json(category);
    }
}

export { DeleteCategoryController }