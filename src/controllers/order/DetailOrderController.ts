import { Request, Response } from "express";
import { DetailOrderService } from "../../services/order/DetailOrderService";


class DetailOrderController{
    async handle(req:Request, res:Response){

        const { order_id } = req.body;

        const Detailorder = new DetailOrderService();

        const orderDetails = await Detailorder.execute({ order_id });

        return res.json(orderDetails);
    }
}

export { DetailOrderController }