import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService.js";


class DetailOrderController{
    async handle(req:Request, res:Response){

        const { order_id } = req.query;

        const Detailorder = new DetailOrderService();

        const orderDetails = await Detailorder.execute({ order_id: order_id as string });

        return res.json(orderDetails);
    }
}

export { DetailOrderController }