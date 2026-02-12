import { Request, Response } from "express";
import { FinishOrderService } from "../../services/order/FinishOrderService.js";

class FinishOrderController{
    async handle(req:Request, res:Response){

        const order_id = req.body.order_id;

        const finishOrder = new FinishOrderService();

        const finishedOrder = await finishOrder.execute({ order_id });

        return res.json(finishedOrder);
    }
}

export { FinishOrderController }