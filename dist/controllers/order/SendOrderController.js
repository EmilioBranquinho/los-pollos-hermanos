"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.SendOrderController = void 0;
const SendOrderService_js_1 = require("../../services/order/SendOrderService.js");
class SendOrderController {
    async handle(req, res) {
        const { order_id } = req.body;
        const sendOrder = new SendOrderService_js_1.SendOrderService();
        const finishedOrder = await sendOrder.execute({ order_id });
        return res.json(finishedOrder);
    }
}
exports.SendOrderController = SendOrderController;
//# sourceMappingURL=SendOrderController.js.map