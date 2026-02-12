import { Request, Response } from "express";
import { AddItemService } from "../../services/order/AddItemService.js";

class AddItemController {
    async handle(req: Request, res: Response){

        const { amount, productId, orderId } = req.body;

        const addItem = new AddItemService();

        const item = await addItem.execute({ amount, productId, orderId })

        return res.json(item);
    }
}

export { AddItemController }