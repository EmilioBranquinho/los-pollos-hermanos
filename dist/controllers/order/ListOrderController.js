"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.ListOrderController = void 0;
const ListOrderService_js_1 = require("../../services/order/ListOrderService.js");
class ListOrderController {
    async handle(req, res) {
        const ListOrders = new ListOrderService_js_1.ListOrderService();
        const orders = await ListOrders.execute();
        return res.json(orders);
    }
}
exports.ListOrderController = ListOrderController;
//# sourceMappingURL=ListOrderController.js.map