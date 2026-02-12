"use strict";
Object.defineProperty(exports, "__esModule", { value: true });
exports.CreateOrderController = void 0;
const CreateOrderService_js_1 = require("../../services/order/CreateOrderService.js");
class CreateOrderController {
    async handle(req, res) {
        const { table, name } = req.body;
        const createOrder = new CreateOrderService_js_1.CreateOrderService();
        const order = await createOrder.execute({ table, name });
        return res.json(order);
    }
}
exports.CreateOrderController = CreateOrderController;
//# sourceMappingURL=CreateOrderController.js.map