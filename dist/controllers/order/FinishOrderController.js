"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.FinishOrderController = void 0;
const FinishOrderService_js_1 = require("../../services/order/FinishOrderService.js");
class FinishOrderController {
    async handle(req, res) {
        const order_id = req.body.order_id;
        const finishOrder = new FinishOrderService_js_1.FinishOrderService();
        const finishedOrder = await finishOrder.execute({ order_id });
        return res.json(finishedOrder);
    }
}
exports.FinishOrderController = FinishOrderController;
//# sourceMappingURL=FinishOrderController.js.map