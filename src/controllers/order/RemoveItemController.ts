import { Request, Response } from "express";
import { RemoveItemService } from "../../services/order/RemoveItemService.js";

class RemoveItemController {
    async handle(req: Request, res: Response){

        const { item_id } = req.query;
        
        if (typeof item_id !== "string") {
            return res.status(400).json({
            error: "item_id is required and must be a string"
        });
    }

        const removeItem = new RemoveItemService();

        const removedItem = await removeItem.execute({ item_id });

        return res.json(removedItem)
    }
}

export { RemoveItemController }