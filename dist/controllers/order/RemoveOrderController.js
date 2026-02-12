"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.RemoveOrderController = void 0;
const RemoveOrderService_js_1 = require("../../services/order/RemoveOrderService.js");
class RemoveOrderController {
    async handle(req, res) {
        const order_id = req.query.order_id;
        const removeOrder = new RemoveOrderService_js_1.RemoveOrderService();
        const removedOrder = await removeOrder.execute({ order_id });
        return res.json(removedOrder);
    }
}
exports.RemoveOrderController = RemoveOrderController;
//# sourceMappingURL=RemoveOrderController.js.map