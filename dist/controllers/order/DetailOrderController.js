"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.DetailOrderController = void 0;
const DetailOrderService_js_1 = require("../../services/order/DetailOrderService.js");
class DetailOrderController {
    async handle(req, res) {
        const { order_id } = req.query;
        const Detailorder = new DetailOrderService_js_1.DetailOrderService();
        const orderDetails = await Detailorder.execute({ order_id: order_id });
        return res.json(orderDetails);
    }
}
exports.DetailOrderController = DetailOrderController;
//# sourceMappingURL=DetailOrderController.js.map