import { Request, Response } from "express";
import { ListOrderService } from "../../services/order/ListOrderService.js";

class ListOrderController {
    async handle(req:Request, res:Response){

        const ListOrders = new ListOrderService();

        const orders = await ListOrders.execute();

        return res.json(orders);
    }
}

export { ListOrderController }